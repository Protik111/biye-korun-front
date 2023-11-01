"use client";
import {
  creativeHobbies,
  fitness,
  funs,
  otherInterests,
} from "@/staticData/InputFields/inputFields";
import { btnBackground } from "@/styles/library/mantine";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { Button, Select, TextInput, Chip } from "@mantine/core";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoaderWithText from "../global/LoaderWithText";
import { loadUserData } from "@/redux/features/user/userSlice";

const list = [
  {
    title: "Creative",
    chips: creativeHobbies,
  },
  {
    title: "Fun",
    chips: funs,
  },
  {
    title: "Fitness",
    chips: fitness,
  },
  {
    title: "Others Interests",
    chips: otherInterests,
  },
];

const HobbiesAndInterest = ({ closeModal7 }) => {
  const dispatch = useDispatch();
  const { userInfo, message } = useSelector((state) => state.user);
  const { interestAndMore: { interests } = {} } = userInfo || {};
  const [hobbies, setHobbies] = useState([]);
  const [internest, setInterest] = useState([]);
  const [hobbiesLoading, setHobbiesLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // console.log("interests 48", interests);
  // console.log("hobbies", hobbies);

  const handleFormChange = (e, val) => {
    // console.log('e, val', e, val);

    if (hobbies.length === 0) {
      setHobbies([
        {
          categories: e,
          hobbies: val,
        },
      ]);
    } else {
      const updatedHobbies = hobbies.map((item) => {
        if (item.categories === e) {
          // If categories match, update hobbies
          return {
            ...item,
            hobbies: val,
          };
        }
        // If categories don't match, keep the item unchanged
        return item;
      });

      // Check if a matching category was found in the map
      const categoryFound = updatedHobbies.some(
        (item) => item.categories === e
      );

      if (!categoryFound) {
        // If no matching category was found, add a new object
        updatedHobbies.push({
          categories: e,
          hobbies: val,
        });
      }

      setHobbies(updatedHobbies); // Pass the entire updatedHobbies array as the new state
    }
  };
  // console.log(hobbies)

  const hanldeSubmit = () => {
    const data = {
      interestAndMore: { interests: hobbies },
    };
    setLoading(true);
    axios
      .patch("/user/update-profile", data)
      .then((res) => {
        setLoading(false);
        notifySuccess("Profile updated successfully!");
        dispatch(loadUserData());
        closeModal7();
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.data.errors && !error.response.data.errors.message) {
          const fieldErrors = error.response.data.errors;
          setErrors(fieldErrors);
        } else {
          notifyError(error.response.data.errors.message);
        }
      });
  };

  const getDefaultValues = (categoryTitle) => {
    const userInterestsInCategory = interests?.filter(
      (interest) => interest.categories === categoryTitle
    );

    if (userInterestsInCategory.length > 0) {
      return userInterestsInCategory[0].hobbies;
    }

    return [];
  };

  // Use useEffect to set default values once the interests data is available
  useEffect(() => {
    if (interests) {
      const defaultHobbies = list.map((category) => ({
        categories: category.title,
        hobbies: getDefaultValues(category.title),
      }));
      setHobbies(defaultHobbies);
    }
  }, [interests]);

  // console.log('hobbies', hobbies);
  return (
    <div className="hobbies">
      {list?.map((list) => (
        <div className="hobbies__creative box-shadow rounded-10 p-30 mt-15">
          <h3>{list?.title}</h3>
          <Chip.Group
            multiple={true}
            value={
              hobbies.find((h) => h.categories === list.title)?.hobbies || []
            }
            onChange={(e) => handleFormChange(list?.title, e)}
            name="hobbies"
            className="mt-5"
          >
            <div className="flex flex-gap-10 flex-wrap max-w-100 mt-15">
              {list?.chips?.map((item, i) => (
                <>
                  <Chip variant="filled" size="md" color="pink" value={item}>
                    {item}
                  </Chip>
                </>
              ))}
            </div>
          </Chip.Group>

          {/* {formErrors.hasChildren && (
                    <p className="error-message">{formErrors.hasChildren}</p>
                )} */}
        </div>
      ))}

      <div className="flex justify-end mt-10">
        <Button
          variant="filled"
          color="violet"
          size="sm"
          onClick={() => hanldeSubmit()}
        >
          {loading ? <LoaderWithText text="Saving.."></LoaderWithText> : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default HobbiesAndInterest;
