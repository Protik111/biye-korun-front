'use client'
import Faqs from "@/components/global/Faqs";
import Footer from "@/components/global/Footer";
import BrideGroom from "@/components/landing/BrideGroom";
import HowWorks from "@/components/landing/HowWorks";
import LandingV2 from "@/components/landing/LandingV2";
import PremiumPlan from "@/components/landing/PremiumPlan";
import WhyChoose from "@/components/landing/WhyChoose";
import Landing from "@/components/landing/landing";

export default function Home() {
  return (
    <>
      {/* <Landing></Landing> */}
      <LandingV2></LandingV2>
      <BrideGroom></BrideGroom>
      <HowWorks></HowWorks>
      <PremiumPlan />
      <WhyChoose />
      <Faqs></Faqs>
      {/* <Footer></Footer> */}
    </>
  )
}
