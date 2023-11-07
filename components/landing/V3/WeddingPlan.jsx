import Link from "next/link";
import React from "react";

const WeddingPlan = () => {
  return (
    <div className="honeymoon container">
      <div className="honeymoon--left">
        <h2 className="heading2V3">Wedding Plan</h2>
        <p className="mt-25 pr-10 paragraphV3 ">
          Congratulations on finding your life partner on the BiyeKorun app and
          on your engagement! Planning your wedding is an exciting journey, and
          We are here to help you get started.
        </p>
        <Link href="/login">
          <button className="secondary-btn-v3 mt-25">Learn More &rarr;</button>
        </Link>
      </div>
      <div className="honeymoon--right ">
        <div className="flex flex-gap-10 w-100 images responsive_img_part">
          <div className="">
            <img
              className=""
              src="/landing/w1.png"
              alt="Honeymoon"
              loading="lazy"
            />
          </div>
          <div className="flex flex-column justify-center responsive_img_part ">
            <div className="top_head ">
              <img
                // className="large"
                src="/landing/w2.png"
                alt="Honeymoon"
                loading="lazy"
              />
            </div>
            <div className="top_down flex flex-gap-10 responsive_img_part">
              <img
                className="small_xs "
                src="/landing/w3.png"
                alt="Honeymoon"
                loading="lazy"
              />
              <img
                className="small_xs "
                src="/landing/w4.png"
                alt="Honeymoon"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingPlan;
