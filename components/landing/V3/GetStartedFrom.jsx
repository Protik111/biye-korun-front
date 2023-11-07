"use client";

import {
  btnBackground,
  labelStyles,
  selectMobileStyles,
  selectMobileStyles_res,
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
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import CenteredModal from "../../global/CenteredModal";
import MultistepRegistration from "../../multiStepRegistration/multistepRegistration";
import { motherTongues, religions } from "@/staticData/InputFields/inputFields";
// import useMediaQueryHook from "@/hooks/library/mantine/useMediaQuery";
import useMediaQueryHookSSR from "@/hooks/library/mantine/useMediaQuerySSR";
import Form from "../../multiStepRegistration/Form";
import { FormProvider } from "@/context/FormContext";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";

const GetStartedFrom = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    ages: [18, 50],
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
    <>
      <div className="flex flex-gap-10 mb-10 mt-15 responsive_from">
        <Select
          size="md"
          //   label="Looking For"
          placeholder="Looking For"
          styles={{ label: labelStyles }}
          data={[
            { value: "woman", label: "Bride" },
            { value: "Men", label: "Groom" },
          ]}
          sx={selectMobileStyles_res}
        />

        <div>
          <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
              {/* <div style={{ width: "200px" }}>
                      <option value="0">Select car</option>
                    </div> */}
              <TextInput
                styles={{ label: labelStyles }}
                value={`${formData.ages[0]} - ${formData.ages[1]}`}
                size="md"
                data={[]}
                // style={{ width: "150px" }}
                sx={selectMobileStyles_res}
              />
            </Popover.Target>
            <Popover.Dropdown>
              <RangeSlider
                size="md"
                color="pink"
                py="xl"
                // scale={(v) => 2 ** v}
                step={1}
                min={18}
                max={65}
                name="ages"
                labelAlwaysOn
                values={formData.ages}
                defaultValue={formData.ages}
                range={1}
                minRange={1}
              // sx={selectMobileStyles_res}
              // onChange={handleAge}
              //   style={{ width: "200px" }}
              // onChange={(event) => handleFormChange("ages", event)}
              />
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>
      <div className="flex flex-gap-10 mb-30 responsive_from">
        <MultiSelect
          size="md"
          placeholder="Select Religion"
          defaultValue="20"
          //   styles={{ label: labelStyles }}
          data={religions}
          // sx={selectMobileStyles}
          sx={selectMobileStyles_res}
          searchable
        />
        <MultiSelect
          size="md"
          placeholder="Select Language"
          defaultValue="20"
          //   styles={{ label: labelStyles }}
          data={motherTongues}
          // style={{ height: "40px", overflow: "auto" }}
          sx={selectMobileStyles_res}
          searchable
        />
      </div>
      <div>
        {/* <Link href="/login">
        </Link> */}
        <button onClick={() => setModalOpen(true)} className="primary-btn-v3">Let's Get Started</button>
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
    </>
    // <div className="landingv2">
    //   <div className="container">
    //     <div className="landing__meet">
    //       <div className="landing__meet--form p-30 rounded-10">
    //         <h2 className="landing__meet--title text-center">
    //           Find the Right Person to Spend Rest of Your Life
    //         </h2>

    //         <div className="flex justify-center align-center flex-gap-10 flex-wrap mt-15">
    //           <Select
    //             size="md"
    //             label="Looking For"
    //             styles={{ label: labelStyles }}
    //             defaultValue="woman"
    //             data={[
    //               { value: "woman", label: "Bride" },
    //               { value: "Men", label: "Groom" },
    //             ]}
    //             sx={selectMobileStyles}
    //           />

    //           <div>
    //             <Popover width={200} position="bottom" withArrow shadow="md">
    //               <Popover.Target>
    //                 {/* <div style={{ width: "200px" }}>
    //                   <option value="0">Select car</option>
    //                 </div> */}
    //                 <TextInput
    //                   label="Age"
    //                   styles={{ label: labelStyles }}
    //                   value={`${formData.ages[0]} - ${formData.ages[1]}`}
    //                   size="md"
    //                   data={[]}
    //                   // style={{ width: "150px" }}
    //                   sx={selectMobileStyles}
    //                 />
    //               </Popover.Target>
    //               <Popover.Dropdown>
    //                 <RangeSlider
    //                   size="md"
    //                   color="pink"
    //                   py="xl"
    //                   // scale={(v) => 2 ** v}
    //                   step={1}
    //                   min={18}
    //                   max={65}
    //                   name="ages"
    //                   labelAlwaysOn
    //                   values={formData.ages}
    //                   defaultValue={formData.ages}
    //                   range={1}
    //                   minRange={1}
    //                   // onChange={handleAge}
    //                   //   style={{ width: "200px" }}
    //                   // onChange={(event) => handleFormChange("ages", event)}
    //                 />
    //               </Popover.Dropdown>
    //             </Popover>
    //           </div>

    //           {/* <Select
    //             size="md"
    //             label="Age"
    //             defaultValue="20"
    //             styles={{ label: labelStyles }}
    //             data={ages}
    //             sx={selectMobileStylesV2}
    //             min={20}
    //           />

    //           <p className="to_text">to</p>
    //           <Select
    //             size="md"
    //             label=""
    //             defaultValue="25"
    //             styles={{ label: labelStyles }}
    //             data={ages}
    //             sx={selectMobileStylesV2}
    //             max={70}
    //             style={{ marginTop: "21px", color: "white" }}
    //           /> */}
    //           {/* <p className="landing__meet--to">to</p>

    //                         <Select
    //                             size="md"
    //                             label="aged"
    //                             defaultValue="20"
    //                             styles={{ label: labelStyles }}
    //                             data={ages}
    //                             sx={selectMobileStylesV2}

    //                         /> */}
    //           <MultiSelect
    //             size="md"
    //             placeholder="Select"
    //             label="Religion"
    //             defaultValue="20"
    //             styles={{ label: labelStyles }}
    //             data={religions}
    //             sx={selectMobileStyles}
    //             searchable
    //           />
    //           <MultiSelect
    //             size="md"
    //             placeholder="Select"
    //             label="Language"
    //             defaultValue="20"
    //             styles={{ label: labelStyles }}
    //             data={motherTongues}
    //             // style={{ height: "40px", overflow: "auto" }}
    //             sx={selectMultiStyles}
    //             searchable
    //           />
    //           <div>
    //             {/* <Button
    //               className="mt-25"
    //               style={btnBackground}
    //               size="md"
    //               onClick={handleLetsBegin}
    //             >
    //               Let's Start...
    //             </Button> */}
    //             <button className="secondary-btn-v3">Let's Get Started</button>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className="flex justify-center mt-15">
    //                     <Button style={btnBackground} size="md" onClick={handleLetsBegin}>
    //                         Let's Begin
    //                     </Button>
    //                 </div> */}
    //     </div>
    //   </div>

    //   {modalOpen && (
    //     <CenteredModal
    //       modalOpen={modalOpen}
    //       size="md"
    //       handleModalClose={handleModalClose}
    //       modalTitle={
    //         <h3 className="text-center">Let's Create an Account! </h3>
    //       }
    //     >
    //       {/* <MultistepRegistration></MultistepRegistration> */}
    //       <FormProvider>
    //         <Form handleModalClose={handleModalClose}></Form>
    //       </FormProvider>
    //     </CenteredModal>
    //   )}
    // </div>
  );
};

export default GetStartedFrom;
