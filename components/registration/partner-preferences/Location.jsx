import ThemeIconComp from '@/components/global/ThemeIconComp';
import { useStyles } from '@/styles/library/mantine';
import { Accordion, RangeSlider, ThemeIcon } from '@mantine/core';
import { IconCalendarTime, IconFall, IconHearts, IconHome2, IconMapPin, IconPray, IconWorld } from '@tabler/icons-react';

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

function Location() {
    const { classes } = useStyles();

    return (
        <div className='pt-15'>
            <div className='partenerPref__basic-details box-shadow rounded-10 p-30 mt-15 w-75 m-auto'>
                <h3 className='pb-5'>Location</h3>
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
                                <ThemeIconComp iconComp={<IconWorld size={16} />} />
                            }
                        >Country living in</Accordion.Control>
                        <Accordion.Panel>

                            <RangeSlider
                                size="md"
                                color='pink'
                                py="xl"
                                scale={(v) => 2 ** v}
                                step={1}
                                min={2}
                                max={30}
                                labelAlwaysOn
                                defaultValue={[10, 20]}
                                label={valueLabelFormat}
                            />
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item-2">
                        <Accordion.Control
                            icon={
                                <ThemeIconComp iconComp={<IconMapPin size={16} />} />
                            }
                        >State living in</Accordion.Control>
                        <Accordion.Panel>

                            <RangeSlider
                                size="md"
                                color='pink'
                                py="xl"
                                scale={(v) => 2 ** v}
                                step={1}
                                min={2}
                                max={30}
                                labelAlwaysOn
                                defaultValue={[10, 20]}
                                label={valueLabelFormat}
                            />
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item-3">
                        <Accordion.Control
                            icon={
                                <ThemeIconComp iconComp={<IconHome2 size={16} />} />
                            }
                        >Residency Status</Accordion.Control>
                        <Accordion.Panel>

                            <RangeSlider
                                size="md"
                                color='pink'
                                py="xl"
                                scale={(v) => 2 ** v}
                                step={1}
                                min={2}
                                max={30}
                                labelAlwaysOn
                                defaultValue={[10, 20]}
                                label={valueLabelFormat}
                            />
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Location