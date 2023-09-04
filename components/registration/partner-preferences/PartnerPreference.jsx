import { Button } from "@mantine/core"
import BasicInformation from "./BasicInformation"
import Communities from "./Communities"
import Education from "./Education"
import Location from "./Location"
import { btnBackground } from "@/styles/library/mantine"
import { IconCaretDown } from "@tabler/icons-react"
import { useState } from "react"
import { notifyError, notifySuccess } from "@/utils/showNotification"
import axios from "axios"
import { useRouter } from "next/navigation"

// Define the minimum and maximum heights in inches
const minHeightInches = 58; // 4' 10'' in inches
const maxHeightInches = 83; // 6' 11'' in inches

// Define the minimum and maximum income values
const minIncome = 10000; // 10000 BDT
const maxIncome = 200000; // 200,000 BDT

const PartnerPreference = () => {
    const [seeMore, setSeemore] = useState(false);
    const [formData, setFormData] = useState({
        ages: [18, 25],
        height: '',
        maritalStatus: '',
        religion: '',
        motherTongue: '',
        livingIn: '',
        stateLiving: '',
        residency: '',
        qualification: '',
        workingWith: '',
        profession: '',
        income: ''
    })
    const [minHeight, setMinHeight] = useState(minHeightInches);
    const [maxHeight, setMaxHeight] = useState(maxHeightInches);

    // Initial income range values
    const [minIncomeValue, setMinIncomeValue] = useState(minIncome);
    const [maxIncomeValue, setMaxIncomeValue] = useState(maxIncome);
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    // console.log('formDatas', formData);
    // console.log('height', minHeight, maxHeight);
    // console.log('maxIncomeValue', maxIncomeValue, minIncomeValue);

    const handleSave = () => {
        const { ages, maritalStatus, religion, motherTongue, livingIn, stateLiving, residency, qualification, workingWith, profession,
            income } = formData

        const data = {
            minAge: ages[0].toString(),
            maxAge: ages[1].toString(),
            minHeight: minHeight.toString(),
            maxHeight: maxHeight.toString(),
            maritalStatus: maritalStatus,
            religion,
            community: "Muslim",
            motherTongue,
            country: livingIn,
            stateLiving,
            residencyStatus: residency,
            qualification,
            workingWith,
            profession,
            minIncome: minIncomeValue.toString(),
            maxIncome: maxIncomeValue.toString(),
        }
        setLoading(true)
        axios.patch('user/partner-preferences', data)
            .then(res => {
                notifySuccess('Preferences are added successfully!')
                setLoading(false)
                setTimeout(() => {
                    router.push('/matches')
                }, 1000)
            })
            .catch(err => {
                setLoading(false)
                // console.log(err.response.data);
                notifyError(err.response.data.message)
            })
    }

    return (
        <div className='partenerPref'>
            <h2 className='text-center py-15'>Recommended Partner Preferences</h2>

            <BasicInformation formData={formData} setFormData={setFormData} minHeight={minHeight} setMinHeight={setMinHeight} maxHeight={maxHeight} setMaxHeight={setMaxHeight}></BasicInformation>
            <Communities formData={formData} setFormData={setFormData}></Communities>
            <Location formData={formData} setFormData={setFormData}></Location>

            {!seeMore && <div className="flex justify-center mt-30">
                <Button
                    rightIcon={<IconCaretDown />}
                    variant="light"
                    onClick={() => setSeemore(true)}
                    size="md">
                    See More
                </Button>
            </div>}

            {seeMore ? <Education formData={formData} setFormData={setFormData} minIncomeValue={minIncomeValue} setMinIncomeValue={setMinIncomeValue} maxIncomeValue={maxIncomeValue} setMaxIncomeValue={setMaxIncomeValue}></Education> : <></>}

            <div className="flex justify-center mt-30">
                <Button
                    disabled={loading}
                    onClick={() => handleSave()}
                    style={btnBackground} size="md">
                    Save & Continue
                </Button>
            </div>
        </div>
    )
}

export default PartnerPreference