import { Avatar, Button } from "@mantine/core"
import CenteredModal from "../global/CenteredModal";
import { FormProvider } from "@/context/FormContext";
import Form from "../multiStepRegistration/Form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const brides = [
    {
        id: 1,
        image: "landing/brides/bride1.png",
        name: "Ashlyn Carder",
        years: "24 years",
        tall: "5ft 5 in",
    },
    {
        id: 2,
        image: "landing/brides/bride2.png",
        name: "Ashlyn Carder",
        years: "24 years",
        tall: "5ft 5 in",
    },
    {
        id: 3,
        image: "landing/brides/bride5.png",
        name: "Ashlyn Carder",
        years: "24 years",
        tall: "5ft 5 in",
    },
    {
        id: 4,
        image: "landing/brides/bride4.png",
        name: "Ashlyn Carder",
        years: "24 years",
        tall: "5ft 5 in",
    },
    {
        id: 5,
        image: "landing/brides/bride5.png",
        name: "Ashlyn Carder",
        years: "24 years",
        tall: "5ft 5 in",
    }
]

const BrideGroom = () => {
    const { isAuthenticated } = useSelector(state => state.auth)
    const router = useRouter();

    const [modalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => setModalOpen(false)

    const handleRegister = () => {
        if (!isAuthenticated) {
            setModalOpen(true)
        } else {
            router.push('/my-matches')
        }
    }

    return (
        <div className='bridegroom'>
            <h2 className="text-center">Match bride & groom for you</h2>
            <div className="container bridegroom__wrapper">
                {
                    brides?.map((item, i) => <div className="container-box-bg bridegroom__wrapper--container p-40 text-center" key={i}>
                        <Avatar mx="auto" size="xl" src={item?.image} alt={item?.name} />
                        <h3 className="mt-5">{item?.name}</h3>
                        <p>{item?.years}</p>
                        <p>{item?.tall}</p>
                        <Button
                            sx={{ backgroundColor: "#e64980", color: "white" }}
                            color="pink"
                            variant="white"
                            className="mt-10"
                        >
                            View Profile
                        </Button>
                    </div>)
                }
            </div>

            <div className="flex justify-center py-30">
                <Button
                    sx={{ width: '180px' }}
                    // color="pink"
                    className="mt-10"
                    size="md"
                    onClick={handleRegister}
                >
                    {!isAuthenticated ? 'Register Now' : "Let's Begin"}
                </Button>
            </div>
            {
                modalOpen && <CenteredModal modalOpen={modalOpen} handleModalClose={handleModalClose} modalTitle={<h3 className="text-center">Let's create an account!</h3>}>
                    {/* <MultistepRegistration></MultistepRegistration> */}
                    <FormProvider>
                        <Form></Form>
                    </FormProvider>
                </CenteredModal>
            }
        </div>
    )
}

export default BrideGroom