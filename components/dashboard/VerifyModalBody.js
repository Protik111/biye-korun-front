import React, { useState } from "react";
import { FileInput, Button, Select } from "@mantine/core";
import LoaderWithText from "../global/LoaderWithText";
import axios from "axios";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { loadUserData } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";

const VerifyModalBody = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    image: "",
    idType: "",
  });
  const [formDataError, setFormDataError] = useState({
    image: "",
    idType: "",
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!formValues.image) {
      errors.image = "Image is required";
    }

    if (!formValues.idType) {
      errors.idType = "My ID is required";
    }

    setFormDataError(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };
  const handlerChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };
  console.log("image ", formValues.image);
  const handleSubmit = () => {
    if (validateForm()) {
      const { image, idType } = formValues;
      const data = {
        idType,
        image,
      };
      setLoading(true);
      axios
        .post("/user/insert-verify-id", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          notifySuccess("Successfully upload your id");
          setLoading(false);
          dispatch(loadUserData());
          setTimeout(() => {
            closeModal();
          }, 1000);
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err.response.data.message);
        });
    }
  };
  return (
    <div className="mt-20 mb-20">
      <br />
      <FileInput
        accept="image/png,image/jpeg"
        label="Upload (NID/Birth Certificate/Driving License/Passport)"
        value={formValues.image}
        name="image"
        onChange={(event) => handlerChange("image", event)}
        error={formDataError.image}
      />

      <br />

      <Select
        value={formValues.idType}
        label="ID Type "
        name="idType"
        data={["NID", "Passport", "Driving License", "Birth Certificate"]}
        placeholder="Select ID Type"
        onChange={(event) => handlerChange("idType", event)}
        error={formDataError.idType}
      />

      <br />
      <div className="flex justify-end">
        <Button onClick={handleSubmit}>
          {" "}
          {loading ? <LoaderWithText text="Saving.."></LoaderWithText> : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default VerifyModalBody;
