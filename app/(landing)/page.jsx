'use client'
import Faqs from "@/components/global/Faqs";
import Footer from "@/components/global/Footer";
import BrideGroom from "@/components/landing/BrideGroom";
import HowWorks from "@/components/landing/HowWorks";
import LandingV2 from "@/components/landing/LandingV2";
import PremiumPlan from "@/components/landing/PremiumPlan";
import WhyChoose from "@/components/landing/WhyChoose";
import Landing from "@/components/landing/landing";
import { Loader } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { isAuthenticated } = useSelector(state => state.auth);

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard")
      return;
    }
    setIsLoading(true)
  }, [])

  if (!isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Loader size="xl" color="pink" />
    </div>
  }

  return (
    <>
      {/* <Landing></Landing> */}
      <LandingV2></LandingV2>
      <BrideGroom></BrideGroom>
      <HowWorks></HowWorks>
      <PremiumPlan />
      <WhyChoose />
      <Faqs></Faqs>
      <Footer></Footer>
    </>
  )
}
