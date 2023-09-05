'use client'
import Faqs from "@/components/global/Faqs";
import Footer from "@/components/global/Footer";
import BrideGroom from "@/components/landing/BrideGroom";
import HowWorks from "@/components/landing/HowWorks";
import LandingV2 from "@/components/landing/LandingV2";
import Landing from "@/components/landing/landing";

export default function Home() {
  console.log('local', process.env.NEXT_PUBLIC_API_URL);
  return (
    <>
      {/* <Landing></Landing> */}
      <LandingV2></LandingV2>
      <BrideGroom></BrideGroom>
      <HowWorks></HowWorks>
      <Faqs></Faqs>
      {/* <Footer></Footer> */}
    </>
  )
}
