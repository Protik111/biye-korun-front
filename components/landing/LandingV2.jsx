'use client';

import { btnBackground, labelStyles, selectMobileStyles, selectMobileStylesV2 } from "@/styles/library/mantine";
import { Button, Select } from "@mantine/core";
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
    const { isAuthenticated } = useSelector(state => state.auth)
    const router = useRouter();

    const [modalOpen, setModalOpen] = useState(false);

    // console.log('matches', matches);

    const startAge = 20;
    const endAge = 70;
    const ages = Array.from({ length: endAge - startAge + 1 }, (_, index) => (startAge + index).toString().padStart(2, '0'));

    const handleModalClose = () => setModalOpen(false)

    const handleLetsBegin = () => {
        if (!isAuthenticated) {
            setModalOpen(true)
        } else {
            router.push('/my-matches')
        }
    }

    return (
        <div className='landingv2'>
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
                        <h2 className="landing__meet--title text-center">Find the right person to spend rest of your life</h2>

                        <div className="flex justify-center align-center flex-gap-10 flex-wrap mt-10">
                            <Select
                                size="md"
                                label="I am looking for a"
                                styles={{ label: labelStyles }}
                                defaultValue="woman"
                                data={[
                                    { value: 'woman', label: 'Woman' },
                                    { value: 'men', label: 'Men' },
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
                    </div>

                    <div className="flex justify-center mt-15">
                        <Button style={btnBackground} size="md" onClick={handleLetsBegin}>
                            Let's Begin
                        </Button>
                    </div>
                </div>
            </div>

            {
                modalOpen && <CenteredModal modalOpen={modalOpen} handleModalClose={handleModalClose}>
                    {/* <MultistepRegistration></MultistepRegistration> */}
                    <FormProvider>
                        <Form handleModalClose={handleModalClose}></Form>
                    </FormProvider>
                </CenteredModal>
            }
        </div>
    )
}

export default LandingV2