import React from "react";
import { Button } from "@mantine/core";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
let data = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
  { id: "8" },
];
export const MatchBrideGroom = () => {
  return (
    <div className="matches_main mb-30">
      <div className="container">
        <div className="flex justify-between align-center mt-30 mb-30 match_title_for_mobile">
          <div className="title">
            <h1>Match Bride & Grooms</h1>
          </div>
          <div className="see_more_btn">
            <Button size="xs" style={{ color: "red", background: "#FFF" }}>
              See More
            </Button>
          </div>
        </div>
        <div class="card-container">
          {data?.map((item) => {
            return (
              <div className="card">
                <div className="header">
                  <div className="flex flex-gap-10 justify-between align-center">
                    <div className="flex flex-gap-10 align-center">
                      <h3 className="name"> AR </h3>
                      <span>#54326</span>
                    </div>
                    <div>
                      <BiDotsHorizontalRounded />
                    </div>
                  </div>
                  <p className="subtitle">Software Engineer - Graduate</p>
                </div>
                <div className="content">
                  <div className="details">
                    <p>25 years, 5ft 5 in</p>
                    <p>Islam Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="footer">
                  <button className="custom-button">Send Request</button>
                  <button className="custom-button btn_clr">
                    View Profile
                  </button>
                </div>
                <div class="avatar">
                  <img src="/landing/shiblu.png" alt="Avatar" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="register_btn flex justify-center">
          <button className="custom-button reg_btn_clr flex justify-center align-center flex-gap-5">
            Register Now <BsArrowRight></BsArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};
