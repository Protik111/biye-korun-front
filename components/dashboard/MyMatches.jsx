import { Checkbox, Divider, Group, Radio } from "@mantine/core";
import React from "react";
import SingleProfile from "./SingleProfile";
import useAxios from "@/hooks/axios/useAxios";
import CardSkeleton from "../global/CardSkeleton";

const MyMatches = () => {
  const skeletons = new Array(5).fill();

  const { data, error, loading, refetch } = useAxios("user/getMatches", "POST", null, {}, {
    page: 1,
    limit: 10,
    sort_by: "newest",
  });

  // console.log('data', data);

  return (
    <div>
      <div className="myMatches container">
        <div className="myMatches__wrapper">
          <div className="myMatches__wrapper--requestBox">
            <h3 className="text-center pb-5 secondary-text">Refine Searches</h3>
            <div className="requestBox-container">
              <Radio.Group name="matches" label="Matches">
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
              </Checkbox.Group>

              <Divider my={10}></Divider>

              <Checkbox.Group defaultValue={["all"]} label="Marital status">
                <Group mt="xs" className="flex-column align-start">
                  <Checkbox color="pink" value="all" label="All" />
                  <Checkbox
                    color="pink"
                    value="neverMarried"
                    label="Never married"
                  />
                  <Checkbox color="pink" value="divorced" label="Divorced" />
                  <Checkbox
                    color="pink"
                    value="awaitingDivorced"
                    label="Awaiting divorced"
                  />

                  <Checkbox color="pink" value="widowed" label="Widowed" />
                </Group>
              </Checkbox.Group>

              <Divider my={10}></Divider>

              <Radio.Group name="religion" label="Religion">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="muslim" label="Muslim" />
                  <Radio color="pink" value="hindu" label="Hindu" />
                  <Radio color="pink" value="christain" label="Christain" />
                </Group>
              </Radio.Group>

              <Divider my={10}></Divider>

              <Radio.Group name="motherTongue" label="Mother Tongue">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="bengali" label="Bengali" />
                  <Radio color="pink" value="english" label="English" />
                  <Radio color="pink" value="hindi" label="Hindi" />
                </Group>
              </Radio.Group>

              <Divider my={10}></Divider>

              <Radio.Group name="countryLivingIn" label="Country Living in">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="bangladesh" label="Bangladesh" />
                  <Radio color="pink" value="usa" label="USA" />
                  <Radio color="pink" value="canada" label="Canada" />
                  <Radio color="pink" value="india" label="India" />
                </Group>
              </Radio.Group>

              <Divider my={10}></Divider>

              <Radio.Group name="educationLevel" label="Education Level">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="bachelor" label="Bachelor" />
                  <Radio color="pink" value="honors" label="Honors" />
                  <Radio color="pink" value="masters" label="Masters" />
                  <Radio color="pink" value="diploma" label="Diploma" />
                  <Radio color="pink" value="highSchool" label="High school" />
                </Group>
              </Radio.Group>

              <Radio.Group name="educationArea" label="Education Area">
                <Group mt="xs" className="flex-column align-start">
                  <Radio color="pink" value="all" label="All" />
                  <Radio color="pink" value="engineering" label="Engineering" />
                  <Radio color="pink" value="arts" label="Arts" />
                  <Radio color="pink" value="science" label="Science" />
                  <Radio color="pink" value="commerce" label="Commerce" />
                </Group>
              </Radio.Group>

              <Divider my={10}></Divider>
            </div>
          </div>

          <div className="myMatches__wrapper--contentBox mt-10">
            {data?.data?.length > 0 ? data?.data?.map((profile, i) => (
              <div key={i} className="mt-15">
                <SingleProfile profile={profile} loading={loading} refetch={refetch}></SingleProfile>
              </div>
            )) : (
              skeletons?.map((item, i) => <div className="mt-15" key={i}>
                <CardSkeleton></CardSkeleton>
              </div>)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMatches;
