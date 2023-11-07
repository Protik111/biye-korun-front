import CenteredModal from "@/components/global/CenteredModal";
import LoaderWithText from "@/components/global/LoaderWithText";
import Form from "@/components/multiStepRegistration/Form";
import { FormProvider } from "@/context/FormContext";
import { loadUser, login } from "@/redux/features/auth/authSlice";
import { loadUserData } from "@/redux/features/user/userSlice";
import { btnBackground, logininput } from "@/styles/library/mantine";
import setAuthToken from "@/utils/setAuthToken";
import { configureAxiosHeader } from "@/utils/setAxiosHeader";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { Button, Loader, PasswordInput, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const LoginComp = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [formDataError, setFormDataError] = useState({
    email: "",
    password: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => setModalOpen(false);

  const handleChange = (name, value) => {
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    setFormDataError(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleLogin = () => {
    if (validateForm()) {
      // console.log('formData', formData);
      setLoading(true);
      dispatch(login(formData))
        .then((result) => {
          if (login.fulfilled.match(result)) {
            notifySuccess("Logged in successfully!");
            setLoading(false);

            const parsedToken =
              typeof window !== "undefined"
                ? JSON.parse(localStorage.getItem("biyeKorun_token"))
                : null;

            if (parsedToken?.accessToken) {
              setAuthToken(parsedToken.accessToken);
              configureAxiosHeader();
              dispatch(loadUser());
              dispatch(loadUserData());
            }
            window.location.href = "/dashboard";
          } else if (login.rejected.match(result)) {
            // Request was rejected, handle the error here
            const errorMessage = result.payload;
            notifyError(errorMessage);
            setLoading(false);
          }

          // setTimeout(() => {
          //     // router.push('/my-profile', '/my-profile', { shallow: true })
          // }, 500)
        })
        .catch(() => {
          notifyError("Please try again!");
          setLoading(false);
        });
    }
  };

  return (
    <div className="loginComp flex justify-center align-center min-vh-75 container">
      <div className="loginComp__wrapper container-box-vh-50 grid grid-cols-2 grid-cols-2-responsive place-center px-15">
        <div className="loginComp__wrapper--left box-shadow px-25 py-30 rounded-10">
          <h4 className="text-center">Sign In</h4>
          <br />

          <TextInput
            label="Email"
            placeholder="Enter Email"
            size="md"
            withAsterisk
            name="email"
            fullWidth
            sx={logininput}
            value={formData.email}
            onChange={(event) => handleChange("email", event.target.value)}
            error={formDataError.email}
          />
          <br />

          <PasswordInput
            label="Password"
            placeholder="Enter Password"
            size="md"
            withAsterisk
            name="password"
            fullWidth
            sx={logininput}
            value={formData.password}
            onChange={(event) => handleChange("password", event.target.value)}
            error={formDataError.password}
          />
          <br />

          <Button
            size="md"
            fullWidth
            // leftIcon={<IconArrowNarrowLeft />}
            style={btnBackground}
            type="button"
            className={`button`}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <>
                <LoaderWithText
                  text="Signing in.."
                  color="white"
                ></LoaderWithText>
              </>
            ) : (
              <>Sign In</>
            )}
          </Button>
          <br></br>

          <div>
            <p style={{ color: "#828282" }}>
              Forgot Password?
              <Link href="/forgot-password">
                <span style={{ color: "#F87A1D" }} className="underline">
                  {" "}
                  Recover now!
                </span>
              </Link>
            </p>
            <p style={{ color: "#828282" }}>
              New to Biye Korun?{" "}
              <span
                style={{ color: "#F87A1D" }}
                onClick={() => setModalOpen(true)}
                className="underline pointer"
              >
                Create an Account!
              </span>
            </p>
          </div>

          {/* <Button
                        size="md"
                        fullWidth
                        // variant="outline"
                        // leftIcon={<IconArrowNarrowLeft />}
                        // style={btnBackground}
                        type="button"
                        className={`button mt-10`}
                        onClick={() => setModalOpen(true)}
                    // disabled={loading}
                    >
                        Register
                    </Button> */}
        </div>
        <div className="loginComp__wrapper--right">
          {/* <img src="/auth/login-password.svg" alt="login" /> */}
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
            <Form handleModalClose={handleModalClose}></Form>
          </FormProvider>
        </CenteredModal>
      )}
    </div>
  );
};

export default LoginComp;
