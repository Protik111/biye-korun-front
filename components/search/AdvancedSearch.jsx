import {
  Button,
  Checkbox,
  Divider,
  Group,
  MultiSelect,
  Pagination,
  Radio,
} from "@mantine/core";
import React, { useEffect, useMemo, useState } from "react";

import useAxios from "@/hooks/axios/useAxios";
import CardSkeleton from "../global/CardSkeleton";
import NoDataFound from "../global/NoDataFound";
import {
  communities,
  qualifications,
} from "@/staticData/InputFields/inputFields";
import useCountry from "@/hooks/common/useCountry";
import { btnBackground } from "@/styles/library/mantine";

const AdvancedSearch = ({ handleClearFilter, handleChange }) => {
  const [filterData, setFilterData] = useState({
    maritalStatus: [""],
    religion: "all",
    motherTongue: [],
    country: [],
    education: [],
  });
  const [activePage, setActivePage] = useState(1);
  const [countryList, setCountryList] = useState([]);
  const pageSize = 5;

  const { maritalStatus, religion, motherTongue, country, education } =
    filterData;
  const skeletons = new Array(5).fill();

  const payload = {
    page: activePage,
    limit: pageSize,
    sort_by: "newest",
  };

  if (maritalStatus.length > 0) {
    payload.marital = maritalStatus;
  }

  if (motherTongue?.length !== 0) {
    payload.motherLanguage = motherTongue;
  }

  if (country?.length !== 0) {
    payload.country = country;
    // payload.country = payload.country.map(function (country) {
    //   return country.replace(/\u00A0/g, ' '); // Replace non-breaking space with a regular space
    // });
  }

  if (education?.length !== 0) {
    payload.education = education;
  }

  if (religion?.length !== 0) {
    payload.religion = religion;
  }

  const { data, error, loading, refetch } = useAxios(
    "user/getMatches",
    "POST",
    null,
    {},
    payload
  );

  //for page count in the pagination component
  const totalCount = Math.ceil(data?.total / pageSize);

  useEffect(() => {
    refetch();
  }, [filterData, activePage]);

  // console.log('data', data);

  //   const handleChange = (name, value) => {
  //     setFilterData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  const handlePageChange = (page) => {
    // console.log('page', page);
    setActivePage(page);
  };

  const { data: data2, error: error2, loading: loading2 } = useCountry();

  useEffect(() => {
    if (!loading2?.country) {
      const convertedList = data2?.country?.map((item) => ({
        label: item?.name,
        value: item?.name,
        code: item?.iso2,
      }));

      setCountryList(convertedList);
    }
  }, [data2]);

  //   const handleClearFilter = () => {
  //     setFilterData({
  //       // ...filterData,
  //       maritalStatus: [""],
  //       religion: "all",
  //       motherTongue: [],
  //       country: [],
  //       education: [],
  //     });
  //   };
  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    console.log("event", e);
    handleChange(name, value);
  };
  console.log("data", data);

  return (
    <div>
      <div className="myMatches container">
        <div className="myMatches__wrapper1">
          <div className="myMatches__wrapper--requestBox">
            <div className="flex justify-between align-center py-10">
              <div>
                <h3 className="text-center pb-5 secondary-text1">
                  Advanced Search
                </h3>
              </div>
              <Button
                onClick={handleClearFilter}
                variant="outline"
                color="pink"
                size="xs"
                radius="xl"
              >
                Clear Filters
              </Button>
            </div>
            <div className="requestBox-container1">
              <Divider my={10}></Divider>
              <Radio.Group
                onChange={(e) => handleInputChange("religion", e)}
                name="religion"
                label="Religion"
                value={filterData.religion}
              >
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="Hinduism" label="Hinduism" />
                  <Radio
                    color="pink"
                    value="Christianity"
                    label="Christianity"
                  />
                  <Radio color="pink" value="Buddhism" label="Buddhism" />
                  <Radio color="pink" value="Judaism" label="Judaism" />
                  <Radio color="pink" value="Others" label="Others" />
                </Group>
              </Radio.Group>
              <br />
              <Divider my={10}></Divider>

              <Checkbox.Group
                onChange={(e) => handleChange("maritalStatus", e)}
                name="maritalStatus"
                defaultValue={["All"]}
                label="Marital Status"
                value={filterData.maritalStatus}
              >
                <Group mt="xs" className="flex-column align-start">
                  <Checkbox color="pink" value="all" label="All" />
                  <Checkbox
                    color="pink"
                    value="Never Married"
                    label="Never Married"
                  />
                  <Checkbox color="pink" value="Divorced" label="Divorced" />
                  <Checkbox
                    color="pink"
                    value="Awaiting Divorced"
                    label="Awaiting Divorced"
                  />

                  <Checkbox color="pink" value="Widowed" label="Widowed" />

                  <Checkbox color="pink" value="Married" label="Married" />
                </Group>
              </Checkbox.Group>

              <br />
              <Divider my={10}></Divider>

              <MultiSelect
                variant="filled"
                radius="xl"
                size="md"
                placeholder="Select language"
                label="Language"
                data={communities}
                value={filterData.motherTongue}
                name="motherTongue"
                onChange={(event) => handleChange("motherTongue", event)}
                searchable
              />
              <br />
              {/* <Divider my={10}></Divider> */}

              <MultiSelect
                variant="filled"
                radius="xl"
                size="md"
                placeholder="Select"
                label="Country"
                // styles={{ label: labelStyles }}
                // data={countries}
                data={countryList}
                value={filterData.country}
                name="country"
                onChange={(event) => handleChange("country", event)}
                searchable
              />

              {/* <Divider my={10}></Divider> */}
              <br />
              {/* <Radio.Group name="education" onChange={(e) => handleChange('education', e)} label="Education Level">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="BSC" label="BSC" />
                  <Radio color="pink" value="BA (Hons)" label="BA (Hons)" />
                  <Radio color="pink" value="B.Arch (Hons)" label="B.Arch (Hons)" />
                  <Radio color="pink" value="M.A" label="M.A" />
                  <Radio color="pink" value="M.Arch" label="M.Arch" />
                </Group>
              </Radio.Group> */}

              <MultiSelect
                variant="filled"
                radius="xl"
                size="md"
                placeholder="Select"
                label="Education Qualification"
                data={qualifications}
                dataKey="value"
                groupKey="label"
                value={filterData.education}
                name="education"
                onChange={(event) => handleChange("education", event)}
                searchable
              />
              <br />
              {/* <Radio.Group name="educationArea" label="Education Area">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="engineering" label="Engineering" />
                  <Radio color="pink" value="arts" label="Arts" />
                  <Radio color="pink" value="science" label="Science" />
                  <Radio color="pink" value="commerce" label="Commerce" />
                </Group>
              </Radio.Group> */}

              <Divider my={10}></Divider>
              <br />
              <Button size="md" fullWidth radius="xl" style={btnBackground}>
                Search
              </Button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
