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

const AdvancedSearch = ({
  handleClearFilter,
  handleChange,
  filterData,
  countryList,
}) => {
  const [activePage, setActivePage] = useState(1);
  const pageSize = 5;

  const skeletons = new Array(5).fill();

  const handleInputChange = (name, value) => {
    handleChange(name, value);
  };

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
                onChange={(value) => handleInputChange("religion", value)}
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
                onChange={(e) => handleInputChange("maritalStatus", e)}
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
                onChange={(event) => handleInputChange("motherTongue", event)}
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
                onChange={(event) => handleInputChange("country", event)}
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
                onChange={(event) => handleInputChange("education", event)}
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
