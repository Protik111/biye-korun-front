import ThemeIconComp from '@/components/global/ThemeIconComp';
import { maritalStatuses } from '@/staticData/InputFields/inputFields';
import { useStyles } from '@/styles/library/mantine';
import { Accordion, RangeSlider, Select, ThemeIcon } from '@mantine/core';
import { IconCalendarTime, IconFall, IconHearts } from '@tabler/icons-react';
import { useState } from 'react';

function valueLabelFormat(value) {
    const units = ["''", "''", "''", "''"];

    let unitIndex = 0;
    let scaledValue = value;

    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
        unitIndex += 1;
        scaledValue /= 1024;
    }

    return `${scaledValue} ${units[unitIndex]}`;
}


function BasicInformation() {
    const { classes } = useStyles();

    const [values, setValues] = useState([21, 29]);
    const minRange = 2;

    const handleAge = (newValues) => {
        // Ensure that the difference between the handles is at least minRange
        const diff = newValues[1] - newValues[0];
        if (diff >= minRange) {
            setValues(newValues);
        } else {
            // Adjust the values to meet the minimum range
            setValues([newValues[0], newValues[0] + minRange]);
        }
    };

    return (
        <>
            <div className='partenerPref__basic-details box-shadow rounded-10 p-30 mt-15 w-75 m-auto'>
                <h3 className='pb-5'>Basic Information</h3>
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
                            icon={
                                <ThemeIconComp iconComp={<IconCalendarTime size={16} />} />
                            }
                        >Age Range</Accordion.Control>
                        <Accordion.Panel>

                            <RangeSlider
                                size="md"
                                color='pink'
                                py="xl"
                                // scale={(v) => 2 ** v}
                                step={1}
                                min={18}
                                max={39}
                                labelAlwaysOn
                                values={values}
                                // defaultValue={[21, 29]}
                                range={3}
                                onChange={handleAge}
                            />
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item-2">
                        <Accordion.Control
                            icon={
                                <ThemeIconComp iconComp={<IconFall size={16} />} />
                            }
                        >Height Range</Accordion.Control>
                        <Accordion.Panel>

                            <RangeSlider
                                size="md"
                                color='pink'
                                py="xl"
                                // scale={(v) => 2 ** v}
                                step={1}
                                // min={4.5}
                                // max={8}
                                labelAlwaysOn
                                // values={values}
                                defaultValue={[4.11, 4.12]}
                                range={3}
                                // onChange={handleAge}
                                label={valueLabelFormat}
                            />
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item-3">
                        <Accordion.Control
                            icon={
                                <ThemeIconComp iconComp={<IconHearts size={16} />} />
                            }
                        >Marital Status</Accordion.Control>
                        <Accordion.Panel>

                            <Select
                                size="md"
                                placeholder="Select"
                                label="Marital status"
                                // styles={{ label: labelStyles }}
                                data={maritalStatuses}
                                // value={formValues.maritalStatus}
                                withAsterisk
                                name="maritalStatus"
                            // onChange={(event) => handleFormChange('maritalStatus', event)}
                            // error={formErrors.maritalStatus}
                            />
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default BasicInformation