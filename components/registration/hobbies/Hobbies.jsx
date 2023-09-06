"use client"
import { creativeHobbies, fitness, funs, otherInterests } from "@/staticData/InputFields/inputFields"
import { btnBackground } from "@/styles/library/mantine"
import { notifyError, notifySuccess } from "@/utils/showNotification"
import { Button, Select, TextInput, Chip } from "@mantine/core"
import axios from "axios"
import { useRouter } from "next/navigation"
import React, { useState } from 'react'

const Hobbies = () => {
    const [hobbies, setHobbies] = useState([])
    const [hobbiesLoading, setHobbiesLoading] = useState(false);
    const router = useRouter();

    const handleFormChange = (e, val) => {

        if (hobbies.length === 0) {
            setHobbies([
                {
                    categories: e,
                    hobbies: val
                }
            ]);
        } else {
            const updatedHobbies = hobbies.map((item) => {
                if (item.categories === e) {
                    // If categories match, update hobbies
                    return {
                        ...item,
                        hobbies: val
                    };
                }
                // If categories don't match, keep the item unchanged
                return item;
            });

            // Check if a matching category was found in the map
            const categoryFound = updatedHobbies.some((item) => item.categories === e);

            if (!categoryFound) {
                // If no matching category was found, add a new object
                updatedHobbies.push({
                    categories: e,
                    hobbies: val
                });
            }

            setHobbies(updatedHobbies); // Pass the entire updatedHobbies array as the new state
        }

    }
    // console.log(hobbies)

    const list = [
        {
            title: 'Creative',
            chips: creativeHobbies
        },
        {
            title: 'Fun',
            chips: funs
        },
        {
            title: 'Fitness',
            chips: fitness
        },
        {
            title: 'Others Interests',
            chips: otherInterests
        },
    ]

    const hanldeSubmit = () => {
        setHobbiesLoading(true)
        axios.patch('user/hobbies-interest', { interests: hobbies })
            .then(res => {
                notifySuccess('Hobbies are added successfully!')
                setHobbiesLoading(false)
                setTimeout(() => {
                    router.push('/registration/partner-preferences')
                }, 500)
            })
            .catch(err => {
                setHobbiesLoading(false)
                console.log(err.response.data);
                notifyError(err.response.data.message)
            })
    }

    console.log('hobbies', hobbies);
    return (
        <div className='hobbies'>
            <h2 className='text-center py-15'>Now let's add your hobbies & interests</h2>

            {
                list?.map(list => <div className="hobbies__creative box-shadow rounded-10 p-30 mt-15">
                    <h3>{list?.title}</h3>
                    <Chip.Group
                        multiple={true}
                        // value={formValues.hasChildren}
                        onChange={(e) => handleFormChange(list?.title, e)}
                        name="hobbies"
                        className="mt-5"
                    >

                        <div className="flex flex-gap-10 flex-wrap max-w-75 mt-15">
                            {
                                list?.chips?.map((item, i) => <>
                                    <Chip variant="filled" size="md" color="pink" value={item}>{item}</Chip>
                                </>)
                            }
                        </div>
                    </Chip.Group>

                    {/* {formErrors.hasChildren && (
                    <p className="error-message">{formErrors.hasChildren}</p>
                )} */}
                </div>)
            }

            <div className="flex justify-center mt-30">
                <Button
                    disabled={hobbiesLoading}
                    onClick={() => hanldeSubmit()}
                    style={btnBackground} size="md">
                    Save & Continue
                </Button>
            </div>
        </div>
    )
}

export default Hobbies