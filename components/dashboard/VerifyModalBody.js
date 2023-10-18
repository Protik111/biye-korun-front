import React, { useState } from "react";
import {
  Text,
  Image,
  SimpleGrid,
  Button,
  Select,
  Tooltip,
} from "@mantine/core";
import LoaderWithText from "../global/LoaderWithText";
import axios from "axios";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { loadUserData } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

const VerifyModalBody = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState("");
  const [preview, setPreview] = useState("");
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

    if (!files) {
      errors.image = "Photo ID is required";
    }

    if (!formValues.idType) {
      errors.idType = "My ID is required";
    }

    setFormDataError(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleDrop = (files) => {
    if (files.length > 0) {
      const uploadedFile = files[0];
      // console.log("Uploaded file:", uploadedFile);
      setFiles(uploadedFile);
      const previews = URL.createObjectURL(uploadedFile);
      setPreview(previews);
    }
  };
  const handlerChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const { idType } = formValues;
      const data = {
        idType,
        image: files,
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
      {/* <FileInput
        accept="image/png,image/jpeg"
        label="Upload (NID/Birth Certificate/Driving License/Passport)"
        value={formValues.image}
        name="image"
        onChange={(event) => handlerChange("image", event)}
        error={formDataError.image}
      /> */}

      <div>
        <Tooltip
          color="pink"
          label="NID/Birth Certificate/Passport/Driver's License/Green Card"
        >
          <label className="label label-required"> Photo ID</label>
        </Tooltip>
        {console.log(" error", formDataError.image)}
        <Dropzone
          accept={IMAGE_MIME_TYPE}
          onDrop={handleDrop}
          className="py-40"
        >
          <Text ta="center">Attach and drag & drop here</Text>
        </Dropzone>
        {formDataError.image && (
          <p style={{ color: "red" }}>{formDataError.image}</p>
        )}
        <SimpleGrid
          cols={{ base: 1, sm: 4 }}
          mt={preview.length > 0 ? "sm" : 0}
        >
          <Image src={preview} onLoad={() => URL.revokeObjectURL(preview)} />
        </SimpleGrid>
      </div>

      <br />

      <Select
        value={formValues.idType}
        label="ID Type "
        name="idType"
        data={[
          "NID",
          "Passport",
          "Driver's License",
          "Birth Certificate",
          "Green Card",
        ]}
        placeholder="Select ID Type"
        onChange={(event) => handlerChange("idType", event)}
        error={formDataError.idType}
      />

      <br />
      <div className="flex justify-end">
        <Button onClick={handleSubmit} size="md">
          {" "}
          {loading ? <LoaderWithText text="Saving.."></LoaderWithText> : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default VerifyModalBody;
