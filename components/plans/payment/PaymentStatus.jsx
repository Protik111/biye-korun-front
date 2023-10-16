import { useParams, useSearchParams } from "next/navigation"

const PaymentStatus = () => {
    const params = useParams();
    const search = useSearchParams();

    // console.log('params', params.status);
    const queryParam = search.get('id');

    return (
        <div className='plansheroV2 min-vh-100'>
            <div className="container">
                {params?.status === 'success' ? <div>
                    <div className='payment-status flex justify-center'>
                        <img src="/payment/payment-success.svg" alt="success" />
                    </div>
                    <h2 className="text-center text-white-light">Your payment was successful!</h2>
                    <p style={{ color: 'white' }} className='text-center mt-10'>Your transacion Id: #{queryParam}</p>
                </div> :
                    params?.status === 'fail' ? <div>
                        <div className='payment-status flex justify-center'>
                            <img src="/payment/payment-failure.svg" alt="fail" />
                        </div>
                        <h2 className="text-center text-white-light">Your payment was not successful!</h2>
                        <p style={{ color: 'white' }} className='text-center mt-10'>Your transacion Id: #{queryParam}</p>
                    </div> :
                        params?.status === 'cancel' ? <div>
                            <div className='payment-status flex justify-center'>
                                <img src="/payment/payment-failure.svg" alt="cancel" />
                            </div>
                            <h2 className="text-center text-white-light">Your payment was cancelled!</h2>
                            <p style={{ color: 'white' }} className='text-center mt-10'>Your transacion Id: #{queryParam}</p>
                        </div> : <></>
                }
            </div>
        </div>
    )
}

export default PaymentStatus