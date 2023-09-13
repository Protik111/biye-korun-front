import LoaderWithText from "@/components/global/LoaderWithText"
import { loadUser, login } from "@/redux/features/auth/authSlice"
import { loadUserData } from "@/redux/features/user/userSlice"
import { btnBackground, logininput } from "@/styles/library/mantine"
import setAuthToken from "@/utils/setAuthToken"
import { configureAxiosHeader } from "@/utils/setAxiosHeader"
import { notifyError, notifySuccess } from "@/utils/showNotification"
import { Button, Loader, PasswordInput, TextInput } from "@mantine/core"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const LoginComp = () => {
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const [formDataError, setFormDataError] = useState({
        email: '',
        password: ''
    })

    const handleChange = (name, value) => {
        setFormData((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    }

    const validateForm = () => {
        const errors = {};

        if (!formData.email) {
            errors.email = 'Email is required'
        }

        if (!formData.password) {
            errors.password = 'Password is required'
        }

        setFormDataError(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    }

    const handleLogin = () => {
        if (validateForm()) {
            // console.log('formData', formData);
            setLoading(true)
            dispatch(login(formData))
                .unwrap()
                .then(() => {
                    notifySuccess("Logged in successfully!")
                    setLoading(false)

                    const parsedToken = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('biyeKorun_token')) : null

                    if (parsedToken?.accessToken) {
                        setAuthToken(parsedToken.accessToken);
                        configureAxiosHeader();
                        dispatch(loadUser())
                        dispatch(loadUserData())
                    }

                    setTimeout(() => {
                        router.push('/my-profile', '/my-profile', { shallow: true })
                        // window.location.href("/dashboard")
                    }, 500)
                })
                .catch(() => {
                    notifyError(message)
                    setLoading(false)
                })
        }
    }

    return (
        <div className="loginComp flex justify-center align-center min-vh-75 container">
            <div className="loginComp__wrapper container-box-vh-50 grid grid-cols-2 grid-cols-2-responsive place-center px-15">
                <div className="loginComp__wrapper--left">
                    <br />

                    <TextInput
                        label="Your Email"
                        placeholder="Enter your email"
                        size="md"
                        withAsterisk
                        name="email"
                        fullWidth
                        sx={logininput}
                        value={formData.email}
                        onChange={(event) => handleChange('email', event.target.value)}
                        error={formDataError.email}

                    />
                    <br />


                    <PasswordInput
                        label="Your Password"
                        placeholder="Enter your password"
                        size="md"
                        withAsterisk
                        name="password"
                        fullWidth
                        sx={logininput}
                        value={formData.password}
                        onChange={(event) => handleChange('password', event.target.value)}
                        error={formDataError.password}

                    />
                    <br />

                    <Button
                        size="md"
                        fullWidth
                        // leftIcon={<IconArrowNarrowLeft />}
                        style={btnBackground} type="button"
                        className={`button`}
                        onClick={handleLogin}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <LoaderWithText text="Signing in.." color="white"></LoaderWithText>
                            </>
                        ) : (
                            <>
                                Sign In
                            </>
                        )}
                    </Button>
                </div>
                <div className="loginComp__wrapper--right">
                    <img src="/auth/login-password.svg" alt="login" />
                </div>
            </div>
        </div>
    )
}

export default LoginComp