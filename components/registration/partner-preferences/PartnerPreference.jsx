import { Button } from "@mantine/core"
import BasicInformation from "./BasicInformation"
import Communities from "./Communities"
import Education from "./Education"
import Location from "./Location"
import { btnBackground } from "@/styles/library/mantine"
import { IconCaretDown } from "@tabler/icons-react"
import { useState } from "react"

const PartnerPreference = () => {
    const [seeMore, setSeemore] = useState(false);
    return (
        <div className='partenerPref'>
            <h2 className='text-center py-15'>Recommended Partner Preferences</h2>

            <BasicInformation></BasicInformation>
            <Communities></Communities>
            <Location></Location>

            {!seeMore && <div className="flex justify-center mt-30">
                <Button
                    rightIcon={<IconCaretDown />}
                    variant="light"
                    onClick={() => setSeemore(true)}
                    size="md">
                    See More
                </Button>
            </div>}

            {seeMore ? <Education></Education> : <></>}

            <div className="flex justify-center mt-30">
                <Button
                    style={btnBackground} size="md">
                    Save & Continue
                </Button>
            </div>
        </div>
    )
}

export default PartnerPreference