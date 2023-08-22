import ThemeIconComp from '@/components/global/ThemeIconComp';
import { incomes, professions, qualifications, worksWiths } from '@/staticData/InputFields/inputFields';
import { labelStyles, useStyles } from '@/styles/library/mantine';
import { Accordion, RangeSlider, Select, ThemeIcon } from '@mantine/core';
import { IconBrandCashapp, IconCalendarTime, IconCertificate, IconFall, IconHearts, IconPray, IconUserCircle, IconWorld } from '@tabler/icons-react';

function valueLabelFormat(value) {
    const units = ['KB', 'MB', 'GB', 'TB'];

    let unitIndex = 0;
    let scaledValue = value;

    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
        unitIndex += 1;
        scaledValue /= 1024;
    }

    return `${scaledValue} ${units[unitIndex]}`;
}

function Education() {
    const { classes } = useStyles();

    return (
        <div className='pt-15'>
            <div className='partenerPref__basic-details box-shadow rounded-10 p-30 mt-15 w-75 m-auto'>
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
                                label="Country"
                                defaultValue="20"
                                styles={{ label: labelStyles }}
                                data={qualifications}
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
                        >Working with</Accordion.Control>
                        <Accordion.Panel>

                            <Select
                                size="md"
                                placeholder="Select"
                                label="Country"
                                defaultValue="20"
                                styles={{ label: labelStyles }}
                                data={worksWiths}
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
                                label="Country"
                                defaultValue="20"
                                styles={{ label: labelStyles }}
                                data={professions}
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
                        >Annual Income</Accordion.Control>
                        <Accordion.Panel>

                            <Select
                                size="md"
                                placeholder="Select"
                                label="Country"
                                defaultValue="20"
                                styles={{ label: labelStyles }}
                                data={incomes}
                            // style={{ width: '180px' }}
                            // sx={selectMobileStyles}

                            />
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Education