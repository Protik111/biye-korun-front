import useCountry from "@/hooks/common/useCountry";
import useFormContext from "@/hooks/common/useFormContext";
import { countries, profileFor } from "@/staticData/InputFields/inputFields";
import { btnBackground } from "@/styles/library/mantine";
import { generate18YearBefore } from "@/utils/generate18YearBefore";
import {
  Button,
  Group,
  Input,
  PasswordInput,
  Radio,
  Select,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import Link from "next/link";
import { useEffect, useState } from "react";

const Basic3 = () => {
  const { data, handleChange, fieldErrors } = useFormContext();

  const content = (
    <div className="mutlistep__registration basic3">
      <div className="flex flex-column justify-center align-center">
        <h1 className="congrats_text">
          Congrats! Your Profile has been Created.
        </h1>
        <h3 className="text-center congrats_text_sub">
          Do you want to complete your profile?
        </h3>
        <div className="flex justify-center align-center flex-gap-10 mt-20 mb-20 ">
          <div>
            <Link href={"/profile-creation"}>
              <button className="success_btn" color="red" size="lg">
                Yes
              </button>
            </Link>
          </div>
          <div>
            <Link href={"/dashboard"}>
              <button className="success_btn clr" size="lg">
                No
              </button>
            </Link>
          </div>
        </div>
        <p>
          <b>Note:</b> If you do not complete your profile, the profile will not
          be visible
        </p>
      </div>
    </div>
  );

  return content;
};
export default Basic3;
