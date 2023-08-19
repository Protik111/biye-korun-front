"use client"

import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import { btnBackground } from '@/styles/library/mantine';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import Step1 from '@/components/profile-creation/step1';


const ProfileCreation = () => {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <div className="profile-creation py-30">
            <div className='container profile-creation__form rounded-15'>
                <h1 className='text-center py-20'>Let's Create The Profile Now</h1>
                <Stepper color='pink' active={active} onStepClick={setActive} breakpoint="sm">
                    <Stepper.Step label="First step" description="Create an account">
                        <Step1></Step1>
                    </Stepper.Step>
                    <Stepper.Step label="Second step" description="Verify email">
                        <h2 className='text-center'>Verify email</h2>
                    </Stepper.Step>
                    <Stepper.Step label="Final step" description="Get full access">
                        <h2 className='text-center'>Get Full Access</h2>
                    </Stepper.Step>
                </Stepper>

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
                        onClick={nextStep}
                    >Next Step</Button>
                </Group>
            </div>
        </div>
    )
}

export default ProfileCreation