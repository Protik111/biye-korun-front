import React, { useEffect } from "react";
import CommonCard from "./CommonCard";
import useAnimation from "@/hooks/common/useAnimation";

const OnePlatform = () => {
  const { makeAnimation } = useAnimation(600);

  useEffect(() => {
    makeAnimation()
  }, [])

  return (
    <div className="one_platform">
      <div className="container">
        <h1 className="text-center heading1V3">Everything In One Platform!</h1>
        <div className="py-30">
          <div className="card">
            <CommonCard
              width="w-50"
              title="Group Chat"
              description="Group chat is a type of communication platform that allows members of a group to quickly and easily exchange information in real-time through instant messaging. We can add you to different groups such as (Doctor group, American citizen group, Russian group, Engineer group etc) if you want."
              buttonColor="#9908F5"
              buttonText="Learn More"
            />
            <div className="inner_div inner_div_for_mobile">
              <img src="/landing/mobilePlatfrom.png" alt="mobilePlatfrom" />
            </div>
          </div>
        </div>
        <div className="img_card mt-30 w-100">
          <div className="flex flex-column flex-gap-10">
            <div className="flex flex-gap-10 w-50 mobile_res_card_img">
              <div>
                <img src="/landing/e1.png" alt="ring" />
              </div>
              <div>
                <img src="/landing/e2.png" alt="ring" />
              </div>
            </div>
            <div className="w-50 mobile_res_card_img">
              <img src="/landing/e3.png" alt="ring" />
            </div>
          </div>

          <div className="card_absolute w-60 hide_mobile">
            <CommonCard
              title="Engagement Plan"
              description="Congratulations on finding your soul partner on the Biyekorun app! Planning an engagement event is an exciting step towards making your relationship official and preparing for your wedding."
              buttonText="Learn More"
              buttonColor="green_btn_color"
              width=""
            />
          </div>
          <div className="mt-10 w-100 show_mobile">
            <CommonCard
              title="Engagement Plan"
              description="Congratulations on finding your soul partner on the Biyekorun app! Planning an engagement event is an exciting step towards making your relationship official and preparing for your wedding."
              buttonText="Learn More"
              buttonColor="green_btn_color"
              width=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePlatform;
