import React from "react";
import { HeroSection } from "./HeroSection";
import Statistics from "./Statistics";
import StoryFounder from "./StoryFounder";
import GiftCollection from "./GiftCollection";
import BiyeKorunApps from "./BiyeKorunApps";
import RightPlan from "./RightPlan";
import SuccessStories from "./SuccessStories";
import Faqs from "@/components/global/Faqs";
import HoneyMoon from "./HoneyMoon";
import KnowsTheFounder from "./KnowsTheFounder";
import { MatchBrideGroom } from "./MatchBrideGroom";
import InformationSecure from "./InformationSecure";
import AuthenticBlue from "./AuthenticBlue";

const HomeComp = () => {
  return (
    <>
      <div>
        <HeroSection />
        <Statistics />
        <StoryFounder />
        <KnowsTheFounder />
        <MatchBrideGroom />
        <InformationSecure />
        <AuthenticBlue />
      </div>
      <div className="section-padding-v3">
        <GiftCollection></GiftCollection>
      </div>
      <HoneyMoon></HoneyMoon>
      <div className="section-padding-v3">
        <BiyeKorunApps></BiyeKorunApps>
      </div>
      <RightPlan></RightPlan>
      <div>
        <SuccessStories></SuccessStories>
      </div>
      <Faqs></Faqs>
    </>
  );
};

export default HomeComp;
