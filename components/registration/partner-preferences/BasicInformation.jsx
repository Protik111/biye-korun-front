import ThemeIconComp from "@/components/global/ThemeIconComp";
import { maritalStatuses } from "@/staticData/InputFields/inputFields";
import { useStyles } from "@/styles/library/mantine";
import {
  Accordion,
  MultiSelect,
  RangeSlider,
  Select,
  ThemeIcon,
} from "@mantine/core";
import { IconCalendarTime, IconFall, IconHearts } from "@tabler/icons-react";

function BasicInformation({
  formData,
  setFormData,
  minHeight,
  setMinHeight,
  maxHeight,
  setMaxHeight,
}) {
  const { ages, height, maritalStatus } = formData;
  const { classes } = useStyles();

  const handleFormChange = (name, value) => {
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  // Function to format height in feet and inches
  const formatHeight = (heightInches) => {
    const feet = Math.floor(heightInches / 12);
    const inches = heightInches % 12;
    return `${feet}' ${inches}"`;
  };

  // Function to handle range slider changes
  const handleRangeChange = (newValues) => {
    setMinHeight(newValues[0]);
    setMaxHeight(newValues[1]);
  };

  console.log('min', minHeight, maxHeight);
  console.log('[parseInt(minHeight), parseInt(maxHeight)]', [minHeight, maxHeight]);


  return (
    <>
      <div className="partenerPref__basic-details box-shadow rounded-10 p-30 mt-15 w-75 m-auto w-md-100-responsive">
        <h3 className="pb-5">Basic Information</h3>
        <Accordion
          // maw={720}
          mx="auto"
          variant="filled"
          defaultValue="customization"
          classNames={classes}
          className={classes.root}
        >
          <Accordion.Item value="item-1">
            <Accordion.Control
              icon={<ThemeIconComp iconComp={<IconCalendarTime size={16} />} />}
            >
              Age Range
            </Accordion.Control>
            <Accordion.Panel>
              <RangeSlider
                size="md"
                color="pink"
                py="xl"
                // scale={(v) => 2 ** v}
                step={1}
                min={18}
                max={65}
                name="ages"
                labelAlwaysOn
                values={formData.ages}
                defaultValue={formData.ages}
                // range={2}
                // onChange={handleAge}
                onChange={(event) => handleFormChange("ages", event)}
              />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Control
              icon={<ThemeIconComp iconComp={<IconFall size={16} />} />}
            >
              Height Range
            </Accordion.Control>
            <Accordion.Panel>
              <RangeSlider
                size="md"
                color="pink"
                py="xl"
                step={1}
                min={28}
                max={83}
                labelAlwaysOn
                value={[minHeight, maxHeight]}
                onChange={handleRangeChange}
              // valueLabel={(value) => formatHeight(value)}
              />
              <div>
                <div>Min Height: {formatHeight(minHeight)}</div>
                <div>Max Height: {formatHeight(maxHeight)}</div>
              </div>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-3">
            <Accordion.Control
              icon={<ThemeIconComp iconComp={<IconHearts size={16} />} />}
            >
              Marital Status
            </Accordion.Control>
            <Accordion.Panel>
              <MultiSelect
                size="md"
                placeholder="Select"
                label="Marital status"
                // styles={{ label: labelStyles }}
                // data={maritalStatuses}
                data={[
                  //   "Open to All",
                  "Never Married",
                  "Divorced",
                  "Widowed",
                  "Awaiting Divorce",
                  "Annulled",
                ]}
                // defaultValue={formData.maritalStatus}
                defaultValue={formData.maritalStatus}
                withAsterisk
                name="maritalStatus"
                onChange={(event) => handleFormChange("maritalStatus", event)}
              // error={formErrors.maritalStatus}
              />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default BasicInformation;
