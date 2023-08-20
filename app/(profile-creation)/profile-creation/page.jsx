"use client"

import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import { btnBackground } from '@/styles/library/mantine';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import Step1 from '@/components/profile-creation/step1';
import Step2 from '@/components/profile-creation/Step2';


const ProfileCreation = () => {
    const [active, setActive] = useState(0);

    const [formValues, setFormValues] = useState({
        city: '',
        livesWithFamily: '',
        residency: '',
        maritalStatus: '',
        hasChildren: '',
        diet: '',
        height: '',
        subCommunity: '',
        qualification: '',
        worksWith: '',
        profession: '',
        income: ''
    });

    const [formErrors, setFormErrors] = useState({
        city: '',
        livesWithFamily: '',
        residency: '',
        maritalStatus: '',
        hasChildren: '',
        diet: '',
        height: '',
        subCommunity: '',
        qualification: '',
        worksWith: '',
        profession: '',
        income: ''
    });

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));

    const handleStep1Next = (step1FormValues) => {
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            ...step1FormValues,
        }));
        nextStep();
    };

    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    console.log('formError', formErrors);

    return (
        <div className="profile-creation py-30">
            <div className='container profile-creation__form rounded-15'>
                <h1 className='text-center py-20'>Let's Create The Profile Now</h1>
                <Stepper color='pink' active={active} breakpoint="sm">
                    <Stepper.Step label="First step" description="Create an account">
                        <Step1
                            onNextStep={handleStep1Next}
                            formValues={formValues}
                            setFormValues={setFormValues}
                            formErrors={formErrors}
                            setFormErrors={setFormErrors}
                        >
                        </Step1>
                    </Stepper.Step>
                    <Stepper.Step label="Second step" description="Education and qualification">
                        <Step2></Step2>
                    </Stepper.Step>
                    <Stepper.Step label="Final step" description="Get full access">
                        <h2 className='text-center'>Get Full Access</h2>
                    </Stepper.Step>
                </Stepper>
                {/* 
                <Group position="center" mt="xl">
                    <Button
                        size="md"
                        // fullWidth
                        sx={{ width: '180px' }}
                        leftIcon={<IconArrowNarrowLeft />}
                        style={btnBackground} type="button"
                        onClick={prevStep}
                    >Previous Step</Button>

                    <Button
                        sx={{ width: '180px' }}
                        size="md"
                        type="submit"
                        rightIcon={<IconArrowNarrowRight />}
                        onClick={handleStep1Next}
                    >Next Step</Button>
                </Group> */}
            </div>
        </div>
    )
}

export default ProfileCreation