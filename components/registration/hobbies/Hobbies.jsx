"use client"
import { creativeHobbies, fitness, funs, otherInterests } from "@/staticData/InputFields/inputFields"
import { btnBackground } from "@/styles/library/mantine"
import { Button, Select, TextInput, Chip } from "@mantine/core"
import React, { useState } from 'react'

const Hobbies = () => {
    const [hobbies, setHobbies] = useState([])

    const handleFormChange = (e) => {
        let datas = [...e];
        const newDatas = datas;
        console.log('datas', ...newDatas);
        setHobbies(...hobbies, ...newDatas)
    }

    console.log('hobbies', hobbies);
    return (
        <div className='hobbies'>
            <h2 className='text-center py-15'>Now let's add your hobbies & interests</h2>

            <div className="hobbies__creative box-shadow rounded-10 p-30 mt-15">
                <h3>Creative</h3>
                <Chip.Group
                    multiple={true}
                    // value={formValues.hasChildren}
                    onChange={handleFormChange}
                    name="hobbies"
                    className="mt-5"
                >

                    <div className="flex flex-gap-10 flex-wrap max-w-75 mt-15">
                        {
                            creativeHobbies?.map((item, i) => <>
                                <Chip variant="filled" size="md" color="pink" value={item}>{item}</Chip>
                            </>)
                        }
                    </div>
                </Chip.Group>

                {/* {formErrors.hasChildren && (
                    <p className="error-message">{formErrors.hasChildren}</p>
                )} */}
            </div>

            <div className="hobbies__creative box-shadow rounded-10 p-30 mt-25">
                <h3>Fun</h3>
                <Chip.Group
                    multiple={true}
                    // value={formValues.hasChildren}
                    onChange={handleFormChange}
                    name="hobbies"
                    className="mt-5"
                >

                    <div className="flex flex-gap-10 flex-wrap max-w-75 mt-15">
                        {
                            funs?.map((item, i) => <>
                                <Chip variant="filled" size="md" color="pink" value={item}>{item}</Chip>
                            </>)
                        }
                    </div>
                </Chip.Group>

                {/* {formErrors.hasChildren && (
                    <p className="error-message">{formErrors.hasChildren}</p>
                )} */}
            </div>

            <div className="hobbies__creative box-shadow rounded-10 p-30 mt-25">
                <h3>Fitness</h3>
                <Chip.Group
                    multiple={true}
                    // value={formValues.hasChildren}
                    onChange={handleFormChange}
                    name="hobbies"
                    className="mt-5"
                >

                    <div className="flex flex-gap-10 flex-wrap max-w-75 mt-15">
                        {
                            fitness?.map((item, i) => <>
                                <Chip variant="filled" size="md" color="pink" value={item}>{item}</Chip>
                            </>)
                        }
                    </div>
                </Chip.Group>

                {/* {formErrors.hasChildren && (
                    <p className="error-message">{formErrors.hasChildren}</p>
                )} */}
            </div>


            <div className="hobbies__creative box-shadow rounded-10 p-30 mt-25">
                <h3>Others Interests</h3>
                <Chip.Group
                    multiple={true}
                    // value={formValues.hasChildren}
                    onChange={handleFormChange}
                    name="hobbies"
                    className="mt-5"
                >

                    <div className="flex flex-gap-10 flex-wrap max-w-75 mt-15">
                        {
                            otherInterests?.map((item, i) => <>
                                <Chip variant="filled" size="md" color="pink" value={item}>{item}</Chip>
                            </>)
                        }
                    </div>
                </Chip.Group>

                {/* {formErrors.hasChildren && (
                    <p className="error-message">{formErrors.hasChildren}</p>
                )} */}
            </div>

            <div className="flex justify-center mt-30">
                <Button
                    style={btnBackground} size="md">
                    Save & Continue
                </Button>
            </div>
        </div>
    )
}

export default Hobbies