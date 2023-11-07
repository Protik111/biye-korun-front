import Link from "next/link";
import React, { useEffect } from "react";
import GetStartedFrom from "./GetStartedFrom";
import useAnimation from "@/hooks/common/useAnimation";

export const HeroSection = () => {
  const { makeAnimation } = useAnimation();

  useEffect(() => {
    makeAnimation()
  }, [])
  return (
    <div className="heroSectionV3 ">
      <div className="container padding_0">
        <div className="column-1">
          <div className="navbarRoot__logo">
            <Link href="/">
              <img src="/landing/logo.png" alt="Biye Korun Logo" />
            </Link>
            <div className="border_down"></div>
            <div className="hero_title" data-aos="fade-up">
              <h1 className="heading1V3">
                Find the Right Person <br /> to Spend Rest of Your <br /> Life
              </h1>
            </div>
            <div data-aos="fade-up">
              <GetStartedFrom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
