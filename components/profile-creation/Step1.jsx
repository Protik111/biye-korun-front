'use client'

import { heights, maritalStatuses, recidencies, subCommunities } from "@/staticData/InputFields/inputFields"
import { Button, Select, TextInput, Chip } from "@mantine/core"
import { IconArrowNarrowRight } from '@tabler/icons-react';


const Step1 = ({ onNextStep, formValues, setFormValues, formErrors, setFormErrors }) => {

    const { city, livesWithFamily, residency, maritalStatus, hasChildren, diet, height, subCommunity } = formValues;

    const validateForm = () => {
        const errors = {};

        if (!city) {
            errors.city = 'City is required';
        }

        if (!livesWithFamily) {
            errors.livesWithFamily = 'Lives with family is required';
        }

        if (!residency) {
            errors.residency = 'Residency is required';
        }

        if (!maritalStatus) {
            errors.maritalStatus = 'Marital Status is required';
        }

        if (!hasChildren) {
            errors.hasChildren = 'Has Children is required';
        }

        if (!diet) {
            errors.diet = 'Diet is required';
        }

        if (!height) {
            errors.height = 'Height is required';
        }

        if (!subCommunity) {
            errors.subCommunity = 'Sub Community is required';
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
                <label htmlFor="livesWithFamily" className="label label-required">Lives with your Family?
                    <span className="required-field">*</span>
                </label>
                <Chip.Group
                    multiple={false}
                    value={formValues.livesWithFamily}
                    onChange={(event) => handleFormChange('livesWithFamily', event)}
                    name="livesWithFamily"
                >
                    <div className="flex flex-gap-10 mt-5">
                        <Chip variant="filled" color="pink" value="yes">Yes</Chip>
                        <Chip variant="filled" color="pink" value="no">No</Chip>
                    </div>
                </Chip.Group>
                {formErrors.livesWithFamily && (
                    <p className="error-message">{formErrors.livesWithFamily}</p>
                )}
            </div>

            <br />

            <Select
                size="md"
                placeholder="Select"
                label="Residency status"
                // styles={{ label: labelStyles }}
                data={recidencies}
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
                data={maritalStatuses}
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
                    className="mt-5"
                >
                    <div className="flex flex-gap-10 flex-wrap mt-5">
                        <Chip variant="filled" color="pink" value="no">No</Chip>
                        <Chip variant="filled" color="pink" value="yes, livingTogether">Yes. Living together</Chip>
                        <Chip variant="filled" color="pink" value="yes, notLivingTogether">Yes. Not living together</Chip>
                    </div>
                </Chip.Group>

                {formErrors.hasChildren && (
                    <p className="error-message">{formErrors.hasChildren}</p>
                )}
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
                    <div className="flex flex-gap-10 flex-wrap mt-5">
                        <Chip variant="filled" color="pink" value="Veg">Veg</Chip>
                        <Chip variant="filled" color="pink" value="Non-Veg">Non-Veg</Chip>
                        <Chip variant="filled" color="pink" value="Eggetarian">Eggetarian</Chip>
                        <Chip variant="filled" color="pink" value="Jain">Jain</Chip>
                        <Chip variant="filled" color="pink" value="Vegan">Vegan</Chip>
                    </div>
                    {formErrors.diet && (
                        <p className="error-message">{formErrors.diet}</p>
                    )}
                </Chip.Group>
            </div>

            <br />

            <Select
                size="md"
                placeholder="Select"
                label="Height"
                data={heights}
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
                data={subCommunities}
                value={formValues.subCommunity}
                withAsterisk
                name="subCommunity"
                onChange={(event) => handleFormChange('subCommunity', event)}
                error={formErrors.subCommunity}
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

export default Step1;