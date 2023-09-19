'use client'
import { Button, Textarea } from "@mantine/core"
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


const Step3 = ({ onNextStep, formValues, setFormValues, formErrors, setFormErrors }) => {
    const { about, phone } = formValues;

    const validateForm = () => {
        const errors = {};

        if (!about) {
            errors.about = 'About is required';
        }

        if (!phone) {
            errors.phone = 'Phone is required';
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

            <h2 className='text-center'>About Yourself</h2>

            <Textarea
                placeholder="Describe yourself"
                label="Share your bio"
                autosize
                minRows={3}
                withAsterisk
                value={formValues.about}
                onChange={(event) => handleFormChange('about', event.target.value)}
                error={formErrors.about}
            />

            <br />

            <div>
                <PhoneInput
                    defaultCountry="bd"
                    value={phone}
                    onChange={(phone) => handleFormChange('phone', phone)}
                />
                {formErrors.phone && (
                    <p className="error-message">{formErrors.phone}</p>
                )}
            </div>

            <br />

            <Button
                fullWidth
                // sx={{ width: '180px' }}
                size="md"
                type="submit"
                onClick={handleNextStep}
            >Create Profile</Button>

        </div>
    )
}

export default Step3;