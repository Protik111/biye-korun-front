import { Button } from "@mantine/core"
import BasicInformation from "./BasicInformation"
import Communities from "./Communities"
import Education from "./Education"
import Location from "./Location"
import { btnBackground } from "@/styles/library/mantine"
import { IconCaretDown } from "@tabler/icons-react"
import { useState } from "react"

// Define the minimum and maximum heights in inches
const minHeightInches = 58; // 4' 10'' in inches
const maxHeightInches = 83; // 6' 11'' in inches

const PartnerPreference = () => {
    const [seeMore, setSeemore] = useState(false);
    const [formData, setFormData] = useState({
        ages: [18, 25],
        height: '',
        maritalStatus: '',
        religion: '',
        motherTongue: '',
        livingIn: '',
        residency: '',
        qualification: '',
        workingWith: '',
        profession: '',
        income: ''
    })
    const [minHeight, setMinHeight] = useState(minHeightInches);
    const [maxHeight, setMaxHeight] = useState(maxHeightInches);

    console.log('minHeight', minHeight, maxHeight);

    return (
        <div className='partenerPref'>
            <h2 className='text-center py-15'>Recommended Partner Preferences</h2>

            <BasicInformation formData={formData} setFormData={setFormData} minHeight={minHeight} setMinHeight={setMinHeight} maxHeight={maxHeight} setMaxHeight={setMaxHeight}></BasicInformation>
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