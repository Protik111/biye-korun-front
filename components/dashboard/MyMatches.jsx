import { Checkbox, Divider, Group, MultiSelect, Pagination, Radio } from "@mantine/core";
import React, { useEffect, useMemo, useState } from "react";
import SingleProfile from "./SingleProfile";
import useAxios from "@/hooks/axios/useAxios";
import CardSkeleton from "../global/CardSkeleton";
import NoDataFound from "../global/NoDataFound";
import { communities, qualifications } from "@/staticData/InputFields/inputFields";
import useCountry from "@/hooks/common/useCountry";


const MyMatches = () => {
  const [filterData, setFilterData] = useState({
    maritalStatus: ['all'],
    religion: '',
    motherTongue: [],
    country: [],
    education: [],
  })
  const [activePage, setActivePage] = useState(1);
  const [countryList, setCountryList] = useState([]);
  const pageSize = 5;

  const { maritalStatus, religion, motherTongue, country, education } = filterData;
  const skeletons = new Array(5).fill();

  const payload = {
    page: activePage,
    limit: pageSize,
    sort_by: "newest"
  }

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

  const { data, error, loading, refetch } = useAxios("user/getMatches", "POST", null, {}, payload);

  //for page count in the pagination component
  const totalCount = Math.ceil(data?.total / pageSize)


  useEffect(() => {
    refetch();
  }, [filterData, activePage])

  // console.log('data', data);

  const handleChange = (name, value) => {
    setFilterData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

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

  console.log('filterData', filterData);

  return (
    <div>
      <div className="myMatches container">
        <div className="myMatches__wrapper">
          <div className="myMatches__wrapper--requestBox">
            <h3 className="text-center pb-5 secondary-text">Refine Searches</h3>
            <div className="requestBox-container">
              <>
                {/* <Radio.Group name="matches" label="Matches">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio
                    color="pink"
                    value="2-way-matches"
                    label="2 Way Matches"
                  />
                </Group>
              </Radio.Group>

              <Divider my={10}></Divider>

              <Radio.Group name="photoSettings" label="Photo settings">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio
                    color="pink"
                    value="visibleToAll"
                    label="Visible To All"
                  />
                  <Radio
                    color="pink"
                    value="protectedPhoto"
                    label="Protected Photo"
                  />
                </Group>
              </Radio.Group>

              <Divider my={10}></Divider>

              <Radio.Group name="recentlyJoined" label="Recently joined">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio
                    color="pink"
                    value="withinAWeek"
                    label="within a week"
                  />
                  <Radio
                    color="pink"
                    value="withinAMonth"
                    label="within a month"
                  />
                </Group>
              </Radio.Group>

              <Divider my={10}></Divider>

              <Radio.Group name="activeMembers" label="Active Members">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="withinADay" label="within a day" />
                  <Radio
                    color="pink"
                    value="withinAWeek"
                    label="within a week"
                  />
                  <Radio
                    color="pink"
                    value="withinAMonth"
                    label="within a month"
                  />
                </Group>
              </Radio.Group>

              <Divider my={10}></Divider>

              <Checkbox.Group defaultValue={["all"]} label="Annual income">
                <Group mt="xs" className="flex-column align-start">
                  <Checkbox color="pink" value="all" label="All" />
                  <Checkbox
                    color="pink"
                    value="uptoBdt40k"
                    label="Upto BDT 40K"
                  />
                  <Checkbox
                    color="pink"
                    value="uptoBdt40kTo80k"
                    label="Upto BDT 40K To 80K"
                  />
                  <Checkbox
                    color="pink"
                    value="uptoBdt80k100k+"
                    label="Upto BDT 80K TO 100k+"
                  />
                </Group>
              </Checkbox.Group> */}
              </>

              {/* <Divider my={10}></Divider> */}

              <Checkbox.Group onChange={(e) => handleChange('maritalStatus', e)} name="maritalStatus" defaultValue={["All"]} label="Marital status">
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
                </Group>
              </Checkbox.Group>

              <Divider my={10}></Divider>

              <Radio.Group onChange={(e) => handleChange('religion', e)} name="religion" label="Religion">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="Muslim" label="Muslim" />
                  <Radio color="pink" value="Hindu" label="Hindu" />
                  <Radio color="pink" value="Christain" label="Christain" />
                </Group>
              </Radio.Group>

              <Divider my={10}></Divider>

              {/* <Radio.Group onChange={(e) => handleChange('motherTongue', e)} name="motherTongue" label="Mother Tongue">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="Bengali" label="Bengali" />
                  <Radio color="pink" value="English" label="English" />
                  <Radio color="pink" value="Hindi" label="Hindi" />
                </Group>
              </Radio.Group> */}

              <MultiSelect
                variant="unstyled"
                size="md"
                placeholder="Select community"
                label="Language"
                data={communities}
                value={filterData.motherTongue}
                name="motherTongue"
                onChange={(event) => handleChange("motherTongue", event)}
                searchable
              />

              <Divider my={10}></Divider>

              {/* <Radio.Group onChange={(e) => handleChange('country', e)} name="country" label="Country Living in">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="Bangladesh" label="Bangladesh" />
                  <Radio color="pink" value="USA" label="USA" />
                  <Radio color="pink" value="Canada" label="Canada" />
                  <Radio color="pink" value="India" label="India" />
                </Group>
              </Radio.Group> */}


              <MultiSelect
                variant="unstyled"
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

              <Divider my={10}></Divider>

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
                variant="unstyled"
                size="md"
                placeholder="Select"
                label="Education Qualification"
                data={qualifications}
                dataKey="value"
                groupKey="label"
                // value={formValues.qualification}
                name="education"
                onChange={(event) => handleChange("education", event)}
                searchable
              />

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
            </div>
          </div>

          <div className="myMatches__wrapper--contentBox mt-10">
            {(!loading && data?.data?.length > 0) ? data?.data?.map((profile, i) => (
              <>
                <div key={i} className="mt-15">
                  <SingleProfile profile={profile} loading={loading} refetch={refetch}></SingleProfile>
                </div>
              </>
            )) :
              !loading && data?.data?.length === 0 ?
                <div className="flex justify-center flex-column align-center">
                  <h2>No Matches Found!</h2>
                  <NoDataFound></NoDataFound>
                </div> :
                loading ? <div className="container-box-bg p-30 mt-20 min-vh-75">
                  <CardSkeleton></CardSkeleton>
                </div> : <></>}

            {data?.data?.length > 0 && <div className="flex justify-center mt-15 px-10">
              <Pagination color="pink" value={activePage} onChange={handlePageChange} total={totalCount} />
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMatches;
