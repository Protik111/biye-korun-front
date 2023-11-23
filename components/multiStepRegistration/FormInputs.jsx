import useFormContext from "@/hooks/common/useFormContext";
import Basic1 from "./Basic1";
import Basic2 from "./Basic2";
import Basic3 from "./Basic3";

const FormInputs = () => {
  const { page } = useFormContext();

  console.log("page from formINput", page);

  const display = {
    0: <Basic1 />,
    1: <Basic2 />,
    2: <Basic3 />,
  };

  const content = <div className="form-inputs flex-col">{display[page]}</div>;

  return content;
};
export default FormInputs;
