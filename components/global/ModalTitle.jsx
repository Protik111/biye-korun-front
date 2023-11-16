import React from "react";

const ModalTitle = () => {
  return (
    <div>
      <div className="flex flex-column justify-center align-center flex-gap-20 mb-20">
        <img src="/modalLogo.svg" alt="" />
        <h3
          className="text-center"
          style={{ color: "#000", fontWeight: "bold" }}
        >
          Let's Create an Account!{" "}
        </h3>
      </div>
    </div>
  );
};

export default ModalTitle;
