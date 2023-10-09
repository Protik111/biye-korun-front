import ThemeIconComp from '@/components/global/ThemeIconComp';
import { incomes, professions, qualifications, worksWiths } from '@/staticData/InputFields/inputFields';
import { labelStyles, useStyles } from '@/styles/library/mantine';
import { Accordion, RangeSlider, Select, ThemeIcon } from '@mantine/core';
import { IconBrandCashapp, IconCalendarTime, IconCertificate, IconFall, IconHearts, IconPray, IconUserCircle, IconWorld } from '@tabler/icons-react';
import { useState } from 'react';


function Education({ formData, setFormData, minIncomeValue, setMinIncomeValue, maxIncomeValue, setMaxIncomeValue, }) {
    const { classes } = useStyles();

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
        <div className='pt-15'>
            <div className='partenerPref__basic-details box-shadow rounded-10 p-30 mt-15 w-75 m-auto w-md-100-responsive'>
                <h3 className='pb-5'>Education & Career</h3>
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
                                <ThemeIconComp iconComp={<IconCertificate size={16} />} />
                            }
                        >Qualification</Accordion.Control>
                        <Accordion.Panel>

                            <Select
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
                                onChange={(event) => handleFormChange('qualification', event)}
                            // style={{ width: '180px' }}
                            // sx={selectMobileStyles}

                            />
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item-2">
                        <Accordion.Control
                            icon={
                                <ThemeIconComp iconComp={<IconWorld size={16} />} />
                            }
                        >Working With</Accordion.Control>
                        <Accordion.Panel>

                            <Select
                                size="md"
                                placeholder="Select"
                                label="Working With"
                                withAsterisk
                                defaultValue="20"
                                // styles={{ label: labelStyles }}
                                data={worksWiths}
                                // data={["Open to All", "Private Company", "Government/Public Sector", "Defense/Civil Services", "Business/Self Employed", "Non Working"]}
                                name="workingWith"
                                value={formData.workingWith}
                                onChange={(event) => handleFormChange('workingWith', event)}
                            // style={{ width: '180px' }}
                            // sx={selectMobileStyles}

                            />
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item-3">
                        <Accordion.Control
                            icon={
                                <ThemeIconComp iconComp={<IconUserCircle size={16} />} />
                            }
                        >Profession</Accordion.Control>
                        <Accordion.Panel>

                            <Select
                                size="md"
                                placeholder="Select"
                                label="Profession"
                                withAsterisk
                                defaultValue="20"
                                // styles={{ label: labelStyles }}
                                data={professions}
                                name="profession"
                                value={formData.profession}
                                onChange={(event) => handleFormChange('profession', event)}
                            // style={{ width: '180px' }}
                            // sx={selectMobileStyles}

                            />
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item-4">
                        <Accordion.Control
                            icon={
                                <ThemeIconComp iconComp={<IconBrandCashapp size={16} />} />
                            }
                        >Monthly Income</Accordion.Control>
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
                                values={[minIncomeValue, maxIncomeValue]}
                                onChange={handleIncomeChange}
                                valueLabel={(value) => `${value} BDT`}
                            />
                            <div>
                                <div>
                                    Min Income: {minIncomeValue} BDT
                                </div>
                                <div>
                                    Max Income: {maxIncomeValue} BDT
                                </div>
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Education