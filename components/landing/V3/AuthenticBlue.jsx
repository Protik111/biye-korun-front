import React from "react";
import { BsArrowRight } from "react-icons/bs";
const AuthenticBlue = () => {
  return (
    <div className="authentic_main">
      <div className="container">
        <div className="custom_grid">
          <div className="flex flex-column flex-gap-20">
            <h1>Authentic Blue Mark</h1>
            <p>
              The verified badge means that BiyeKorun has confirmed that the
              Page or profile is the authentic presence of the individual,
              public figure that it represents. Previously, the verified badge
              also required the person to be notable and unique. You may still
              see users with a verified badge that represents our previous
              eligibility requirements.
            </p>
            <ol className="pl-15 mt-15 mb-30">
              <li className="mb-10">Create an account. Go to take Blue</li>
              <li className="mb-10">
                {" "}
                Set up payment. Select your preferred payment <br />
                method for your monthly payment.{" "}
              </li>
              <li className="mb-10"> Verify identity.</li>
            </ol>

            <button className="custom-button mb-30 reg_btn_clr flex justify-center align-center flex-gap-5">
              See More <BsArrowRight></BsArrowRight>
            </button>
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
