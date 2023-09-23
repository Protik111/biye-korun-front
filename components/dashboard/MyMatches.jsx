import { Checkbox, Divider, Group, Radio } from "@mantine/core";
import React, { useEffect, useState } from "react";
import SingleProfile from "./SingleProfile";
import useAxios from "@/hooks/axios/useAxios";
import CardSkeleton from "../global/CardSkeleton";
import NoDataFound from "../global/NoDataFound";

const MyMatches = () => {
  const [filterData, setFilterData] = useState({
    maritalStatus: ['all'],
    religion: '',
    motherTongue: '',
    country: '',
    education: '',

  })

  const { maritalStatus, religion, motherTongue, country, education } = filterData;
  const skeletons = new Array(5).fill();

  const payload = {
    page: 1,
    limit: 10,
    sort_by: "newest"
  }

  if (maritalStatus.length > 0) {
    payload.marital = maritalStatus;
  }

  if (motherTongue !== '') {
    payload.motherLanguage = motherTongue;
  }

  if (country !== '') {
    payload.country = country;
  }

  if (education !== '') {
    payload.education = education;
  }

  if (religion !== '') {
    payload.religion = religion;
  }

  const { data, error, loading, refetch } = useAxios("user/getMatches", "POST", null, {}, payload);



  useEffect(() => {
    refetch();

  }, [filterData])

  // console.log('data', data);

  const handleChange = (name, value) => {
    setFilterData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // console.log('filterData', filterData);

  return (
    <div>
      <div className="myMatches container">
        <div className="myMatches__wrapper">
          <div className="myMatches__wrapper--requestBox">
            <h3 className="text-center pb-5 secondary-text">Refine Searches</h3>
            <div className="requestBox-container">
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

              <Radio.Group onChange={(e) => handleChange('motherTongue', e)} name="motherTongue" label="Mother Tongue">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="Bengali" label="Bengali" />
                  <Radio color="pink" value="English" label="English" />
                  <Radio color="pink" value="Hindi" label="Hindi" />
                </Group>
              </Radio.Group>

              <Divider my={10}></Divider>

              <Radio.Group onChange={(e) => handleChange('country', e)} name="country" label="Country Living in">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="Bangladesh" label="Bangladesh" />
                  <Radio color="pink" value="USA" label="USA" />
                  <Radio color="pink" value="Canada" label="Canada" />
                  <Radio color="pink" value="India" label="India" />
                </Group>
              </Radio.Group>

              <Divider my={10}></Divider>

              <Radio.Group name="education" onChange={(e) => handleChange('education', e)} label="Education Level">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="BSC" label="BSC" />
                  <Radio color="pink" value="BA (Hons)" label="BA (Hons)" />
                  <Radio color="pink" value="B.Arch (Hons)" label="B.Arch (Hons)" />
                  <Radio color="pink" value="M.A" label="M.A" />
                  <Radio color="pink" value="M.Arch" label="M.Arch" />
                </Group>
              </Radio.Group>

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
            {data?.data?.length > 0 ? data?.data?.map((profile, i) => (
              <div key={i} className="mt-15">
                <SingleProfile profile={profile} loading={loading} refetch={refetch}></SingleProfile>
              </div>
            )) :
              !loading && data?.data?.length === 0 ?
                <div className="flex justify-center flex-column align-center">
                  <h2>There is no data!</h2>
                  <NoDataFound></NoDataFound>
                </div> :
                loading ? <div className="container-box-bg p-30 mt-20 min-vh-75">
                  <CardSkeleton></CardSkeleton>
                </div> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMatches;
