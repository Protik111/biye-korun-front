import useFormContext from '@/hooks/common/useFormContext'
import FormInputs from './FormInputs'
import { Button, Notification } from '@mantine/core'
import { btnBackground } from '@/styles/library/mantine'
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import { format } from 'date-fns'
import { loadUser, register, reset } from '@/redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { notifyError, notifySuccess } from '@/utils/showNotification';
import setAuthToken from '@/utils/setAuthToken';
import { configureAxiosHeader } from '@/utils/setAxiosHeader';
import LoaderWithText from '../global/LoaderWithText';
import { loadUserData } from '@/redux/features/user/userSlice';



const Form = ({ handleModalClose }) => {
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)
    const [showNotification, setShowNotification] = useState(false);
    const [loading, setLoading] = useState(false);

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
            console.log('test');
            setLoading(true)
            dispatch(register(datas))
                .unwrap()
                .then(() => {
                    notifySuccess("Registered successfully!")
                    setLoading(false)
                    console.log('yes');
                    handleModalClose()

                    const parsedToken = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('biyeKorun_token')) : null

                    console.log('token', token);

                    if (parsedToken?.accessToken) {
                        setAuthToken(parsedToken.accessToken);
                        configureAxiosHeader();
                        dispatch(loadUser())
                        dispatch(loadUserData())
                    }
                    console.log('registerred');
                    setTimeout(() => {
                        router.push('/profile-creation')
                    }, 500)
                })
                .catch(() => {
                    notifyError(message)
                    setLoading(false)
                    console.log('no');
                })
        }

    }

    // console.log('message', message);


    const content = (
        <form className="form flex-col">


            <FormInputs />
            <header className="form-header">
                {/* <h2>{title[page]}</h2> */}

                <div className="button-container">

                    {page === 1 && <div className='flex flex-gap-15'>
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
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <LoaderWithText text="Signing up.." color="white"></LoaderWithText>
                                </>
                            ) : (
                                <>
                                    Sign up
                                </>
                            )}
                        </Button>
                    </div>}

                    {page === 0 && <Button
                        rightIcon={<IconArrowNarrowRight />}
                        size="md"
                        fullWidth
                        style={btnBackground}
                        className={`button ${nextHide}`}
                        onClick={handleNext}
                    //  disabled={disableNext}
                    >Next
                    </Button>}

                </div>
            </header>
        </form>
    )

    return content
}
export default Form