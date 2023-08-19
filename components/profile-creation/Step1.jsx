'use client'

import { communities, profileFor, religions } from "@/staticData/InputFields/inputFields"
import { btnBackground } from "@/styles/library/mantine"
import { Button, Group, Input, Radio, Select, TextInput, Chip } from "@mantine/core"
import { useState } from "react"

const Step1 = () => {
    const [formValues, setFormValues] = useState({
        city: '',
        livesWithFamily: '',
        residency: '',
        maritalStatus: '',
        hasChildren: '',
        diet: '',
        height: '',
        subCommunity: ''
    });

    const [formErrors, setFormErrors] = useState({
        city: '',
        livesWithFamily: '',
        residency: '',
        maritalStatus: '',
        hasChildren: '',
        diet: '',
        height: '',
        subCommunity: ''
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
    };

    const handleFormSubmit = () => {
        if (validateForm()) {
            // Proceed with form submission
            console.log('Form submitted:', formValues);
        }
    };

    console.log('formValues', formValues);

    return (
        <div className="step1">

            <h2 className='text-center'>Create An Account</h2>


            <TextInput
                label="City you lives in?"
                placeholder="Enter the city you lives in"
                size="md"
                withAsterisk
                name="city"
                value={formValues.city}
                onChange={(event) => handleFormChange('city', event.target.value)}
                error={formErrors.city}
            />

            <br />

            <div>
                <label htmlFor="livesWithFamily" className="label">Lives with your Family?</label>
                <Chip.Group
                    multiple={false}
                    value={formValues.livesWithFamily}
                    onChange={(event) => handleFormChange('livesWithFamily', event)}
                    name="livesWithFamily"
                >
                    <div className="flex flex-gap-10">
                        <Chip variant="filled" color="pink" value="yes">Yes</Chip>
                        <Chip variant="filled" color="pink" value="no">No</Chip>
                    </div>
                </Chip.Group>
            </div>

            <br />

            <Select
                size="md"
                placeholder="Select"
                label="Residency status"
                // styles={{ label: labelStyles }}
                data={profileFor}
                value={formValues.residency}
                withAsterisk
                name="residency"
                onChange={(event) => handleFormChange('residency', event)}
                error={formErrors.residency}
            />

            <br />

            <Select
                size="md"
                placeholder="Select"
                label="Marital status"
                // styles={{ label: labelStyles }}
                data={profileFor}
                value={formValues.maritalStatus}
                withAsterisk
                name="maritalStatus"
                onChange={(event) => handleFormChange('maritalStatus', event)}
                error={formErrors.maritalStatus}
            />


            <br />

            <div>
                <label htmlFor="hasChildren" className="label">Do you have any children?</label>
                <Chip.Group
                    multiple={false}
                    value={formValues.hasChildren}
                    onChange={(event) => handleFormChange('hasChildren', event)}
                    name="hasChildren"
                >
                    <div className="flex flex-gap-10 flex-wrap">
                        <Chip variant="filled" color="pink" value="no">No</Chip>
                        <Chip variant="filled" color="pink" value="yes, livingTogether">Yes. Living together</Chip>
                        <Chip variant="filled" color="pink" value="yes, notLivingTogether">Yes. Not living together</Chip>
                    </div>
                </Chip.Group>
            </div>

            <br />

            <div>
                <label htmlFor="diet" className="label">Your diet?</label>
                <Chip.Group
                    multiple={false}
                    value={formValues.diet}
                    onChange={(event) => handleFormChange('diet', event)}
                    name="diet"
                >
                    <div className="flex flex-gap-10 flex-wrap">
                        <Chip variant="filled" color="pink" value="veg">Veg</Chip>
                        <Chip variant="filled" color="pink" value="non-veg">Non-Veg</Chip>
                        <Chip variant="filled" color="pink" value="Eggetarian">Eggetarian</Chip>
                        <Chip variant="filled" color="pink" value="carnivore">Carnivore</Chip>
                        <Chip variant="filled" color="pink" value="vegan">Vegan</Chip>
                    </div>
                </Chip.Group>
            </div>

            <br />

            <Select
                size="md"
                placeholder="Select"
                label="Height"
                data={religions}
                value={formValues.height}
                withAsterisk
                name="height"
                onChange={(event) => handleFormChange('height', event)}
                error={formErrors.height}
            />

            <br />


            <Select
                size="md"
                placeholder="Select"
                label="Sub-community"
                data={communities}
                value={formValues.subCommunity}
                withAsterisk
                name="subCommunity"
                onChange={(event) => handleFormChange('subCommunity', event)}
                error={formErrors.subCommunity}
            />

            <br />

        </div>
    )
}

export default Step1;