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
import HappyCouples from "./HappyCouples";

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
        <div className="section-padding-v3">
          <WeddingPlan />
        </div>
      </div>
      <GiftCollection></GiftCollection>
      <div className="section-padding-v3">
        <HoneyMoon></HoneyMoon>
      </div>
      <BiyeKorunApps></BiyeKorunApps>
      <div className="section-padding-v3">
        <RightPlan></RightPlan>
      </div>
      <HappyCouples></HappyCouples>
      <div className="">
      </div>
      <Faqs></Faqs>
      <div className="section-padding-v3">
        <EventsInquiry></EventsInquiry>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomeComp;
