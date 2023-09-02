"use client"

import { useState } from 'react';
import { Stepper, Button, Group, Notification } from '@mantine/core';
import { btnBackground } from '@/styles/library/mantine';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import Step1 from '@/components/profile-creation/step1';
import Step2 from '@/components/profile-creation/Step2';
import Step3 from '@/components/profile-creation/Step3';
import { useDispatch } from 'react-redux';
import { createProfile } from '@/redux/features/user/userSlice';


const ProfileCreation = () => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(0);
    const [showNotification, setShowNotification] = useState(false);


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
        income: '',
        about: '',
        phone: ''
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
        income: '',
        about: '',
        phone: ''
    });

    console.log('formValues', formValues);

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));

    const handleStep1Next = (step1FormValues) => {
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            ...step1FormValues,
        }));
        nextStep();

        if (active === 0) {
            const { city, livesWithFamily, residency, maritalStatus, hasChildren, diet, height, subCommunity } = formValues;
            const data = { city, livesWithFamily, residency, maritalStatus, hasChildren, diet, height, subCommunity }

            dispatch(createProfile({ city, livingWith: livesWithFamily, residencyStatus: residency, maritalStatus, children: hasChildren, diet, height, caste: subCommunity, step: 'first' }))

        }

        if (active === 2) {
            // console.log('data last', formValues)
            setShowNotification(true)

            setTimeout(() => {
                setShowNotification(false);
            }, 3000)
        }
    };

    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    // console.log('formError', formErrors);

    return (
        <>

            <div style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
            }}>
                {showNotification && (
                    <Notification
                        position="top"
                        title="Profile created successfully!"
                        onClose={() => setShowNotification(false)} // Hide the notification when closed
                    >
                        We'll contact you soon!
                    </Notification>
                )}
            </div>

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
                            <Step2
                                onNextStep={handleStep1Next}
                                formValues={formValues}
                                setFormValues={setFormValues}
                                formErrors={formErrors}
                                setFormErrors={setFormErrors}
                            >

                            </Step2>
                        </Stepper.Step>
                        <Stepper.Step label="Final step" description="Provide a few words">
                            <Step3
                                onNextStep={handleStep1Next}
                                formValues={formValues}
                                setFormValues={setFormValues}
                                formErrors={formErrors}
                                setFormErrors={setFormErrors}
                            >
                            </Step3>
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
        </>
    )
}

export default ProfileCreation