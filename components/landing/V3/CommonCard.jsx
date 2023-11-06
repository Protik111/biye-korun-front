import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CommonCard = ({ width, buttonColor, title, description, buttonText }) => {
  console.log("buttonColor", buttonColor);
  return (
    <div>
      <div className={`flex flex-column ${width} common_card_resposive`}>
        <h2 className="mb-20">{title}</h2>
        <p>{description}</p>
        <button
          className={`custom-button mb-10 mt-30 ${buttonColor} flex justify-center align-center flex-gap-5`}
        >
          {buttonText} <BsArrowRight></BsArrowRight>
        </button>
      </div>
    </div>
  );
};

export default CommonCard;
