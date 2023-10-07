"use client";

import {
  btnBackground,
  labelStyles,
  selectMobileStyles,
  selectMobileStylesV2,
  selectMultiStyles,
} from "@/styles/library/mantine";
import {
  Button,
  Select,
  MultiSelect,
  RangeSlider,
  Popover,
  Text,
} from "@mantine/core";
import { useState } from "react";
import CenteredModal from "../global/CenteredModal";
import MultistepRegistration from "../multiStepRegistration/multistepRegistration";
import { motherTongues, religions } from "@/staticData/InputFields/inputFields";
// import useMediaQueryHook from "@/hooks/library/mantine/useMediaQuery";
import useMediaQueryHookSSR from "@/hooks/library/mantine/useMediaQuerySSR";
import Form from "../multiStepRegistration/Form";
import { FormProvider } from "@/context/FormContext";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const LandingV2 = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    ages: [18, 25],
  });

  // console.log('matches', matches);

  const startAge = 20;
  const endAge = 70;
  const ages = Array.from({ length: endAge - startAge + 1 }, (_, index) =>
    (startAge + index).toString().padStart(2, "0")
  );

  const handleModalClose = () => setModalOpen(false);

  const handleLetsBegin = () => {
    if (!isAuthenticated) {
      setModalOpen(true);
    } else {
      router.push("/my-matches");
    }
  };

  const handleFormChange = (name, value) => {
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  return (
    <div className="landingv2">
      <div className="slider">
        <div className="slide slide1"></div>
        <div className="slide slide2"></div>
        <div className="slide slide3"></div>
        <div className="slide slide4"></div>
        <div className="slide slide5"></div>
        <div className="slide slide6"></div>
      </div>

      <div className="container">
        <div className="landing__meet">
          <div className="landing__meet--form p-30 rounded-10">
            <h2 className="landing__meet--title text-center">
              Find the right person to spend rest of your life
            </h2>

            <div className="flex justify-center align-center flex-gap-10 flex-wrap mt-15">
              <Select
                size="md"
                label="Looking For"
                styles={{ label: labelStyles }}
                defaultValue="woman"
                data={[
                  { value: "woman", label: "Bride" },
                  { value: "Men", label: "Groom" },
                ]}
                sx={selectMobileStyles}
              />

              <div>
                {/* <Popover width={200} position="bottom" withArrow shadow="md">
                  <Popover.Target>
                    <Button>Toggle popover</Button>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <RangeSlider
                      size="md"
                      color="pink"
                      py="xl"
                      // scale={(v) => 2 ** v}
                      step={1}
                      min={18}
                      max={39}
                      name="ages"
                      labelAlwaysOn
                      values={formData.ages}
                      defaultValue={formData.ages}
                      range={2}
                      // onChange={handleAge}
                      //   style={{ width: "200px" }}
                      onChange={(event) => handleFormChange("ages", event)}
                    />
                  </Popover.Dropdown>
                </Popover> */}
              </div>

              <Select
                size="md"
                label="Age"
                defaultValue="20"
                styles={{ label: labelStyles }}
                data={ages}
                sx={selectMobileStylesV2}
                min={20}
              />

              <p className="to_text">to</p>
              <Select
                size="md"
                label=""
                defaultValue="25"
                styles={{ label: labelStyles }}
                data={ages}
                sx={selectMobileStylesV2}
                max={70}
                style={{ marginTop: "21px", color: "white" }}
              />
              {/* <p className="landing__meet--to">to</p>

                            <Select
                                size="md"
                                label="aged"
                                defaultValue="20"
                                styles={{ label: labelStyles }}
                                data={ages}
                                sx={selectMobileStylesV2}


                            /> */}
              <Select
                size="md"
                placeholder="Select"
                label="Religion"
                defaultValue="20"
                styles={{ label: labelStyles }}
                data={religions}
                sx={selectMobileStyles}
              />
              <MultiSelect
                size="md"
                placeholder="Select"
                label="Language"
                defaultValue="20"
                styles={{ label: labelStyles }}
                data={motherTongues}
                // style={{ height: "40px", overflow: "auto" }}
                sx={selectMultiStyles}
                searchable
              />
              <div>
                <Button
                  className="mt-25"
                  style={btnBackground}
                  size="md"
                  onClick={handleLetsBegin}
                >
                  Let's start...
                </Button>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center mt-15">
                        <Button style={btnBackground} size="md" onClick={handleLetsBegin}>
                            Let's Begin
                        </Button>
                    </div> */}
        </div>
      </div>

      {modalOpen && (
        <CenteredModal
          modalOpen={modalOpen}
          size="md"
          handleModalClose={handleModalClose}
          modalTitle={<h3 className="text-center">Let's create an account!</h3>}
        >
          {/* <MultistepRegistration></MultistepRegistration> */}
          <FormProvider>
            <Form handleModalClose={handleModalClose}></Form>
          </FormProvider>
        </CenteredModal>
      )}
    </div>
  );
};

export default LandingV2;
