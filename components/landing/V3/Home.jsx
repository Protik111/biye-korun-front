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
import Footer from "@/components/global/Footer";
import EventsInquiry from "./EventsInquiry";
import WorldConnectivity from "./WorldConnectivity";
import OnePlatform from "./OnePlatform";
import WeddingPlan from "./WeddingPlan";

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
        <WorldConnectivity />
        <OnePlatform />
        <WeddingPlan />
      </div>
      {/* <div className="section-padding-v3">
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
      <div className="">
        <Faqs></Faqs>
      </div>
      <div className="section-padding-v3">
        <EventsInquiry></EventsInquiry>
      </div>
      <div className="">
        <Footer></Footer>
      </div> */}
    </>
  );
};

export default HomeComp;
