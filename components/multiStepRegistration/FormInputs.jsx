import useFormContext from "@/hooks/common/useFormContext"
import Basic1 from "./Basic1"
import Basic2 from "./Basic2"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <Basic1 />,
        1: <Basic2 />,
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs