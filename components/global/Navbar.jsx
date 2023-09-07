"use client";
import { useEffect, useState } from "react";
import { IconLogout2, IconMenu2, IconUserCircle, IconX } from "@tabler/icons-react";
import { Avatar, Button } from "@mantine/core";
import Link from "next/link";
import { Menu, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { useRouter } from "next/navigation";

function Navbar() {
  const { isAuthenticated } = useSelector(state => state.auth);
  const { userInfo } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const { profilePicture } = userInfo || {};

  // console.log('isAuthenticated', isAuthenticated);

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
        notifySuccess("Logout successfully!")
        setTimeout(() => {
          router.push('/')
        }, 500)
      })
      .catch(() => {
        notifyError("Error Occurred!")
      })
  }

  return (
    <>
      <div className="navbarRoot">
        <nav className="container">
          <div className="navbarRoot__logo">
            <Link href="/">
              <img src="/biyekorun-logo.png" alt="Biye Korun Logo" />
            </Link>
          </div>
          <div className={`links ${clicked ? "active" : ""}`}>
            <Link href="/">
              <p >Home</p>
            </Link>
            {/* <a href="">Profiles</a> */}
            <Link href="/my-matches">
              <p>Dashboard</p>
            </Link>
            <Link href="/plans">
              <p>Plans</p>
            </Link>
            {/* <a href="/my-matches">Dashboard</a> */}
            {/* <a href="">Help</a> */}
            {!isAuthenticated ?
              <Link href="/login">
                <Button mt={5} mr={5} color="pink" radius="xl" size="md">
                  Login
                </Button>
              </Link> :
              <div className="user-profile mt-10 mr-10">
                <Menu shadow="md" width={200}>
                  <Menu.Target sx={{ cursor: 'pointer' }}>
                    <Avatar
                      size="md"
                      radius="xl"
                      src={profilePicture?.url || '/profile.svg'}
                      alt="it's me"
                    />
                  </Menu.Target>

                  <Menu.Dropdown>
                    {/* <Menu.Label>User Profile</Menu.Label> */}

                    <Menu.Item icon={<IconUserCircle size={14} />}>
                      <Link style={{ color: 'black' }} href="/my-matches">
                        View Profile
                      </Link>
                    </Menu.Item>
                    <Menu.Item onClick={() => handleLogout()} icon={<IconLogout2 size={14} />}>Log out</Menu.Item>

                  </Menu.Dropdown>
                </Menu>
              </div>}
          </div>
          <div className="burguer" onClick={handleClick}>
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
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
