"use client"
import { Alert, List } from "@mantine/core"
import { IconInfoCircle } from "@tabler/icons-react";

const TermsCondition = () => {
    const contents = [{
        title: 'Platform Overview',
        link: '#Platform'
    },
    {
        title: "User Agreement & Membership",
        link: "#Agreement"
    },
    {
        title: "Eligibility Criteria",
        link: "#Eligibility"
    },
    {
        title: "Account Security & Management",
        link: "#Account"
    },
    {
        title: "Membership Termination",
        link: "#Membership"
    },
    {
        title: "Usage Policy & Conduct",
        link: "#Usage"
    },
    {
        title: "Safety, Security, & Interactions",
        link: "#Safety"
    }
    ]

    const icon = <IconInfoCircle />;

    return (
        <div className='privacyContent container'>
            <div>
                <h1 className="text-center">Terms & Conditions</h1>
            </div>

            <div className="w-75 m-auto mt-25">
                <h4>Terms & Conditions for Biyekorun</h4>
                <p className="">Welcome to biyekorun.us, the premier online matrimonial platform dedicated to bringing individuals together for the sacred bond of marriage. When accessing or using our platform, users are expected to comply with the terms outlined in this document. As our commitment is to provide a seamless experience, we might occasionally update these terms. Users are encouraged to review this section frequently to stay updated.

                    Our guidelines are in alignment with the Information Technology (Intermediaries Guidelines and Digital Media Ethics Code) Rules, 2021.
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

            <div id='Platform' className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>1. Platform Overview</h4>
                </Alert>
                <p className="mt-10 px-15">
                    <List>
                        <List.Item><b>Nature:</b> Biyekorun.us is a modern-day digital matchmaking platform, designed to serve as a comprehensive alternative to traditional newspaper matrimonial advertisements.</List.Item>

                        <List.Item><b>Objective:</b> Our platform caters exclusively to individuals genuinely seeking lasting marriage alliances. We emphasize that biyekorun.us is not a venue for casual dating, flings, or commercial solicitations.</List.Item>

                        <List.Item><b>Access and Membership:</b> General access to our platform is complimentary. However, for those looking to maximize their outreach and benefits, we offer a tiered premium membership with an array of enhanced features.</List.Item>
                    </List>
                </p>
            </div>

            <div id="Agreement" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>2. User Agreement & Membership</h4>
                </Alert>
                <p className="mt-10 px-15">
                    <List>
                        <List.Item><b>Registration:</b> Utilizing the full range of services on biyekorun.us necessitates registration. By registering, you become a "Member" and automatically agree to abide by this agreement.</List.Item>

                        <List.Item><b>Data Sharing and Privacy:</b> As a member, you'll be required to provide certain personal details. We prioritize your privacy, but we also stress the importance of accuracy, truthfulness, and authenticity in the information shared. Should you be hesitant or uncomfortable sharing particular details, we recommend reconsidering registration.</List.Item>
                    </List>
                </p>
            </div>

            <div id="Eligibility" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>3. Eligibility Criteria</h4>
                </Alert>
                <p className="mt-10 px-15">
                    <List>
                        <List.Item><b>Age Requirement:</b> Members should meet or exceed the legal marriageable age as determined by U.S. law.</List.Item>

                        <List.Item><b>Intention</b>: Biyekorun.us is crafted for individuals with a genuine interest in finding a life partner. Usage for casual relationships, financial gains, or any commercial endeavors is strictly prohibited and may result in account suspension or termination.</List.Item>
                    </List>
                </p>
            </div>

            <div id="Account" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>4. Account Security & Management</h4>
                </Alert>
                <p className="mt-10 px-15">
                    <List>
                        <List.Item><b>Protection:</b> Members are wholly responsible for safeguarding their login credentials. Any suspicious or unauthorized activity should be reported without delay.</List.Item>

                        <List.Item><b>Activity Monitoring:</b> Biyekorun.us may occasionally review user activities to ensure community standards are maintained.</List.Item>
                    </List>
                </p>
            </div>

            <div id="Membership" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>5. Membership Termination</h4>
                </Alert>
                <p className="mt-10 px-15">

                    <List>
                        <List.Item><b>User-Initiated:</b> Members can opt for account termination at their discretion. In certain cases, refunds for any unused subscription fees may be processed.</List.Item>

                        <List.Item><b> Platform Initiated:</b> Biyekorun.us holds the right to suspend or terminate accounts that violate platform guidelines, misuse the service, or are involved in prohibited activities.</List.Item>

                    </List>
                </p>
            </div>

            <div id="Usage" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>6. Usage Policy & Conduct</h4>
                </Alert>
                <p className="mt-10 px-15">

                    <List>
                        <List.Item><b>Restrictions:</b> Engaging in commercial activities, promoting unauthorized links, or redirecting traffic away from biyekorun.us is strictly forbidden.</List.Item>

                        <List.Item><b> Communication:</b> By registering, members automatically provide consent to receive various communications from biyekorun.us, including but not limited to verifications, service-related updates, promotional offers, and more.</List.Item>

                        <List.Item><b>Profile Authenticity:</b> Creating duplicate profiles or presenting false information goes against our guidelines. Biyekorun.us has a zero-tolerance policy for impersonation or deception.</List.Item>

                    </List>
                </p>
            </div>

            <div id="Safety" className="w-75 m-auto mt-25">
                <Alert variant="light" color="indigo">
                    <h4>7. Safety, Security, & Interactions</h4>
                </Alert>
                <p className="mt-10 px-15">

                    <List>
                        <List.Item><b>Trust Enhancements:</b>To foster a trustworthy environment, members can choose to verify their accounts by submitting government-issued identity documents.</List.Item>

                        <List.Item><b>Prohibited Actions:</b> Sending unsolicited messages, chain letters, or any form of spam to other members is strictly prohibited and may lead to account penalties.</List.Item>

                        <List.Item><b>Interactions:</b> Whether it's text chat, voice calls, or video interactions, members are expected to maintain respect, courtesy, and professionalism.</List.Item>

                    </List>
                </p>
            </div>


        </div>
    )
}

export default TermsCondition;