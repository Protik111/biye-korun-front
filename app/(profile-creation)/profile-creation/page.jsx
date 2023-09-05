

import { useState } from 'react';
import { Stepper, Button, Group, Notification } from '@mantine/core';
import { btnBackground } from '@/styles/library/mantine';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import Step1 from '@/components/profile-creation/step1';
import Step2 from '@/components/profile-creation/Step2';
import Step3 from '@/components/profile-creation/Step3';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile } from '@/redux/features/user/userSlice';
import { notifyError } from '@/utils/showNotification';
import { useRouter } from 'next/navigation';


const ProfileCreation = () => {
    const { userInfo, message } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [active, setActive] = useState(0);
    const router = useRouter();

    const { location: { city, residencyStatus } = {}, doctrine: { caste } = {}, appearance: { height } = {}, education: { college, education } = {}, family: { children, livingWith } = {}, lifestyle: { diet, maritalStatus } = {}, profession: { employer, income, occupation, workingWith } = {}, trait: { aboutMe } = {}, phone } = userInfo;

    // console.log('city, residencyStatus', city, residencyStatus);


    const [formValues, setFormValues] = useState({
        city: city ? city : '',
        livesWithFamily: livingWith ? livingWith : '',
        residency: residencyStatus ? residencyStatus : '',
        maritalStatus: maritalStatus ? maritalStatus : '',
        hasChildren: children ? children : '',
        diet: diet ? diet : '',
        height: height ? height : '',
        subCommunity: caste ? caste : '',
        qualification: education ? education : '',
        college: college ? college : '',
        worksWith: workingWith ? workingWith : '',
        profession: occupation ? occupation : '',
        company: employer ? employer : '',
        income: income ? income : '',
        about: aboutMe ? aboutMe : '',
        phone: phone ? phone : ''
        // city: '',
        // livesWithFamily: '',
        // residency: '',
        // maritalStatus: '',
        // hasChildren: '',
        // diet: '',
        // height: '',
        // subCommunity: '',
        // qualification: '',
        // college: '',
        // worksWith: '',
        // profession: '',
        // company: '',
        // income: '',
        // about: '',
        // phone: ''
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
        college: '',
        worksWith: '',
        profession: '',
        company: '',
        income: '',
        about: '',
        phone: ''
    });

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));

    const handleStep1Next = (step1FormValues) => {
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            ...step1FormValues,
        }));
        // nextStep();

        if (active === 0) {
            const { city, livesWithFamily, residency, maritalStatus, hasChildren, diet, height, subCommunity } = formValues;
            const data = { city, livesWithFamily, residency, maritalStatus, hasChildren, diet, height, subCommunity }

            dispatch(createProfile({ city, livingWith: livesWithFamily, residencyStatus: residency, maritalStatus, children: hasChildren, diet, height, caste: subCommunity, step: 'first' }))
                .unwrap()
                .then(() => {
                    nextStep();
                })
                .catch(() => {
                    notifyError(message)
                })

        }

        if (active === 1) {
            const { qualification, college, worksWith, company, profession, income } = formValues;
            dispatch(createProfile({ education: qualification, college, workingWith: worksWith, occupation: profession, employer: company, income, step: 'second' }))
                .unwrap()
                .then(() => {
                    nextStep();
                })
                .catch(() => {
                    notifyError(message)
                })
        }

        if (active === 2) {
            const { about, phone } = formValues;
            dispatch(createProfile({ aboutMe: about, phone: phone.replace(/[+\s]/g, ''), step: 'third' }))
                .unwrap()
                .then(() => {
                    nextStep();

                    setTimeout(() => {
                        router.push('/registration/photo')
                    }, 1000)
                })
                .catch(() => {
                    notifyError(message)
                })
        }
    };

    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    // console.log('formError', formErrors);

    return (
        <>
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