import ThemeIconComp from "@/components/global/ThemeIconComp";
import { motherTongues, religions } from "@/staticData/InputFields/inputFields";
import { labelStyles, useStyles } from "@/styles/library/mantine";
import {
  Accordion,
  MultiSelect,
  RangeSlider,
  Select,
  ThemeIcon,
  Button,
} from "@mantine/core";
import {
  IconCalendarTime,
  IconFall,
  IconHearts,
  IconPray,
  IconWorld,
} from "@tabler/icons-react";
import { useState } from "react";

function valueLabelFormat(value) {
  const units = ["KB", "MB", "GB", "TB"];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function Communities({ formData, setFormData }) {
  const { classes } = useStyles();
  const [value, setValue] = useState("");

  const handleFormChange = (name, value) => {
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  return (
    <div className="pt-15">
      <div className="partenerPref__basic-details box-shadow rounded-10 p-30 mt-15 w-75 m-auto w-md-100-responsive">
        <h3 className="pb-5">Community</h3>
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
              icon={<ThemeIconComp iconComp={<IconPray size={16} />} />}
            >
              Religion
            </Accordion.Control>
            <Accordion.Panel>
              <MultiSelect
                size="md"
                placeholder="Select"
                label="Religion"
                // defaultValue="20"
                withAsterisk
                // styles={{ label: labelStyles }}
                // data={religions}
                data={[
                  // "Open to All",
                  "Islam",
                  "Hinduism",
                  "Christianity",
                  "Buddhism",
                  "Judaism",
                  "Others",
                ]}
                name="religion"
                defaultValue={formData.religion}
                onChange={(event) => handleFormChange("religion", event)}
                // sx={selectMobileStyles}
              />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Control
              icon={<ThemeIconComp iconComp={<IconWorld size={16} />} />}
            >
              Native Language
            </Accordion.Control>
            <Accordion.Panel>
              <MultiSelect
                size="md"
                placeholder="Select"
                label="Native Language"
                defaultValue="20"
                // styles={{ label: labelStyles }}
                data={motherTongues}
                name="nativeLanguage"
                value={formData.nativeLanguage}
                onChange={(event) => handleFormChange("nativeLanguage", event)}
                searchable
                // style={{ width: '180px' }}
                // sx={selectMobileStyles}
              />
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

export default Communities;
