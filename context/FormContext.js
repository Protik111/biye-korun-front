import { generate18YearBefore } from "@/utils/generate18YearBefore"
import { isStrongPassword } from "@/utils/isFunctionStrong"
import { createContext, useState, useEffect } from "react"

const FormContext = createContext({})

export const FormProvider = ({ children }) => {
    const title = {
        0: 'Basic 1',
        1: 'Basic 2',
    }

    const [page, setPage] = useState(0)
    const [fieldErrors, setFieldErrors] = useState({});

    const [data, setData] = useState({

        basic1postedBy: '',
        basic1firstName: '',
        basic1lastName: '',
        basic1gender: '',
        basic1religion: '',
        basic1community: '',
        basic2email: '',
        basic2password: '',
        basic2dob: new Date(generate18YearBefore()),
        basic2country: '',
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


    const validatePage = (page) => {
        const pageData = Object.keys(data)
            .filter((key) => key.startsWith(`basic${page + 1}`))
            .reduce((pageData, key) => {
                pageData[key] = data[key];
                return pageData;
            }, {});

        const errors = {};


        //basic1 validation
        if (page === 0) {
            if (!pageData.basic1postedBy) {
                errors.basic1postedBy = 'Please select a profile';
            }
            if (!pageData.basic1firstName) {
                errors.basic1firstName = 'First name is required';
            }
            if (!pageData.basic1lastName) {
                errors.basic1lastName = 'Last name is required';
            }
            if (!pageData.basic1gender) {
                errors.basic1gender = 'Please select a gender';
            }
            if (!pageData.basic1religion) {
                errors.basic1religion = 'Please select a religion';
            }
            if (!pageData.basic1community) {
                errors.basic1community = 'Please select a community';
            }
        }

        //email regex
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //basic2 validation
        if (page === 1) {

            if (!pageData.basic2email) {
                errors.basic2email = 'Email is required';
            }
            if (pageData.basic2email && !emailRegex.test(pageData.basic2email)) {
                errors.basic2email = 'Invalid email address';
            }
            if (!pageData.basic2password) {
                errors.basic2password = 'Password is required';
            }
            if (pageData.basic2password) {
                const passwordError = isStrongPassword(pageData.basic2password)
                if (passwordError) {
                    errors.basic2password = passwordError;
                }
            }
            if (!pageData.basic2dob) {
                errors.basic2dob = 'Choose you date of birth';
            }
            if (!pageData.basic2country) {
                errors.basic2country = 'Please select a country';
            }
        }

        setFieldErrors(errors);

        // Return true if there are no errors
        return Object.keys(errors).length === 0;
    };

    const handleChange = (name, value) => {
        setData((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    const {
        community,
        ...requiredInputs
    } = data

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const canNextPage1 = Object.keys(data)
        .filter(key => key.startsWith('basic1') && key !== 'community')
        .map(key => data[key])
        .every(Boolean)

    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('basic2'))
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
        <FormContext.Provider value={{ title, page, setPage, data, setData, canSubmit, handleChange, disablePrev, disableNext, prevHide, nextHide, submitHide, validatePage, fieldErrors }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext