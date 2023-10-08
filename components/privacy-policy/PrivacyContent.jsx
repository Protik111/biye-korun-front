"use client"
import { Alert, List } from "@mantine/core"
import { IconInfoCircle } from "@tabler/icons-react";

const PrivacyContent = () => {
    const contents = [{
        title: 'Information Collection by Biyekorun.us',
        link: '#information'
    },
    {
        title: "Information Submitted Voluntarily by You",
        link: "#submitted"
    },
    {
        title: "Information Indirectly Provided by You",
        link: "#provided"
    },
    {
        title: "Information Obtained from Third Parties",
        link: "#Obtained"
    },
    {
        title: "Utilization of Collected Information",
        link: "#Collected"
    },
    {
        title: "Information Sharing",
        link: "#Sharing"
    },
    {
        title: "Managing Your Information",
        link: "#Managing"
    },
    {
        title: "Security Measures",
        link: "#Security"
    },
    {
        title: "Data Retention",
        link: "#Data"
    },
    {
        title: "Cookies and Tracking",
        link: "#Cookies"
    },
    {
        title: "International Data Transfers",
        link: "#International"
    },
    {
        title: "Updates to Privacy Policy",
        link: "#Privacy"
    }
    ]

    const icon = <IconInfoCircle />;

    return (
        <div className='privacyContent container'>
            <div>
                <h1 className="text-center">Privacy Policy</h1>
            </div>

            <div className="w-75 m-auto mt-25">
                <h4>Your Privacy Matters</h4>
                <p className="">Your privacy matters deeply to us. This policy aims to elucidate how we handle, collect, and share your personal information.

                </p>
            </div>

            <div className="w-75 m-auto mt-25">
                <h4>Table of Contents</h4>
                <div className="all_contents">
                    {contents?.map((content, i) => (
                        <ul key={i}>
                            <li><a href={content?.link}>{content?.title}</a></li>
                        </ul>
                    ))}
                </div>
            </div>

            <div id="information" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>1. Information Collection by Biyekorun.us</h4>
                </Alert>
                <p className="mt-10 px-15">
                    Biyekorun.us operates as a matchmaking platform, providing targeted advertising services. To access our services, members must submit specific personal information showcased on the website to assist in finding an ideal match. Our services collect, process, and share your information with other members, and by using our services, you consent to this.
                </p>
            </div>

            <div id='submitted' className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>2. Information Submitted Voluntarily by You</h4>
                </Alert>
                <p className="mt-10 px-15">
                    <List>
                        <List.Item>Details during registration such as name, gender, DOB, contact details, educational background, employment details, photos, marital status, interests, and sensitive information like identity proofs</List.Item>

                        <List.Item>Payment details when opting for a paid service, including bank account, credit/debit card number, or UPI.</List.Item>

                        <List.Item>Testimonials, success stories, and associated photographs.</List.Item>

                        <List.Item>Responses to surveys, contests, promotions, or events.</List.Item>

                        <List.Item>Interactions with our customer support</List.Item>
                        <List.Item>Sharing profiles through WhatsApp.</List.Item>
                        <List.Item>Your chats, messages, and published content are on our platform</List.Item>
                    </List>
                </p>
            </div>

            <div id="provided" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>3. Information Indirectly Provided by You</h4>
                </Alert>
                <p className="mt-10 px-15">
                    <List>
                        <List.Item>User activities like login time, features used, searches, page visits, and interactions with other users.</List.Item>

                        <List.Item>Device-related data include IP address, device ID, browser type, OS, and other identifiers.</List.Item>
                    </List>
                </p>
            </div>

            <div id="Obtained" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>4. Information Obtained from Third Parties</h4>
                </Alert>
                <p className="mt-10 px-15">
                    <List>
                        <List.Item>User activities like login time, features used, searches, page visits, and interactions with other users.</List.Item>

                        <List.Item>Device-related data include IP address, device ID, browser type, OS, and other identifiers.</List.Item>
                    </List>
                </p>
            </div>

            <div id="Collected" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>5. Utilization of Collected Information</h4>
                </Alert>
                <p className="mt-10 px-15">
                    We use the gathered information to:
                    <List>
                        <List.Item>Deliver our service.</List.Item>

                        <List.Item>Manage your account and provide customer support.</List.Item>

                        <List.Item>Analyze user behavior using AI and ML for service enhancement.</List.Item>

                        <List.Item>Communicate about services, promotions, or offers of potential interest.</List.Item>

                        <List.Item>Recommend suitable matches and display your profile to other users.</List.Item>
                    </List>
                </p>
            </div>

            <div id="Sharing" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>6. Information Sharing</h4>
                </Alert>
                <p className="mt-10 px-15">
                    Except as described in this policy or explicitly mentioned on our website, your personal information isn't sold, rented, traded, or given away.

                    <List>
                        <List.Item><b>With other users:</b> Your information is shared with other users to provide our service. Always be aware of the data you share. You can visit the "Settings/Privacy Options" page to adjust your privacy settings.</List.Item>

                        <List.Item><b>With our service providers and partners:</b> Third-party service providers might require access to your information to facilitate our services. They are strictly bound by confidentiality and data protection obligations.</List.Item>

                        <List.Item><b>With legal entities: </b>We might disclose information if needed by law or to protect our rights and comply with legal proceedings.</List.Item>

                    </List>
                </p>
            </div>

            <div id="Managing" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>7. Managing Your Information</h4>
                </Alert>
                <p className="mt-10 px-15">
                    Tools are provided to manage, access, and update your information. EU, UK, and California users have additional rights, such as reviewing their data, deleting, or objecting to its processing. To fulfill certain requests, proof of identity may be required.
                </p>
            </div>

            <div id="Security" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>8. Security Measures</h4>
                </Alert>
                <p className="mt-10 px-15">
                    While we have robust safeguards to protect your data, no system is entirely secure. We utilize industry-standard protection mechanisms but cannot guarantee absolute security.
                </p>
            </div>

            <div id="Data" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>9. Data Retention</h4>
                </Alert>
                <p className="mt-10 px-15">
                    Your data is retained as long as you use our services and as applicable laws mandate. Upon account deletion, we anonymize or delete your data unless required for legal reasons or service enhancement.
                </p>
            </div>

            <div id="Cookies" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>10. Cookies and Tracking</h4>
                </Alert>
                <p className="mt-10 px-15">
                    Both we and our third-party partners use technologies like cookies and web beacons for data collection. Our Cookie Policy offers more insight into this.
                </p>
            </div>

            <div id="International" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>11. International Data Transfers</h4>
                </Alert>
                <p className="mt-10 px-15">
                    Primarily, data is stored in the USA. For service provision, it might be transferred and processed in other countries. We ensure adequate protection measures in these transfers.
                </p>
            </div>

            <div id="Privacy" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>12. Updates to Privacy Policys</h4>
                </Alert>
                <p className="mt-10 px-15">
                    Any significant change to our privacy policy will be communicated via email. This ensures you're always informed about how we manage your data.
                </p>
            </div>
        </div>
    )
}

export default PrivacyContent