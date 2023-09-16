'use client'

import { colleges, companies, incomes, professions, qualifications, worksWiths } from "@/staticData/InputFields/inputFields"
import { Button, Select } from "@mantine/core"
import { IconArrowNarrowRight } from '@tabler/icons-react';


const Step2 = ({ onNextStep, formValues, setFormValues, formErrors, setFormErrors }) => {

    const { qualification, worksWith, profession, income, college, company } = formValues;

    const validateForm = () => {
        const errors = {};

        if (!qualification) {
            errors.qualification = 'Qualification is required';
        }

        if (!college) {
            errors.college = 'College is required';
        }

        if (!company) {
            errors.company = 'Company is required';
        }

        if (!worksWith) {
            errors.worksWith = 'Works with is required';
        }

        if (!profession) {
            errors.profession = 'Profession is required';
        }

        if (!income) {
            errors.income = 'Income Status is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };

    const handleNextStep = () => {
        if (validateForm()) {
            // Call the parent component's callback with the formValues
            onNextStep(formValues);
        }
    };


    const handleFormChange = (name, value) => {
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    return (
        <div className="step1">

            <h2 className='text-center'>Education and Qualifications</h2>

            <Select
                size="md"
                placeholder="Select"
                label="Education qualification"
                data={qualifications}
                value={formValues.qualification}
                withAsterisk
                name="qualification"
                onChange={(event) => handleFormChange('qualification', event)}
                error={formErrors.qualification}
            />

            <br />

            {qualification && <>
                <Select
                    size="md"
                    placeholder="Select"
                    label="College"
                    data={colleges}
                    value={formValues.college}
                    withAsterisk
                    name="college"
                    onChange={(event) => handleFormChange('college', event)}
                    error={formErrors.college}
                />

                <br />
            </>}

            <Select
                size="md"
                placeholder="Select"
                label="Works with"
                // styles={{ label: labelStyles }}
                data={worksWiths}
                value={formValues.worksWith}
                withAsterisk
                name="worksWith"
                onChange={(event) => handleFormChange('worksWith', event)}
                error={formErrors.worksWith}
            />

            <br />

            <Select
                size="md"
                placeholder="Select"
                label="As"
                data={professions}
                value={formValues.profession}
                withAsterisk
                name="profession"
                onChange={(event) => handleFormChange('profession', event)}
                error={formErrors.profession}
            />

            <br />

            {profession && <>
                <Select
                    size="md"
                    placeholder="Select"
                    label="Company"
                    data={companies}
                    value={formValues.company}
                    withAsterisk
                    name="company"
                    onChange={(event) => handleFormChange('company', event)}
                    error={formErrors.company}
                />

                <br />
            </>}


            <Select
                size="md"
                placeholder="Select"
                label="Income Monthly"
                data={incomes}
                value={formValues.income}
                withAsterisk
                name="income"
                onChange={(event) => handleFormChange('income', event)}
                error={formErrors.income}
            />

            <br />

            <Button
                fullWidth
                // sx={{ width: '180px' }}
                size="md"
                type="submit"
                rightIcon={<IconArrowNarrowRight />}
                onClick={handleNextStep}
            >Continue</Button>

        </div>
    )
}

export default Step2;