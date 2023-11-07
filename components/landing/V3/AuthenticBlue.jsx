import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
const AuthenticBlue = () => {
  return (
    <div className="authentic_main">
      <div className="container">
        <div className="custom_grid">
          <div className="flex flex-column flex-gap-20">
            <h1 className="heading1V3">Authentic Blue Mark</h1>
            <p className="paragraphV3">
              The verified badge means that BiyeKorun has confirmed that the
              Page or profile is the authentic presence of the individual,
              public figure that it represents. Previously, the verified badge
              also required the person to be notable and unique. You may still
              see users with a verified badge that represents our previous
              eligibility requirements.
            </p>
            <ol className="pl-15 mt-15">
              <li className="mb-10 authentic_li">
                Create an account. Go to take Blue
              </li>
              <li className="mb-10 authentic_li">
                {" "}
                Set up payment. Select your preferred payment <br />
                method for your monthly payment.{" "}
              </li>
              <li className="authentic_li"> Verify identity.</li>
            </ol>

            <Link href="/login">
              <button className="secondary-btn-v3 mb-30 reg_btn_clr flex justify-center align-center flex-gap-5">
                See More <IconArrowRight></IconArrowRight>
              </button>
            </Link>
          </div>

          <div className="blu_img">
            <img src="/landing/blueMark.png" alt="blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticBlue;
