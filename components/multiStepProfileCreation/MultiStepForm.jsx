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

// const initialFormData = {
//   firstName: "",
//   lastName: "",
//   businessName: "",
//   businessCity: "",
//   businessWebsite: "",
//   businessEmail: "",
//   incomePerMonth: 0,
//   taxPercantage: 0,
//   agreeToTerms: false,
// };

const stepsArray = ["A", "B", "C", "D", "E"];

const MultiStepForm = ({ showStepNumber = true }) => {
  const [step, setStep] = useState("A");
  const [formValues, setFormValues] = useState({
    maritalStatus: "",
    height: "",
    weight: "",
    diet: "",
    bloodGroup: "",
  });
  const [formValues1, setFormValues1] = useState({
    familyCountry: "",
    familyCity: "",
    familyState: "",
    motherProfession: "",
    fatherProfession: "",
    type: "",
  });

  const [formValues3, setFormValues3] = useState({
    education: "",
    college: "",
    income: "",
    workingWith: "",
    occupation: "",
    employer: "",
  });

  const [formValues4, setFormValues4] = useState({
    state: "",
    city: "",
    country: "",
    livingSince: "",
    residencyStatus: "",
    zipCode: "",
  });

  const [formValues5, setFormValues5] = useState({
    aboutMe: "",
    nativeLanguage: "",
    phone: "",
  });

  // const [formData, setFormData] = useState(initialFormData);

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

  // We need a method to do final operation
  const handleSubmitFormData = () => {
    // Here You can do final Validation and then Submit Your form
    if (!formData.agreeToTerms) {
      alert("Error!!!!!!   You must agree to Terms of Services!!!!");
    } else {
      setStep("Final");
    }
  };

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

        {step === "A" ? (
          <StepA
            formValues={formValues}
            // handleChangeInput={handleChangeInput}
            setFormValues={setFormValues}
            handleNextStep={handleNextStep}
          />
        ) : null}
        {step === "B" ? (
          <StepB
            formValues={formValues1}
            setFormValues={setFormValues1}
            // handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
          />
        ) : null}
        {step === "C" ? (
          <StepC
            formValues={formValues3}
            setFormValues={setFormValues3}
            // handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
          />
        ) : null}
        {step === "D" ? (
          <StepD
            formValues={formValues4}
            setFormValues={setFormValues4}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            handleSubmitFormData={handleSubmitFormData}
          />
        ) : null}
        {step === "E" ? (
          <StepE
            formValues={formValues5}
            setFormValues={setFormValues5}
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
