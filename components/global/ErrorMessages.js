import React from "react";

const ErrorMessages = ({ errors }) => {
  return (
    <div className="text-center error-message">
      {" "}
      {Object.values(errors).map((error, index) => (
        <p key={index} className="mb-5">
          {error}
        </p>
      ))}
    </div>
  );
};

export default ErrorMessages;
