"use client";
import { useEffect, useState } from "react";
import {
  IconLayoutDashboard,
  IconLogout2,
  IconShoppingCart,
  IconMenu2,
  IconUserCircle,
  IconUserSearch,
  IconX,
  IconBellFilled,
  IconBell,
} from "@tabler/icons-react";
import { Avatar, Button, Indicator } from "@mantine/core";
import Link from "next/link";
import { Menu, Text } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { useRouter } from "next/navigation";
import { btnBackground } from "@/styles/library/mantine";
import { imageUrl } from "@/staticData/image";
import {
  generateNotificationText,
  generateNotificationUrl,
  notificationMarkRead,
} from "@/helper/notification";
import { DisableRightClick } from "@/utils/DisableRightClick";
import dayjs from "dayjs"; // import relativeTime plugin
import relativeTime from "dayjs/plugin/relativeTime";
import { updateNotification } from "@/redux/features/notification/notificationSlice";
import axios from "axios";

// extend dayjs with relativeTime plugin
dayjs.extend(relativeTime);

function Navbar() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { notifications } = useSelector((state) => state.notification);
  const { userInfo } = useSelector((state) => state.user) || {};
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const { profilePicture } = userInfo || {};

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        notifySuccess("Logged out Successfully!");
        router.push("/");
        // setTimeout(() => {
        // }, 500)
      })
      .catch(() => {
        notifyError("Error Occurred!");
      });
  };

  // console.log('profilePicture', profilePicture);

  const notificationMarkRead = (noti) => {
    axios
      .patch(`/notification/mark-read/${noti._id}`)
      .then((res) => {
        dispatch(updateNotification(res.data.data));
        router.push(
          generateNotificationUrl(
            noti.notificationType,
            noti.entityId,
            noti?.text
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="navbarRoot">
        <nav className="container">
          <div className="navbarRoot__logo">
            <Link href="/">
              <img
                src="/biye-korun-logo-with-tagline.png"
                alt="Biye Korun Logo"
              />
            </Link>
          </div>
          {/* //TOO in the next div className={`links ${clicked ? "active" : ""}`} */}
          <div className="links">
            <Link href="/">{/* <p>Home</p> */}</Link>
            {/* <a href="">Profiles</a> */}
            {/* <Link href={isAuthenticated ? "/dashboard" : "/login"}>
              <p>{isAuthenticated ? "Dashboard" : ""}</p>
            </Link> */}

            {/* <Link href="/plans">
              <p>Plans</p>
            </Link> */}

            {/* <a href="/my-matches">Dashboard</a> */}
            {/* <a href="">Help</a> */}
            {!isAuthenticated ? (
              <Link href="/login">
                <Button
                  mt={5}
                  mr={5}
                  style={btnBackground}
                  radius="xl"
                  size="md"
                >
                  Login
                </Button>
              </Link>
            ) : (
              <div className="">
                <Menu
                  position="bottom-end"
                  offset={2}
                  withArrow
                  arrowPosition="center"
                  width={380}
                  shadow="md"
                >
                  <Menu.Target className="mr-20">
                    <Indicator
                      color="red"
                      inline
                      label={
                        notifications?.filter((item) => !item.opened).length
                      }
                      size={16}
                    >
                      <IconBell
                        cursor="pointer"
                        size="25"
                        color="white"
                      ></IconBell>
                    </Indicator>
                  </Menu.Target>

                  <Menu.Dropdown>
                    {notifications
                      ?.map((item, i) => (
                        <Menu.Item
                          className={`${
                            item.opened ? "noti-light" : "noti-gray"
                          }`}
                          onClick={() => notificationMarkRead(item)}
                        >
                          <div className="flex align-center flex-gap-15">
                            <div>
                              <Avatar
                                onContextMenu={(e) => DisableRightClick(e)}
                                sx={{
                                  objectFit: "containe",
                                  borderRadius: "50%",
                                  height: "35px",
                                  width: "35px",
                                }}
                                mx="auto"
                                size="sm"
                                src={
                                  item?.userFrom?.profilePicture?.url?.small ||
                                  imageUrl
                                }
                                alt={item?.name}
                              />
                            </div>
                            <div>
                              <p className="noti">
                                {generateNotificationText(
                                  item.notificationType,
                                  item.userFrom,
                                  item.entityId
                                )}
                              </p>
                              <p className="small-text opacity-8 ">
                                {dayjs(item?.createdAt).fromNow()}
                              </p>
                            </div>
                          </div>
                        </Menu.Item>
                      ))
                      .slice(0, 7)}

                    {notifications?.length > 10 && (
                      <Button
                        m={3}
                        variant="light"
                        color="pink"
                        size="xs"
                        radius="xl"
                      >
                        See More
                      </Button>
                    )}

                    {/* <Menu.Item component="a" href="https://mantine.dev">
                      Mantine website
                    </Menu.Item> */}
                  </Menu.Dropdown>
                </Menu>

                <div className="user-profile mt-10 mr-10">
                  <Menu shadow="md" width={200}>
                    <Menu.Target sx={{ cursor: "pointer" }}>
                      <Avatar
                        size="md"
                        objectFit="cover"
                        radius="xl"
                        src={profilePicture?.url?.large || "/profile.svg"}
                        alt="it's me"
                      />
                    </Menu.Target>

                    <Menu.Dropdown>
                      {/* <Menu.Label>User Profile</Menu.Label> */}

                      {isAuthenticated && (
                        <Menu.Item
                          icon={<IconLayoutDashboard color="red" size={16} />}
                        >
                          <Link style={{ color: "black" }} href="/dashboard">
                            Dashboard
                          </Link>
                        </Menu.Item>
                      )}

                      <Menu.Item
                        icon={<IconUserCircle size={16} color="red" />}
                      >
                        <Link style={{ color: "black" }} href="/my-profile">
                          View Profile
                        </Link>
                      </Menu.Item>

                      <Menu.Item
                        icon={<IconShoppingCart size={16} color="red" />}
                      >
                        <Link style={{ color: "black" }} href="/orders">
                          My Orders
                        </Link>
                      </Menu.Item>

                      <Menu.Item icon={<IconSettings size={16} color="red" />}>
                        <Link style={{ color: "black" }} href="/settings">
                          Settings
                        </Link>
                      </Menu.Item>

                      <Menu.Item
                        onClick={() => handleLogout()}
                        icon={<IconLogout2 size={16} color="red" />}
                      >
                        Log out
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </div>
              </div>
            )}
          </div>
          {/* <div className="burguer" onClick={handleClick}>
            {!clicked ? (
              <IconMenu2
                className={`icon-menu ${clicked ? "hidden" : ""}`}
                color="white"
                size={28}
              />
            ) : (
              <></>
            )}
          </div>
          <div className={`initial ${clicked ? "active" : ""} bigDiv`}>
            <div className="ml-15 mt-15">
              <IconX
                onClick={() => setClicked(false)}
                className={`icon-close ${clicked ? "" : "hidden"}`}
                color="white"
                size={28}
              />
            </div>
          </div> */}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
