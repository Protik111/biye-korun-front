import { createContext, useState, useEffect } from "react"

const FormContext = createContext({})

export const FormProvider = ({ children }) => {
    const title = {
        // 0: 'Billing Info',
        // 1: 'Shipping Info',
        // 2: 'Opt-In'
        0: 'Basic 1',
        1: 'Basic 2',
    }

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        // billFirstName: "",
        // billLastName: "",
        // billAddress1: "",
        // billAddress2: "",
        // billCity: "",
        // billState: "",
        // billZipCode: "",
        // sameAsBilling: false,
        // shipFirstName: "",
        // shipLastName: "",
        // shipAddress1: "",
        // shipAddress2: "",
        // shipCity: "",
        // shipState: "",
        // shipZipCode: "",
        // optInNews: false

        postedBy: '',
        firstName: '',
        lastName: '',
        gender: '',
        religion: '',
        community: ''
    })

    // const handleChange = e => {
    //     const type = e.target.type

    //     const name = e.target.name

    //     const value = type === "checkbox"
    //         ? e.target.checked
    //         : e.target.value

    //     setData(prevData => ({
    //         ...prevData,
    //         [name]: value
    //     }))
    // }

    const handleChange = (name, value) => {
        setData((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    const {
        billAddress2,
        sameAsBilling,
        shipAddress2,
        optInNews,
        ...requiredInputs } = data

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const canNextPage1 = Object.keys(data)
        .filter(key => key.startsWith('bill') && key !== 'billAddress2')
        .map(key => data[key])
        .every(Boolean)

    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('ship') && key !== 'shipAddress2')
        .map(key => data[key])
        .every(Boolean)

    const disablePrev = page === 0

    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)
        || (page === 1 && !canNextPage2)

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    return (
        <FormContext.Provider value={{ title, page, setPage, data, setData, canSubmit, handleChange, disablePrev, disableNext, prevHide, nextHide, submitHide }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext