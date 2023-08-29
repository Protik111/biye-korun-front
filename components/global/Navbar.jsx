"use client";
import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Button } from "@mantine/core";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="navbarRoot">
        <nav className="container">
          <div className="navbarRoot__logo">
            <img src="/biyekorun-logo.png" alt="Biye Korun Logo" />
          </div>
          <div className={`links ${clicked ? "active" : ""}`}>
            <a href="/">Home</a>
            <a href="">Profiles</a>
            <a href="">Dashboard</a>
            <a href="">Help</a>
            <Button mt={5} mr={5} color="pink" radius="xl" size="md">
              Login
            </Button>
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
          <div className={`initial ${clicked ? " active" : ""} bigDiv`}>
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
