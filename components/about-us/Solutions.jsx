const solutionsData = [
    {
        id: 1,
        title: 'Unique Selling Point',
        images: 'services/solutions/payment-method.png',
        desc: "What sets BiyeKorun apart is its rigorous verification process. Users need to provide various documents like birth certificates, passports, job letters, and educational certificates. Furthermore, profiles can be endorsed by family and friends, ensuring a comprehensive validation process. A five-star rating indicates a fully verified profile, offering other users confidence in the profile's authenticity."
    },
    {
        id: 2,
        title: 'Interactions and Engagement',
        images: 'services/solutions/interaction.png',
        desc: "BiyeKorun's feed will showcase user activities such as profile verifications, engagement announcements, and marriage dates. Users can also share their success stories and tips for potential matches. The platform will employ tags, enabling users to sift through information quickly."
    },
    {
        id: 3,
        title: 'Chat Features',
        images: 'services/solutions/chat-bubble.png',
        desc: "Voice Call: Users can engage in direct voice calls. Video Call: Video calls facilitate face-to-face interactions. Text Chat: Users can send and receive text messages. Voice Message: Users can exchange voice messages. Depending on the subscription model, users can access various chat functionalities. The platform emphasizes user safety by discouraging the sharing of personal information. Chat groups cater to diverse categories like marital status, religion, profession, income, and more, allowing users to find matches based on specific criteria."
    },
    {
        id: 4,
        title: 'Fund Raise Features',
        images: 'services/solutions/funding.png',
        desc: "BiyeKorun goes a step further by offering a fundraising feature. Users can raise funds for their weddings, honeymoons, or even baby showers. After providing details about the event, users can set a fundraising target. Once the goal is reached, the funds will be transferred to the user's bank account, with BiyeKorun charging a nominal fee. BiyeKorun isn't just a matrimonial platform; it's a comprehensive ecosystem designed to facilitate genuine connections and provide support at every step of a user's marital journey."
    }
]

const Solutions = () => {
    return (
        <div className="solution_service_container container">
            <h2 className="text-center">Our Specialty</h2>
            <div className="single_solution_container">
                {
                    solutionsData?.map(sn => <div key={sn.id} className="single_solution">
                        <div className="single_image">
                            <img src={sn?.images} alt={sn?.title}></img>
                        </div>
                        <div className="details">
                            <h2>{sn?.title}</h2>
                            <div className="hr"></div>
                            <p>{sn?.desc}</p>
                            {/* {sn?.link && <p>Click To Learn: <Link href={sn?.link} passHref>
                                <a target="_blank" rel="noopener noreferrer" href={sn?.link}>{sn?.link}</a>
                            </Link></p>} */}
                        </div>
                        {/* <div className="btn_details">
                            <button onClick={() => window.open('https://ts4u.us/channel-invitation/630f1b9cdf3084f0a36258e9', '_blank')}>Contact us instantly for more details</button>
                        </div> */}
                    </div>)
                }
            </div>
        </div>
    );
};

export default Solutions;