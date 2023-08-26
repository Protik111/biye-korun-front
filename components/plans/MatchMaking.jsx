import { Anchor, Button } from "@mantine/core"
import { IconPhonePause } from "@tabler/icons-react"

const MatchMaking = () => {
    const features = [
        {
            id: 1,
            image: '/plans/advisor.svg',
            title: 'Dedicated Advisor'
        },
        {
            id: 2,
            image: '/plans/love.svg',
            title: 'Handipicked Matches'
        },
        {
            id: 3,
            image: '/plans/love-2.svg',
            title: 'Introduction and Meetings'
        },
        {
            id: 4,
            image: '/plans/advisor.svg',
            title: 'All Premium Benefits'
        },
    ]
    return (
        <div className="matchMaking container">
            <h2 className="text-center">A Personalised Matchmaking Service for Your</h2>

            <div className="matchMaking__features mt-15">
                {features?.map(ft => <div key={ft?.id} className="matchMaking__features--single">
                    <img src={ft?.image} alt={ft?.title} />
                    <h3>{ft?.title}</h3>
                </div>)}
            </div>

            <div className="matchMaking__package flex justify-center flex-gap-15 mt-30">
                <div className="matchMaking__package--single border-1 rounded-10">
                    <div className="top">
                        <h3 className="text-center">3 Months</h3>
                    </div>
                    <div className="details">
                        <h2>BDT 34,500</h2>
                        <p>BDT 11,600 per month</p>
                        <div className="flex justify-center py-15">
                            <Button variant="outline" color="red" radius="xl" size="sm">
                                Continue
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="matchMaking__package--single border-1 rounded-10">
                    <div className="top">
                        <h3 className="text-center">3 Months</h3>
                    </div>
                    <div className="details">
                        <h2>BDT 34,500</h2>
                        <p>BDT 11,600 per month</p>
                        <div className="flex justify-center py-15">
                            <Button variant="outline" color="red" radius="xl" size="sm">
                                Continue
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-15">
                <p>Need more information?</p>
                <div className="flex align-center justify-center">
                    <div className="mr-5">
                        <IconPhonePause size={16} color="#657ED9"></IconPhonePause>
                    </div>
                    <Anchor href="https://mantine.dev/" target="_blank">Request a free biye consultation</Anchor>

                </div>
            </div>
        </div>
    )
}

export default MatchMaking