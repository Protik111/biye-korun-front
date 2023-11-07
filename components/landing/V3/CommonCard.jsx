import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CommonCard = ({ width, buttonColor, title, description, buttonText }) => {
  // console.log("buttonColor", buttonColor);
  return (
    <div>
      <div className={`flex flex-column ${width} common_card_resposive`}>
        <h2 className="mb-20 heading2V3">{title}</h2>
        <p className="paragraphV3">{description}</p>
        <Link href="/login">
          <button
            className={`custom-button mb-10 mt-30 ${buttonColor} flex justify-center align-center flex-gap-5`}
          >
            {buttonText} <BsArrowRight></BsArrowRight>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CommonCard;
