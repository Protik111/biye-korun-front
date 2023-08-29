import { Badge, Button, Divider, List, ThemeIcon } from "@mantine/core";
import {
  IconCircleCheck,
  IconCircleDashed,
  IconLock,
  IconMessages,
  IconRocket,
} from "@tabler/icons-react";
import React from "react";

const BasicProfile = () => {
  return (
    <div className="basicProfile container-box-bg p-15">
      <div className="basiscProfile__top">
        <div className="flex align-center justify-between">
          <div className="flex align-center justify-between flex-gap-5">
            <h3>Shakil Ahmed</h3>
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
      </div>
      <Divider mt={10} size="sm" />

      <div className="basicProfile__details mt-15">
        <div className="basicProfile__details--left">
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
            <List.Item>22 yrs, 5'22'</List.Item>
            <List.Item>Bengali</List.Item>
            <List.Item>Muslim, Ansari</List.Item>
            <List.Item>Bsc. in Computer Science Engineering</List.Item>
          </List>
        </div>

        <div className="basicProfile__details--right">
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
            <List.Item>Never Married</List.Item>
            <List.Item>Lives in Dhaka, Bangladesh</List.Item>
            <List.Item>Company TS4U</List.Item>
            <List.Item>Earns Upto BDT 40K monthly</List.Item>
          </List>
        </div>
      </div>
    </div>
  );
};

export default BasicProfile;
