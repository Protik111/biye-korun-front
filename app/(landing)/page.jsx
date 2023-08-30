'use client'
import BrideGroom from "@/components/landing/BrideGroom";
import HowWorks from "@/components/landing/HowWorks";
import LandingV2 from "@/components/landing/LandingV2";
import Landing from "@/components/landing/landing";

export default function Home() {
  return (
    <>
      {/* <Landing></Landing> */}
      <LandingV2></LandingV2>
      <BrideGroom></BrideGroom>
      <HowWorks></HowWorks>
    </>
  )
}
