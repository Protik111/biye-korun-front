import useAxios from "@/hooks/axios/useAxios";
import useAxiosPost from "@/hooks/axios/useAxiosPost";
import { notifyError } from "@/utils/showNotification";
import { Button, Divider, Loader, Radio } from "@mantine/core"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import PaypalPayment from "./PaypalPayment";
import { useSelector } from "react-redux";

const message = {
    success: '',
    error: ''
}

const PaymentHero = () => {
    const [filterPackage, setFilterPackage] = useState([]);
    const { packageId } = useParams();
    const { data, error, loading, refetch } = useAxios('/package');
    const { data: data2, loading: loading2, error: error2, postData: sendPostRequest } = useAxiosPost('payment/sslinit', null);
    const router = useRouter();

    const { userInfo } = useSelector((state) => state.user) || {};
    const { country = {} } = userInfo || {}
    const isFromBD = country.toLowerCase() === 'bangladesh' ? false : true;

    const filterData = !loading && data?.data?.filter(item => item?._id == packageId);

    useEffect(() => {
        const filterData = data?.data?.find(item => item?._id == packageId);
        setFilterPackage(filterData);
        // setLoggedInUser(selectedBooking);
    }, [packageId, loading])

    // console.log('filterPackage', filterPackage);
    const handlePayment = (id) => {
        sendPostRequest({
            currency: "BDT",
            packageId: id
        });
    }
    useEffect(() => {
        if (data2?.success) {
            router.push(data2.url)
        }
    }, [data2])


    return (

        <div className='plansheroV2 min-vh-100'>
            <div className="container">
                <h2 className="text-center text-white-light">Select a Payment Gateway</h2>
            </div>
            <div className="container container-box-bg w-50 w-md-100-responsive py-30">
                <div className="flex flex-wrap justify-between">
                    <div>
                        {
                            isFromBD &&
                            <Radio className="mb-30" color="pink" label={
                                <div className="flex justify-center flex-gap-15">
                                    <img style={{ width: '120px' }} src="/payment/ssl-commerze.png" alt="SSL" />
                                    {/* <p>SSLCOMMERZE</p> */}
                                </div>
                            } name="check" value="check" defaultChecked={isFromBD} disabled={!isFromBD} />
                        }

                        <Radio className="mb-30" color="pink" label={
                            <div className="flex justify-center flex-gap-15">
                                <img style={{ width: '120px' }} src="/payment/paypal-color.svg" alt="paypal" />
                                {/* <p>PAYPAL</p> */}
                            </div>
                        } name="check" value="check" defaultChecked={!isFromBD} disabled={isFromBD} />
                    </div>


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
                                            <h4>
                                                {
                                                    isFromBD ?
                                                        <del><b>BDT {filterPackage?.price}</b></del> :
                                                        <del> <b> USD {filterPackage?.usdPrice}</b></del>
                                                }
                                            </h4>
                                        </div>

                                        <div className="flex justify-between mt-5">
                                            <h4>Price After Discount</h4>
                                            <h4>
                                                {
                                                    isFromBD ?
                                                        <b>BDT {filterPackage?.discountPrice ? filterPackage?.discountPrice : ''}</b>
                                                        :
                                                        <b>USD {filterPackage?.usdDiscountPrice ? filterPackage?.usdDiscountPrice : ''}</b>

                                                }
                                            </h4>
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

                {
                    isFromBD &&
                    <div className="flex justify-center mt-25">
                        <Button onClick={() => handlePayment(filterPackage?._id)} className="w-25" variant="filled" color="red" size="md" radius="xl">PAY WITH SSLCOMMERZ</Button>
                    </div>
                }
                {
                    !isFromBD &&
                    // filterPackage &&
                    <div className="flex justify-center mt-30 pt-20">
                        <PaypalPayment packageData={filterPackage} />
                    </div>
                }
            </div>
        </div>

    )
}

export default PaymentHero