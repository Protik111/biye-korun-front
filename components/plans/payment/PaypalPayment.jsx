import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { configureAxiosHeader } from '@/utils/setAxiosHeader';
import { notifyError } from '@/utils/showNotification';

const PaypalPayment = (props) => {

    const { packageData } = props;

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
            console.log("Prev Data", data, "response", response.data)
            return response.data
        } catch (error) {
            console.log(error)
            notifyError(error.message)
        }
    };

    return (
        <PayPalButtons
            createOrder={(data) => createOrder(data)}
            onApprove={(data) => onApprove(data)}
            forceReRender={[packageData]}
        />
    )
}

export default PaypalPayment