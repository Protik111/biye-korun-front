import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { configureAxiosHeader } from '@/utils/setAxiosHeader';
import { notifyError } from '@/utils/showNotification';
import { useRouter } from 'next/navigation';

const PaypalPayment = (props) => {

    const { packageData } = props;

    const router = useRouter();

    const createOrder = async (data) => {
        try {
            configureAxiosHeader()
            const response = await axios.post('/payment/paypal/orders', {
                currency: "USD",
                packageId: packageData?._id
            })
            const order = response.data;
            return order.id
        } catch (error) {
            console.log(error)
            notifyError(error.message)
        }
    };


    const onApprove = async (data) => {
        // Order is captured on the server and the response is returned to the browser
        try {
            configureAxiosHeader()
            const response = await axios.post('/payment/paypal/orders/capture', {
                orderID: data.orderID
            })
            router.push(`/plans/payment-status/success?id=${response?.data?.id}`)

            // console.log("On Approve", response.data)
            // console.log("On Approve payload Data", data)
            // return response.data
        } catch (error) {
            console.log(error)
            notifyError(error.message)
        }
    };


    const onCancel = async (data) => {
        // Order is captured on the server and the response is returned to the browser
        try {
            // console.log("On Cancel", data)
            router.push(`/plans/payment-status/cancel?id=${data?.orderID}`)
        } catch (error) {
            console.log(error)
            notifyError(error.message)
        }
    };


    const onError = async (data) => {
        // Order is captured on the server and the response is returned to the browser
        try {
            // console.log("On Cancel", data)
            router.push(`/plans/payment-status/fail?id=${data?.orderID}`)
        } catch (error) {
            console.log(error)
            notifyError(error.message)
        }
    };


    return (
        <PayPalButtons
            createOrder={(data) => createOrder(data)}
            onApprove={(data) => onApprove(data)}
            onCancel={(data) => onCancel(data)}
            onError={(data) => onError(data)}
            forceReRender={[packageData]}
        />
    )
}

export default PaypalPayment