import ThemeIconComp from '@/components/global/ThemeIconComp';
import useCountry from '@/hooks/common/useCountry';
import { countries, recidencies, states } from '@/staticData/InputFields/inputFields';
import { labelStyles, useStyles } from '@/styles/library/mantine';
import { getCountryCodeByLabel, getStateCodeByLabel } from '@/utils/getCountryLabelCode';
import { Accordion, RangeSlider, Select, ThemeIcon } from '@mantine/core';
import { IconCalendarTime, IconFall, IconHearts, IconHome2, IconMapPin, IconPray, IconWorld } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

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

function Location({ formData, setFormData }) {

    const [countryList, setCountryList] = useState([]);
    const [stateList, setStateList] = useState([]);

    const [countryCode, setCountryCode] = useState('')
    const [stateCode, setStateCode] = useState('')

    console.log('countryCode, stateCode', countryCode, stateCode);

    //custom hooks to get country, state, city
    const { data, error, loading } = useCountry(countryCode, stateCode);

    const { classes } = useStyles();

    const handleFormChange = (name, value) => {
        setFormData((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    console.log('data from country', data.country);
    console.log('state data from country', data.state);

    useEffect(() => {
        if (!loading?.country) {
            const convertedList = data?.country?.map((item) => ({
                label: item?.name,
                value: item?.name,
                code: item?.iso2
            }));

            setCountryList(convertedList);

            //get country code
            setCountryCode(getCountryCodeByLabel(convertedList, formData?.livingIn))

        }

        if (!loading?.state) {
            console.log('data?.state?', data?.state);
            const stateConvertedList = data?.state?.map((item) => ({
                label: item?.name,
                value: item?.name,
                code: item?.iso2
            }));

            setStateList(stateConvertedList);

            //get state code
            setStateCode(getStateCodeByLabel(stateConvertedList, formData?.stateLiving))
        }
    }, [data?.country, data?.state, loading, formData]);

    console.log('stateList', stateList);

    console.log('formData', formData);

    return (
        <div className='pt-15'>
            <div className='partenerPref__basic-details box-shadow rounded-10 p-30 mt-15 w-75 m-auto w-md-100-responsive'>
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

                            <Select
                                searchable
                                size="md"
                                placeholder="Select"
                                label="Country"
                                defaultValue="20"
                                styles={{ label: labelStyles }}
                                data={countries}
                                // data={countryList}
                                name="livingIn"
                                value={formData.livingIn}
                                onChange={(event) => handleFormChange('livingIn', event)}
                            // style={{ width: '180px' }}
                            // sx={selectMobileStyles}

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

                            <Select
                                size="md"
                                placeholder="Select"
                                label="Country"
                                defaultValue="20"
                                styles={{ label: labelStyles }}
                                data={states}
                                // data={stateList}
                                name="stateLiving"
                                value={formData.stateLiving}
                                onChange={(event) => handleFormChange('stateLiving', event)}
                            // style={{ width: '180px' }}
                            // sx={selectMobileStyles}

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

                            <Select
                                size="md"
                                placeholder="Select"
                                label="Country"
                                defaultValue="20"
                                styles={{ label: labelStyles }}
                                data={recidencies}
                                name="residency"
                                value={formData.residency}
                                onChange={(event) => handleFormChange('residency', event)}
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

export default Location