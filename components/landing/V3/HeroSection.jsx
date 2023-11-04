import Link from "next/link";
import React from "react";
import GetStartedFrom from "./GetStartedFrom";

export const HeroSection = () => {
  return (
    <div className="heroSectionV3 ">
      <div className="flex flex-col container padding_0">
        <div className="column-1">
          <div className="navbarRoot__logo">
            <Link href="/">
              <img src="/landing/logo.png" alt="Biye Korun Logo" />
            </Link>
            <div className="border_down"></div>
            <div className="hero_title">
              <h1>
                Find the Right Person <br /> to Spend Rest of Your <br /> Life
              </h1>
            </div>
            <div>
              <GetStartedFrom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
