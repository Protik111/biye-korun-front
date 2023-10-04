import { communities, profileFor, religions } from "@/staticData/InputFields/inputFields"
import { btnBackground } from "@/styles/library/mantine"
import { Button, Group, Input, Radio, Select, TextInput } from "@mantine/core"
import { useState } from "react"

const MultistepRegistration = () => {
    const [formValues, setFormValues] = useState({
        postedBy: '',
        firstName: '',
        lastName: '',
        gender: '',
        religion: '',
        community: ''
    });

    const [formErrors, setFormErrors] = useState({
        postedBy: '',
        firstName: '',
        lastName: '',
        gender: '',
        religion: '',
        community: ''
    });

    const validateForm = () => {
        const errors = {};

        if (!formValues.postedBy) {
            errors.postedBy = 'Please select a profile';
        }
        if (!formValues.firstName) {
            errors.firstName = 'First name is required';
        }
        if (!formValues.lastName) {
            errors.lastName = 'Last name is required';
        }
        if (!formValues.gender) {
            errors.gender = 'Please select a gender';
        }
        if (!formValues.religion) {
            errors.religion = 'Please select a religion';
        }
        if (!formValues.community) {
            errors.community = 'Please select a community';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };


    const handleFormChange = (name, value) => {
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));

        // if(name === "basic1postedBy") {
        //     setFormValues((prevFormValues) => ({
        //         ...prevFormValues,
        //         ['gender']: value,
        //     }));
        // }
    };

    const handleFormSubmit = () => {
        if (validateForm()) {
            // Proceed with form submission
            console.log('Form submitted:', formValues);
        }
    };

    console.log('formValues', formValues);

    return (
        <div className="mutlistep__registration px-15">
            <Select
                size="md"
                placeholder="Select"
                label="Profile for"
                // styles={{ label: labelStyles }}
                data={profileFor}
                value={formValues.postedBy}
                withAsterisk
                name="postedBy"
                onChange={(event) => handleFormChange('postedBy', event)}
                error={formErrors.postedBy}
            />

            <br />

            <div className="flex flex-gap-10">
                <TextInput
                    label="Your First Name"
                    placeholder="First name"
                    size="md"
                    withAsterisk
                    name="firstName"
                    onChange={(event) => handleFormChange('firstName', event.target.value)}
                    error={formErrors.firstName}

                />

                <TextInput
                    // style={{ display: 'flex', alignSelf: 'flex-end' }}
                    label="Your Last Name"
                    placeholder="Last name"
                    size="md"
                    withAsterisk
                    name="lastName"
                    onChange={(event) => handleFormChange('lastName', event.target.value)}
                    error={formErrors.lastName}

                />
            </div>

            <br />

            <Radio.Group
                label="Gender"
                withAsterisk
                name="gender"
                onChange={(event) => handleFormChange('gender', event)}
                error={formErrors.gender}
            >
                <Group mt="xs">
                    <Radio checked={formValues.gender === 'male'} color="pink" value="male" label="Male" />
                    <Radio checked={formValues.gender === 'female'} color="pink" value="Female" label="Female" />
                </Group>
            </Radio.Group>

            <br />

            <Select
                size="md"
                placeholder="Select Religion"
                label="Religion"
                data={religions}
                value={formValues.religion}
                withAsterisk
                name="religion"
                onChange={(event) => handleFormChange('religion', event)}
                error={formErrors.religion}
            />

            <br />


            <Select
                size="md"
                placeholder="Select Community"
                label="Community"
                data={communities}
                value={formValues.community}
                withAsterisk
                name="community"
                onChange={(event) => handleFormChange('community', event)}
                error={formErrors.community}
            />

            <br />


            <Button size="md" fullWidth style={btnBackground} onClick={handleFormSubmit}>
                Next
            </Button>

            <br />

        </div>
    )
}

export default MultistepRegistration