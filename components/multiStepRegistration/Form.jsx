import useFormContext from '@/hooks/common/useFormContext'
import FormInputs from './FormInputs'
import { Button } from '@mantine/core'
import { btnBackground } from '@/styles/library/mantine'
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';

const Form = () => {

    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
        validatePage,
        fieldErrors
    } = useFormContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => {
        const isValid = validatePage(page);

        if (isValid) {
            setPage((prev) => prev + 1);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isSubmittable = validatePage(page);

        if (isSubmittable) {
            console.log(JSON.stringify(data))
        }

    }

    console.log('page, title', fieldErrors);




    const content = (
        <form className="form flex-col">


            <FormInputs />

            <header className="form-header">
                {/* <h2>{title[page]}</h2> */}

                <div className="button-container">

                    <div className='flex flex-gap-15'>
                        <Button
                            size="md"
                            fullWidth
                            leftIcon={<IconArrowNarrowLeft />}
                            style={btnBackground} type="button"
                            className={`button ${prevHide}`}
                            onClick={handlePrev}
                            disabled={disablePrev}
                        >Prev</Button>

                        <Button
                            size="md"
                            fullWidth
                            type="submit"
                            className={`button ${submitHide}`}
                            // disabled={!canSubmit}
                            onClick={handleSubmit}
                        >Sign Up</Button>
                    </div>

                    <Button
                        rightIcon={<IconArrowNarrowRight />}
                        size="md"
                        fullWidth
                        style={btnBackground}
                        className={`button ${nextHide}`}
                        onClick={handleNext}
                    //  disabled={disableNext}
                    >Next
                    </Button>

                </div>
            </header>



        </form>
    )

    return content
}
export default Form