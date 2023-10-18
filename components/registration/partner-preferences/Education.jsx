import ThemeIconComp from "@/components/global/ThemeIconComp";
import {
  incomes,
  professions,
  qualifications,
  worksWiths,
  worksWithsOwn,
} from "@/staticData/InputFields/inputFields";
import { labelStyles, useStyles } from "@/styles/library/mantine";
import {
  Accordion,
  Button,
  MultiSelect,
  RangeSlider,
  Select,
  ThemeIcon,
} from "@mantine/core";
import {
  IconBrandCashapp,
  IconCalendarTime,
  IconCertificate,
  IconFall,
  IconHearts,
  IconPray,
  IconUserCircle,
  IconWorld,
} from "@tabler/icons-react";
import { useState } from "react";

function Education({
  formData,
  setFormData,
  minIncomeValue,
  setMinIncomeValue,
  maxIncomeValue,
  setMaxIncomeValue,
}) {
  const { classes } = useStyles();
  const [value, setValue] = useState("");
  const handleFormChange = (name, value) => {
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  // Function to handle range slider changes
  const handleIncomeChange = (newValues) => {
    setMinIncomeValue(newValues[0]);
    setMaxIncomeValue(newValues[1]);
  };

  return (
    <div className="pt-15">
      <div className="partenerPref__basic-details box-shadow rounded-10 p-30 mt-15 w-75 m-auto w-md-100-responsive">
        <h3 className="pb-5">Education & Career</h3>
        <Accordion
          // maw={720}
          mx="auto"
          variant="filled"
          defaultValue="customization"
          classNames={classes}
          className={classes.root}
          value={value}
          onChange={setValue}
        >
          <Accordion.Item value="item-1">
            <Accordion.Control
              icon={<ThemeIconComp iconComp={<IconCertificate size={16} />} />}
            >
              Qualification
            </Accordion.Control>
            <Accordion.Panel>
              <MultiSelect
                size="md"
                placeholder="Select"
                label="Qualification"
                defaultValue="20"
                // styles={{ label: labelStyles }}
                withAsterisk
                data={qualifications}
                // data={["Open to All", "Doctorate", "Masters", "Bachelor/Undergraduate", "Associate/Diploma", "High School and below"]}
                name="qualification"
                value={formData.qualification}
                onChange={(event) => handleFormChange("qualification", event)}
                searchable
              // style={{ width: '180px' }}
              // sx={selectMobileStyles}
              />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Control
              icon={<ThemeIconComp iconComp={<IconWorld size={16} />} />}
            >
              Job Sector
            </Accordion.Control>
            <Accordion.Panel>
              <MultiSelect
                size="md"
                placeholder="Select"
                label="Job Sector"
                withAsterisk
                defaultValue="20"
                // styles={{ label: labelStyles }}
                data={worksWithsOwn}
                // data={["Open to All", "Private Company", "Government/Public Sector", "Defense/Civil Services", "Business/Self Employed", "Non Working"]}
                name="workingWith"
                value={formData.workingWith}
                onChange={(event) => handleFormChange("workingWith", event)}
              // style={{ width: '180px' }}
              // sx={selectMobileStyles}
              />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-3">
            <Accordion.Control
              icon={<ThemeIconComp iconComp={<IconUserCircle size={16} />} />}
            >
              Job Title
            </Accordion.Control>
            <Accordion.Panel>
              <MultiSelect
                size="md"
                placeholder="Select"
                label=" Job Title"
                withAsterisk
                defaultValue="20"
                data={professions}
                name="profession"
                value={formData.profession}
                onChange={(event) => handleFormChange("profession", event)}
              // style={{ width: '180px' }}
              // sx={selectMobileStyles}
              />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-4">
            <Accordion.Control
              icon={<ThemeIconComp iconComp={<IconBrandCashapp size={16} />} />}
            >
              Yearly Income
            </Accordion.Control>
            <Accordion.Panel>
              {/* <Select
                                size="md"
                                placeholder="Select"
                                label="Country"
                                defaultValue="20"
                                styles={{ label: labelStyles }}
                                data={incomes}
                                name="income"
                                value={formData.income}
                                onChange={(event) => handleFormChange('income', event)}
                            // style={{ width: '180px' }}
                            // sx={selectMobileStyles}

                            /> */}
              <RangeSlider
                size="md"
                color="pink"
                step={5000} // You can adjust the step value as needed
                min={10000}
                max={200000}
                labelAlwaysOn
                value={[minIncomeValue, maxIncomeValue]}
                onChange={handleIncomeChange}
                valueLabel={(value) => `${value} BDT`}
              />
              <div>
                <div>Min Income: ${minIncomeValue} </div>
                <div>Max Income: ${maxIncomeValue} </div>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
          {value && (
            <div className="flex justify-center ">
              <Button
                variant="outline"
                size="sm"
                color="pink"
                className="mb-10 mt-15"
                onClick={() => setValue("")}
              >
                Save & Close
              </Button>
            </div>
          )}
        </Accordion>
      </div>
    </div>
  );
}

export default Education;
