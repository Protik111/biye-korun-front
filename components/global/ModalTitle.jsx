import useFormContext from "@/hooks/common/useFormContext";
import React from "react";

const ModalTitle = () => {
  const { page } = useFormContext();
  console.log("page", page);

  return (
    <div>
      {console.log(page)}
      {page === 1 && page === 2 && (
        <div className="flex flex-column justify-center align-center flex-gap-20 mb-20">
          <img src="/modalLogo.svg" alt="" />
          <h3
            className="text-center"
            style={{ color: "#000", fontWeight: "bold" }}
          >
            Let's Create an Account!{" "}
          </h3>
        </div>
      )}
    </div>
  );
};

export default ModalTitle;
