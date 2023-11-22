"use client";
import React, { useEffect, useState } from "react";
import StepA from "./StepOne";
import StepB from "./StepTwo";
import StepC from "./StepThree";
import StepD from "./StepFour";
import StepE from "./StepFive";
// import StepFinal from "./StepFinal";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

// This is the parent component.
// This component will control and manage steps and data

// Step A: Customer Identity Info
// Step B: Customer Business Info
// Step C: Customer Financial Info
// Step D: Confirm Form  Data

// Step Final: Succes Result

const initialFormData = {
  firstName: "",
  lastName: "",
  businessName: "",
  businessCity: "",
  businessWebsite: "",
  businessEmail: "",
  incomePerMonth: 0,
  taxPercantage: 0,
  agreeToTerms: false,
};

const stepsArray = ["A", "B", "C", "D", "E"];

const MultiStepForm = ({ showStepNumber = true }) => {
  const [step, setStep] = useState("A");
  const [formData, setFormData] = useState(initialFormData);

  // We need a method to go to next step
  const handleNextStep = () => {
    if (step === "A") setStep("B");
    else if (step === "B") setStep("C");
    else if (step === "C") setStep("D");
    else if (step === "D") setStep("E");
  };

  // We need a method to go to prev step
  const handlePrevStep = () => {
    if (step === "E") setStep("D");
    else if (step === "D") setStep("C");
    else if (step === "C") setStep("B");
    else if (step === "B") setStep("A");
  };

  // We need a method to update our formData
  const handleChangeInput = (event) => {
    const fieldName = event.target.name;
    let fieldValue;
    if (fieldName === "agreeToTerms") {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  // We need a method to do final operation
  const handleSubmitFormData = () => {
    // Here You can do final Validation and then Submit Your form
    if (!formData.agreeToTerms) {
      alert("Error!!!!!!   You must agree to Terms of Services!!!!");
    } else {
      setStep("Final");
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Section for render StepNumbers
  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === "Final") {
      return null;
    }
    return (
      <section className="mt-2 mb-4 flex justify-between ">
        {stepsArray.map((item) => (
          <div
            key={item}
            // className={`w-8 h-8 flex justify-center items-center border-2 border-gray-600 rounded-full cursor-pointer ${
            //   item === step ? "bg-blue-500" : ""
            // }`}
            className={`steperr_border ${item === step ? "active_border" : ""}`}
            onClick={() => setStep(item)}
          >
            {/* {item} */}
          </div>
        ))}
      </section>
    );
  };

  const [opened, { open, close }] = useDisclosure(false);
  const [openModal, closeModal] = useState(true);
  const handleModalClose = () => closeModal(false);

  return (
    <Modal opened={openModal} onClose={handleModalClose} centered>
      <div className="profile_creation_modal">
        {renderTopStepNumbers()}
        {/* // Render Steps */}
        {console.log("stae", step)}
        {step === "A" ? (
          <StepA
            formData={formData}
            handleChangeInput={handleChangeInput}
            handleNextStep={handleNextStep}
          />
        ) : null}
        {step === "B" ? (
          <StepB
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
          />
        ) : null}
        {step === "C" ? (
          <StepC
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
          />
        ) : null}
        {step === "D" ? (
          <StepD
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            handleSubmitFormData={handleSubmitFormData}
          />
        ) : null}
        {step === "E" ? (
          <StepE
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            handleSubmitFormData={handleSubmitFormData}
          />
        ) : null}
        {/* {step === "Final" ? <StepFinal /> : null} */}
      </div>
    </Modal>
  );
};

export default MultiStepForm;
