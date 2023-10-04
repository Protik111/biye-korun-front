import { Avatar, Button } from "@mantine/core"
import CenteredModal from "../global/CenteredModal";
import { FormProvider } from "@/context/FormContext";
import Form from "../multiStepRegistration/Form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import useAxios from "@/hooks/axios/useAxios";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import { imageUrl } from "@/staticData/image";

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
    const { data, error, loading, refetch } = useAxios("user/public-profile");
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
            <h2 className="text-center">Match Bride & Groom For You</h2>
            <div className="container bridegroom__wrapper">
                {
                    data?.data?.map((item, i) => <div className="container-box-bg bridegroom__wrapper--container p-40 text-center" key={i}>
                        <div className="info">
                            <Avatar sx={{ objectFit: 'contain' }} mx="auto" size="xl" radius="xl" src={item?.profilePicture[0]?.url?.medium || imageUrl} alt={item?.name} />
                            <h3 className="mt-5">{item?.firstName + item?.lastName}</h3>
                            <p>{calculateAge(item?.dateOfBirth)}</p>
                            <p>{heightCalculator(item?.appearance?.height) || ''}</p>
                        </div>
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