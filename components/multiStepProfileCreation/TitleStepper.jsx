import React from "react";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";

const TitleStepper = ({
  title = "",
  showArrow = true,
  handlePrevStep = {},
  handleNextStep = {},
  step,
}) => {
  // console.log("title", step);
  return (
    <div>
      <div className="flex justify-between align-center">
        <div className="flex flex-gap-5 align-center">
          {step !== "A" && (
            <IconArrowNarrowLeft
              style={{ cursor: "pointer" }}
              onClick={handlePrevStep}
            />
          )}
          <h1 className="modal_title">{title}</h1>
        </div>
        {step === "E" && (
          <Link href={"/my-profile"} style={{ marginRight: "0rem" }}>
            <button className="stepper_btn">Skip</button>
          </Link>
        )}
        {step !== "E" && (
          <button className="stepper_btn" onClick={handleNextStep}>
            Skip
          </button>
        )}
      </div>
    </div>
  );
};

export default TitleStepper;
