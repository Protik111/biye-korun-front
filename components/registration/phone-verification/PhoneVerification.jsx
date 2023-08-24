import { btnBackground, selectMobileStyles } from "@/styles/library/mantine"
import { Anchor, Button, TextInput } from "@mantine/core"

const cards = [
    {
        id: 1,
        title: '100% phone privacy',
        url: '/verification/privacy.svg',
        desc: 'option available'
    },
    {
        id: 2,
        title: 'Your device',
        url: '/verification/search-file.svg',
        desc: 'who views your number'
    },
    {
        id: 3,
        title: '100% phone privacy',
        url: '/verification/phone.svg',
        desc: 'will never be shared with 3rd parties'
    },
]
const PhoneVerification = () => {
    return (
        <div className='phoneVerification'>
            <h2 className='text-center py-15'>Phone Verification</h2>

            <div className="mt-30">
                <div className="box-shadow rounded-10 p-30 mt-15 w-75 m-auto">
                    <p className="text-center">We have sent a 6 digit PIN to your mobile via SMS/Text Message</p>

                    <div className="flex flex-gap-15 justify-center mt-20">
                        <TextInput
                            // label="Your Email"
                            placeholder="Enter PIN number"
                            size="md"
                            name="pin"
                        // value={data.basic2email}
                        // onChange={(event) => handleChange('basic2email', event.target.value)}
                        // error={fieldErrors.basic2email}

                        />

                        <Button
                            style={btnBackground}
                            size="md"
                            sx={selectMobileStyles}
                        // onClick={() => setModalOpen(true)}
                        >
                            Verify
                        </Button>
                    </div>

                    <div className="text-center mt-15">
                        <p className="small-text">Didn't get your PIN? <Anchor href="/registration/phone-verification" target="_blank">
                            Re-send PIN
                        </Anchor> to my mobile +8801630697009</p>
                    </div>
                </div>
            </div>

            <div className="phoneVerification__cards grid grid-cols-3">
                {
                    cards?.map((card, i) => <div className="phoneVerification__cards--card flex flex-column justify-center align-center rounded-15 border-1-secondary" key={card?.id}>
                        <img className="phoneVerification__cards--card--img" src={card?.url} alt={card?.title}></img>
                        <h3 className="phoneVerification__cards--card--title">{card?.title}</h3>
                        <p>{card?.desc}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default PhoneVerification