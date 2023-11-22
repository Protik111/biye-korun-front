import useFormContext from "@/hooks/common/useFormContext";
import FormInputs from "./FormInputs";
import { Button, Notification } from "@mantine/core";
import { btnBackground, btnBackground_prev } from "@/styles/library/mantine";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";
import { format } from "date-fns";
import { loadUser, register, reset } from "@/redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import setAuthToken from "@/utils/setAuthToken";
import { configureAxiosHeader } from "@/utils/setAxiosHeader";
import LoaderWithText from "../global/LoaderWithText";
import { loadUserData } from "@/redux/features/user/userSlice";
import ConfirmModal from "../global/ConfirmModal";
import { useEffect } from "react";

const Form = ({ handleModalClose, modalOpen }) => {
  console.log("modalOpen from Form como", modalOpen);
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

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
    fieldErrors,
  } = useFormContext();

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => {
    // const isValid = validatePage(page);
    // if (isValid) {
    //   setPage((prev) => prev + 1);
    // }
    setPage((prev) => prev + 1);
  };

  // previous functionality
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const isSubmittable = validatePage(page);

  //   const datas = {
  //     email: data?.basic2email,
  //     firstName: data?.basic1firstName,
  //     lastName: data?.basic1lastName,
  //     dateOfBirth: format(data?.basic2dob, "MM/dd/yyyy"),
  //     gender: data?.basic1gender,
  //     postedBy: data?.basic1postedBy,
  //     language: data?.basic1community,
  //     country: data?.basic2country,
  //     religion: data?.basic1religion,
  //     password: data?.basic2password,
  //   };

  //   if (isSubmittable) {
  //     // console.log('test');
  //     // setLoading(true)
  //     // dispatch(register(datas))
  //     //     .unwrap()
  //     //     .then(() => {
  //     //         notifySuccess("Registered successfully!")
  //     //         setLoading(false)
  //     //         // console.log('yes');
  //     //         handleModalClose()

  //     //         const parsedToken = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('biyeKorun_token')) : null

  //     //         // console.log('token', parsedToken);

  //     //         if (parsedToken?.accessToken) {
  //     //             setAuthToken(parsedToken.accessToken);
  //     //             configureAxiosHeader();
  //     //             dispatch(loadUser())
  //     //             dispatch(loadUserData())
  //     //         }
  //     //         // console.log('registerred');
  //     //         router.push('/profile-creation')
  //     //         // setTimeout(() => {
  //     //         // }, 500)
  //     //     })
  //     //     .catch(() => {
  //     //         notifyError(message)
  //     //         setLoading(false)
  //     //         // console.log('no');
  //     //     })

  //     //Another approach
  //     setLoading(true);
  //     dispatch(register(datas))
  //       .then((result) => {
  //         if (register.fulfilled.match(result)) {
  //           // Request was successful, handle it here
  //           notifySuccess("Registered successfully!");
  //           setLoading(false);
  //           handleModalClose();

  //           const parsedToken =
  //             typeof window !== "undefined"
  //               ? JSON.parse(localStorage.getItem("biyeKorun_token"))
  //               : null;

  //           if (parsedToken?.accessToken) {
  //             setAuthToken(parsedToken.accessToken);
  //             configureAxiosHeader();
  //             dispatch(loadUser());
  //             dispatch(loadUserData());
  //           }
  //           router.push("/profile-creation");
  //         } else if (register.rejected.match(result)) {
  //           // Request was rejected, handle the error here
  //           const errorMessage = result.payload;
  //           notifyError(errorMessage);
  //           setLoading(false);
  //         }
  //       })
  //       .catch((error) => {
  //         // Handle any unexpected errors here
  //         console.error("Unexpected error:", error);
  //       });
  //   }
  // };

  // console.log('message', message);

  const handleModalCloseSuccess = () => setModalOpen2(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const isSubmittable = validatePage(page);

    const datas = {
      email: data?.basic2email,
      firstName: data?.basic1firstName,
      lastName: data?.basic1lastName,
      dateOfBirth: format(data?.basic2dob, "MM/dd/yyyy"),
      gender: data?.basic1gender,
      postedBy: data?.basic1postedBy,
      language: data?.basic1community,
      country: data?.basic2country,
      religion: data?.basic1religion,
      password: data?.basic2password,
    };
    console.log("181", datas);

    handleModalClose();

    // setTimeout(() => {
    // }, 3000);

    // router.push(`/profile-creation?success=${"success"}`);

    // if (isSubmittable) {
    //   setLoading(true);
    //   dispatch(register(datas))
    //     .then((result) => {
    //       if (register.fulfilled.match(result)) {
    //         // Request was successful, handle it here
    //         notifySuccess("Registered successfully!");
    //         setLoading(false);
    //         handleModalClose();

    //         const parsedToken =
    //           typeof window !== "undefined"
    //             ? JSON.parse(localStorage.getItem("biyeKorun_token"))
    //             : null;

    //         if (parsedToken?.accessToken) {
    //           setAuthToken(parsedToken.accessToken);
    //           configureAxiosHeader();
    //           dispatch(loadUser());
    //           dispatch(loadUserData());
    //         }
    //         // router.push("/profile-creation");

    //       } else if (register.rejected.match(result)) {
    //         // Request was rejected, handle the error here
    //         const errorMessage = result.payload;
    //         notifyError(errorMessage);
    //         setLoading(false);
    //       }
    //     })
    //     .catch((error) => {
    //       // Handle any unexpected errors here
    //       console.error("Unexpected error:", error);
    //     });
    // }
  };

  // useEffect(() => {
  //   if (handleModalClose) {
  //     setTimeout(() => {
  //       console.log("in setTimeouit tests");
  //       setModalOpen2(true);
  //     }, 1000);
  //   }
  // }, [handleModalClose]);

  console.log("success 205", modalOpen);

  const content = (
    <form className="form flex-col">
      <FormInputs />
      <header className="form-header">
        {/* <h2>{title[page]}</h2> */}
        {modalOpen2 && (
          <ConfirmModal
            modalOpen={modalOpen2}
            handleModalClose={handleModalCloseSuccess}
            modalTitle={
              <h3 className="text-center">Let's Create an Account!</h3>
            }
          >
            fhghuh
          </ConfirmModal>
        )}
        <div className="button-container">
          {page === 1 && (
            <div className="flex flex-column flex-gap-15">
              <Button
                size="md"
                fullWidth
                leftIcon={<IconArrowNarrowLeft />}
                style={{ backgroundColor: "#feeaec", color: "red" }}
                type="button"
                radius="xl"
                className={`button ${prevHide}`}
                onClick={handlePrev}
                disabled={disablePrev}
              >
                Prev
              </Button>

              <Button
                size="md"
                fullWidth
                type="submit"
                radius="xl"
                style={btnBackground}
                className={`button ${submitHide}`}
                // disabled={!canSubmit}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <LoaderWithText
                      text="Signing up.."
                      color="white"
                    ></LoaderWithText>
                  </>
                ) : (
                  <>Sign up </>
                )}
              </Button>
            </div>
          )}

          {(page === 0 || page === 1 || page === 2) && (
            <Button
              rightIcon={<IconArrowNarrowRight />}
              size="md"
              fullWidth
              radius="xl"
              style={btnBackground}
              className={`button ${nextHide}`}
              onClick={handleNext}
              //  disabled={disableNext}
            >
              Next
            </Button>
          )}
        </div>
      </header>
    </form>
  );

  return content;
};
export default Form;
