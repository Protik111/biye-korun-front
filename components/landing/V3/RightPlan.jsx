import React from 'react'
const list1 = [
    "Search Profile",
    "Shortlist & Send Request",
    "View Photo Album",
    "3 Chat & Messaging",
    "7 Priority Likes",
    "2 Boost Profile",
    "24/7 Customer Support"
]

const list2 = [
    "Search Profile",
    "Shortlist & Send Request",
    "View Photo Album",
    "Chat & Messaging",
    "View Contact Information",
    "Priority Likes",
    "Boost Profile",
    "Group Chat",
    "Blue Mark",
    "24/7 Customer Support"
]

const RightPlan = () => {
    return (
        <div className='rightPlan container'>
            <h1 className='text-center heading1V3'>Choose The Right Plan</h1>
            <div className='w-25 m-auto p-15'>
                <hr />
            </div>

            <div className='rightPlan__wrapper'>
                <div className='rightPlan__wrapper-item'>
                    <h3 className='text-center heading3V3'>Monthly Subscription</h3>
                    <div className='flex justify-center flex-gap-10 align-center mt-15'>
                        <h3 className='heading3V3'>BDT 0.00</h3>
                        <p className='paragraphV3'>/per month</p>
                    </div>

                    <div className='list-container'>
                        <div className='flex justify-between free'>
                            <h4 className='heading4V3'>Free</h4>
                            <p className='paragraphV3'>Limited</p>
                        </div>

                        <div className='lists'>
                            {
                                list1?.map((item, i) => <div className='flex align-center flex-gap-15 mt-10'>
                                    <img src="/V3/landing/icon/check.svg" loading='lazy' alt="icon" />
                                    <p>{item}</p>
                                </div>)
                            }
                        </div>
                    </div>

                    <div>
                        <button>Sign Up For Free</button>
                    </div>
                </div>

                <div className='rightPlan__wrapper-item rightPlan__wrapper-item-middle'>
                    <h3 className='text-center heading3V3'>Monthly Subscription</h3>
                    <div className='flex justify-center flex-gap-10 align-center mt-15'>
                        <h3 className='heading3V3'>BDT 5000</h3>
                        <p className='paragraphV3'>/per month</p>
                    </div>

                    <div className='list-container'>
                        <div className='flex justify-center free'>
                            <h4 className='headingV4'>Silver</h4>
                        </div>

                        <div className='lists'>
                            {
                                list2?.map((item, i) => <div className='flex align-center flex-gap-15 mt-10'>
                                    <img src="/V3/landing/icon/check-2.svg" loading='lazy' alt="icon" />
                                    <p>{item}</p>
                                </div>)
                            }
                        </div>
                    </div>

                    <div>
                        <button>Subscribe Now</button>
                    </div>
                </div>


                <div className='rightPlan__wrapper-item'>
                    <h3 className='text-center heading3V3'>Monthly Subscription</h3>
                    <div className='flex justify-center flex-gap-10 align-center mt-15'>
                        <h3 className='heading3V3'>BDT 7667</h3>
                        <p className='paragraphV3'>/per month</p>
                    </div>

                    <div className='list-container'>
                        <div className='flex justify-center free'>
                            <h4 className='text-center heading4V3'>Plantinum Gold</h4>
                        </div>

                        <div className='lists'>
                            {
                                list2?.map((item, i) => <div className='flex align-center flex-gap-15 mt-10'>
                                    <img src="/V3/landing/icon/check.svg" loading='lazy' alt="icon" />
                                    <p>{item}</p>
                                </div>)
                            }
                        </div>
                    </div>

                    <div>
                        <button>Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightPlan