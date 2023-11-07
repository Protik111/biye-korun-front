import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
const InformationSecure = () => {
  return (
    <div className="information_main">
      <div className="container grid grid-cols-2 grid-gap-25 grid-cols-2-responsive">
        <div className="left">
          <div>
            <img src="/landing/infomation.png" alt="information" />
          </div>
          <div className="circle">
            <div className="circle_image">
              <img src="/landing/circle.png" alt="founder" />
            </div>
            <div className="inner_circle flex flex-column flex-gap-10 justify-center align-center">
              <h1 className="heading1V3">AR</h1>
              <p className="paragraphV3">
                We only display <br />
                your initial.
              </p>
            </div>
          </div>
        </div>
        <div className="right flex flex-column flex-gap-20 pl-25">
          <h1 className="heading1V3">
            Your Information is Protected and Secure
          </h1>
          <p className="paragraphV3">
            Most Trusted Matrimony Service for Bangladeshis. Register Now to
            Find Your Life Partner. Thousands of Bangladeshis got married
            through Bangladeshi Matrimony, you could be next. Hassle-Free
            Registration. Free Registration. Safe & Secure
          </p>

          <ul class="icon-list">
            <li>
              <i class="left-icon">
                <IoMdCheckmarkCircleOutline style={{ color: "#9908F5" }} />
              </i>
              Register for Free!
            </li>
            <li>
              <i class="left-icon">
                <IoMdCheckmarkCircleOutline style={{ color: "#9908F5" }} />
              </i>
              100% human verified profiles
            </li>
            <li>
              <i class="left-icon">
                <IoMdCheckmarkCircleOutline style={{ color: "#9908F5" }} />
              </i>
              Chat, Voice & Video calling
            </li>
            <li>
              <i class="left-icon">
                <IoMdCheckmarkCircleOutline style={{ color: "#9908F5" }} />
              </i>
              Private, personalized, and highly confidential service
            </li>
            <li>
              <i class="left-icon">
                <IoMdCheckmarkCircleOutline style={{ color: "#9908F5" }} />
              </i>
              Safe and secured Matrimony site for Bangladeshi
            </li>
            <li style={{ color: "#9908F5" }}>
              <i class="left-icon">
                <IoMdCheckmarkCircleOutline style={{ color: "#9908F5" }} />
              </i>
              Nobody sees your name.
            </li>
          </ul>

          <Link href="/login">
            <button className="secondary-btn-v3 reg_btn_clr flex justify-center align-center flex-gap-5">
              See More <IconArrowRight></IconArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InformationSecure;
