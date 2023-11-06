import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
const StoryFounder = () => {
  return (
    <div className="story_founder">
      <div className="container ">
        <div className="flex flex-gap-20 w-100 story_res_left_img">
          <div className="left_img">
            <img src="/landing/shiblu.png" alt="founder" />
          </div>
          <div className="right_content">
            <div className="tringle">
              <img src="/landing/tringle.png" alt="founder" />
            </div>
            <div className="right_content_card ">
              <h2 className="mt-15 mb-15">Story of The Founder</h2>
              <p>
                The personal love story of Shiblu Ahmad serves as the
                inspiration behind BiyeKorun. He met his American wife on Yahoo
                chat in 2005, leading to their marriage in 2009. Shiblu's
                journey from Bangladesh to Singapore for studies and then
                finding love across continents underpins the platform's core
                value: connecting Bangladeshis worldwide.
              </p>
              <button className="mb-20 mt-20 custom-button flex align-center justify-center flex-gap-5">
                See More
                <IconArrowRight></IconArrowRight>
              </button>
            </div>
          </div>
          <div className="right_content_for_mobile">
            <div className="right_content_card ">
              <h1 className="mt-15 mb-15">Story of The Founder</h1>
              <p>
                The personal love story of Shiblu Ahmad serves as the
                inspiration behind BiyeKorun. He met his American wife on Yahoo
                chat in 2005, leading to their marriage in 2009. Shiblu's
                journey from Bangladesh to Singapore for studies and then
                finding love across continents underpins the platform's core
                value: connecting Bangladeshis worldwide.
              </p>
              <button className="mb-20 mt-20 custom-button flex align-center justify-center flex-gap-5">
                See More
                <IconArrowRight></IconArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryFounder;
