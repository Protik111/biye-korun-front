"use client"
import PaymentHero from "@/components/plans/payment/PaymentHero"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const page = () => {
    const initialOptions = {
        clientId: "AQ__BQbYyOTxhq16IctWBVA8bU-f7rkUHnEGLf8GOdHcy12o-BcjmV2vDBn_I15Sdr5reTDhXmQ-H01w",
        currency: "USD",
        intent: "capture",
    };

    return (
        <PayPalScriptProvider options={initialOptions}>
            <div className='plans'>
                <PaymentHero></PaymentHero>
            </div>
        </PayPalScriptProvider>

    )
}

export default page