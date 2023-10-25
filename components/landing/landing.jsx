"use client";

import {
  btnBackground,
  labelStyles,
  selectMobileStyles,
  selectMobileStylesV2,
} from "@/styles/library/mantine";
import { Button, Select } from "@mantine/core";
import { useState } from "react";
import CenteredModal from "../global/CenteredModal";
import MultistepRegistration from "../multiStepRegistration/multistepRegistration";
import { motherTongues, religions } from "@/staticData/InputFields/inputFields";
// import useMediaQueryHook from "@/hooks/library/mantine/useMediaQuery";
import useMediaQueryHookSSR from "@/hooks/library/mantine/useMediaQuerySSR";
import Form from "../multiStepRegistration/Form";
import { FormProvider } from "@/context/FormContext";

const Landing = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { matches } = useMediaQueryHookSSR("(max-width: 640px)");

  // console.log('matches', matches);

  const startAge = 20;
  const endAge = 70;
  const ages = Array.from({ length: endAge - startAge + 1 }, (_, index) =>
    (startAge + index).toString().padStart(2, "0")
  );

  const handleModalClose = () => setModalOpen(false);

  return (
    <section className="landing">
      <div className="container">
        <div className="landing__meet">
          <h2 className="landing__meet--title text-center">
            Find the right person to spend rest of your life
          </h2>

          <div className="landing__meet--form flex justify-center align-center flex-gap-10 flex-wrap p-30 rounded-10">
            <Select
              size="md"
              label="I am looking for a"
              styles={{ label: labelStyles }}
              defaultValue="woman"
              data={[
                { value: "woman", label: "Woman" },
                { value: "men", label: "Men" },
              ]}
              sx={selectMobileStyles}
            />

            <Select
              size="md"
              label="aged"
              defaultValue="20"
              styles={{ label: labelStyles }}
              data={ages}
              sx={selectMobileStylesV2}
            />
            <p className="landing__meet--to">to</p>

            <Select
              size="md"
              label="aged"
              defaultValue="20"
              styles={{ label: labelStyles }}
              data={ages}
              sx={selectMobileStylesV2}
            />

            <Select
              size="md"
              placeholder="Select"
              label="of religion"
              defaultValue="20"
              styles={{ label: labelStyles }}
              data={religions}
              sx={selectMobileStyles}
            />

            <Select
              size="md"
              placeholder="Select"
              label="and mother tongue"
              defaultValue="20"
              styles={{ label: labelStyles }}
              data={motherTongues}
              // style={{ width: '180px' }}
              sx={selectMobileStyles}
            />
          </div>

          <div className="flex justify-center mt-15">
            <Button
              style={btnBackground}
              size="md"
              onClick={() => setModalOpen(true)}
            >
              Let's Begin
            </Button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <CenteredModal
          modalOpen={modalOpen}
          handleModalClose={handleModalClose}
          modalTitle={<h3 className="text-center">Let's Create an Account!</h3>}
        >
          {/* <MultistepRegistration></MultistepRegistration> */}
          <FormProvider>
            <Form></Form>
          </FormProvider>
        </CenteredModal>
      )}
    </section>
  );
};

export default Landing;
