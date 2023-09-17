import { imageUrl } from "@/staticData/image";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import { Badge, Button, Divider, List, ThemeIcon } from "@mantine/core";
import {
  IconCircleCheck,
  IconCircleDashed,
  IconLock,
  IconMessages,
  IconRocket,
} from "@tabler/icons-react";
import React from "react";

const SingleProfile = ({ profile }) => {
  const {
    location: { city, residencyStatus } = {},
    doctrine: { caste } = {},
    appearance: { height } = {},
    education: { college, education } = {},
    family: { children, livingWith } = {},
    lifestyle: { diet, maritalStatus } = {},
    profession: { employer, income: { min, max } = {}, occupation, workingWith } = {},
    trait: { aboutMe } = {},
    phone, profilePicture: { url } = {},
    firstName,
    lastName,
    userId,
    dateOfBirth,
    postedBy,
    religion,
    community,
    country
  } = profile || {};
  return (
    <div className="singleProfile container-box-bg p-15">
      <div className="singleProfile__image">
        <img src={url?.medium || imageUrl} alt="profile" />
      </div>
      <div>
        <div className="basiscProfile__top">
          <div className="basiscProfile__top--wrapper flex align-center justify-between">
            <div className="flex align-center justify-between flex-gap-5">
              <h3>{firstName + " " + lastName}</h3>
              <IconLock color="#E64980"></IconLock>
              <Badge variant="outline" color="pink">
                2-Way
              </Badge>
            </div>
            <Button
              rightIcon={<IconRocket />}
              sx={{ backgroundColor: "#e64980", color: "white" }}
              color="pink"
              variant="white"
            >
              Connect with her
            </Button>
          </div>
          <div className="flex align-center mt-15">
            <div className="flex align-center flex-gap-5 flex-item">
              <IconMessages color="#E64980"></IconMessages>
              <p>Online 2d ago</p>
            </div>
            <div className="flex-item">
              <p>You & her</p>
            </div>
          </div>
          <Divider mt={10} size="sm" />
        </div>

        <div className="singleProfile__details mt-15">
          <div className="singleProfile__details--left">
            <List
              spacing="xs"
              size="md"
              center
              icon={
                <ThemeIcon color="teal" size={14} radius="xl">
                  <IconCircleCheck size="12" />
                </ThemeIcon>
              }
            >
              <List.Item>{calculateAge(dateOfBirth)}, {heightCalculator(height)}</List.Item>
              <List.Item>{community}</List.Item>
              <List.Item>{religion}, {caste}</List.Item>
              <List.Item>{city}</List.Item>
            </List>
          </div>

          <div className="singleProfile__details--right">
            <List
              spacing="xs"
              size="md"
              center
              icon={
                <ThemeIcon color="teal" size={14} radius="xl">
                  <IconCircleCheck size="12" />
                </ThemeIcon>
              }
            >
              <List.Item>{maritalStatus}</List.Item>
              <List.Item>Lives in {country}</List.Item>
              {/* <List.Item>Works at </List.Item> */}
              {(!min && max) ? <List.Item>Earns Upto BDT {max}K monthly</List.Item> : <List.Item>Earns Upto BDT {min}K - {max}K monthly</List.Item>}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
