import useFormContext from '@/hooks/common/useFormContext'
import FormInputs from './FormInputs'
import { Button, Notification } from '@mantine/core'
import { btnBackground } from '@/styles/library/mantine'
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import { format } from 'date-fns'
import { register, reset } from '@/redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Form = () => {
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)
    const [showNotification, setShowNotification] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter();

    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
        validatePage,
        fieldErrors
    } = useFormContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => {
        const isValid = validatePage(page);

        if (isValid) {
            setPage((prev) => prev + 1);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isSubmittable = validatePage(page);

        const datas = {
            email: data?.basic2email,
            firstName: data?.basic1firstName,
            lastName: data?.basic1lastName,
            dateOfBirth: format(data?.basic2dob, 'MM/dd/yyyy'),
            gender: data?.basic1gender,
            postedBy: data?.basic1postedBy,
            community: data?.basic1community,
            country: data?.basic2country,
            religion: data?.basic1religion,
            password: data?.basic2password
        }

        if (isSubmittable) {
            // console.log(JSON.stringify(data))
            // console.log(datas, 'datas')
            dispatch(register(datas))
            setShowNotification(true)

            setTimeout(() => {
                setShowNotification(false)
                router.push('/profile-creation')
            }, 1000)
        }

    }


    const content = (
        <>
            <form className="form flex-col">


                <FormInputs />
                <header className="form-header">
                    {/* <h2>{title[page]}</h2> */}

                    <div className="button-container">

                        <div className='flex flex-gap-15'>
                            <Button
                                size="md"
                                fullWidth
                                leftIcon={<IconArrowNarrowLeft />}
                                style={btnBackground} type="button"
                                className={`button ${prevHide}`}
                                onClick={handlePrev}
                                disabled={disablePrev}
                            >Prev</Button>

                            <Button
                                size="md"
                                fullWidth
                                type="submit"
                                className={`button ${submitHide}`}
                                // disabled={!canSubmit}
                                onClick={handleSubmit}
                            >Sign Up</Button>
                        </div>

                        <Button
                            rightIcon={<IconArrowNarrowRight />}
                            size="md"
                            fullWidth
                            style={btnBackground}
                            className={`button ${nextHide}`}
                            onClick={handleNext}
                        //  disabled={disableNext}
                        >Next
                        </Button>

                    </div>
                </header>
            </form>

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
                        title="Registered successfully!"
                        onClose={() => setShowNotification(false)} // Hide the notification when closed
                    >
                        We'll contact you soon!
                    </Notification>
                )}
            </div>
        </>
    )

    return content
}
export default Form