import useAxios from "@/hooks/axios/useAxios";
import { notifyError } from "@/utils/showNotification";
import { Button, Divider, Loader, Radio } from "@mantine/core"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

const PaymentHero = () => {
    const [filterPackage, setFilterPackage] = useState([]);
    const { packageId } = useParams();
    const { data, error, loading, refetch } = useAxios('/package');

    const filterData = !loading && data?.data?.filter(item => item?._id == packageId);

    useEffect(() => {
        const filterData = data?.data?.find(item => item?._id == packageId);
        setFilterPackage(filterData);
        // setLoggedInUser(selectedBooking);
    }, [packageId, loading])

    console.log('filterPackage', filterPackage);


    return (
        <div className='plansheroV2 min-vh-100'>
            <div className="container">
                <h2 className="text-center text-white-light">Select a Payment Gateway</h2>
            </div>
            <div className="container container-box-bg w-50 py-30">
                <div className="flex flex-wrap justify-between">
                    <Radio description="Pay securely using the information" color="pink" label={
                        <div className="flex justify-center flex-gap-15 align-center">
                            <img style={{ width: '120px' }} src="/payment/ssl-commerze.png" alt="SSL" />
                            <p>SSLCOMMERZE</p>
                        </div>
                    } name="check" value="check" defaultChecked />
                    <div className="py-15 px-10 border-1 rounded-10 w-50">
                        <h3>Discount and Payment</h3>
                        <Divider mt={10} size="xs" />
                        <div className="mt-15">
                            <div>
                                <h4><b className="secondary-text">Package Summary</b></h4>
                            </div>
                            {
                                !loading ?
                                    <div>
                                        <div className="flex justify-between mt-5">
                                            <h4>Package Name</h4>
                                            <h4><b>{filterPackage?.name}</b></h4>
                                        </div>

                                        <div className="flex justify-between mt-5">
                                            <h4>Total Price</h4>
                                            <h4><b>BDT {filterPackage?.price}</b></h4>
                                        </div>

                                        <div className="flex justify-between mt-5">
                                            <h4>Price after Discount</h4>
                                            <h4><b>BDT {filterPackage?.discountPrice ? filterPackage?.discountPrice : ''}</b></h4>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex justify-center align-center">
                                        <Loader color="black" size="xs"></Loader>
                                    </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-25">
                    <Button onClick={() => notifyError("Payment is not implemented yet!")} className="w-25" variant="filled" color="red" size="md" radius="xl">Continue to Buy</Button>
                </div>
            </div>
        </div>
    )
}

export default PaymentHero