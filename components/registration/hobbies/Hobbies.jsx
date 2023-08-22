"use client"
import { creativeHobbies } from "@/staticData/InputFields/inputFields"
import { Button, Select, TextInput, Chip } from "@mantine/core"
import React, { useState } from 'react'

const Hobbies = () => {
    const hobbies = useState([])
    return (
        <div className='hobbies'>
            <h2 className='text-center py-15'>Now let's add your hobbies & interests</h2>

            <div className="hobbies__creative">
                <h3>Creative</h3>
                <Chip.Group
                    multiple={true}
                    // value={formValues.hasChildren}
                    // onChange={(event) => handleFormChange('hasChildren', event)}
                    name="hobbies"
                    className="mt-5"
                >
                    {/* <div className="flex flex-gap-10 flex-wrap">
                        <Chip variant="filled" color="pink" value="no">No</Chip>
                        <Chip variant="filled" color="pink" value="yes, livingTogether">Yes. Living together</Chip>
                        <Chip variant="filled" color="pink" value="yes, notLivingTogether">Yes. Not living together</Chip>
                    </div> */}

                    <div className="flex flex-gap-10 flex-wrap">
                        {
                            creativeHobbies?.map((item, i) => <>
                                <Chip variant="filled" size="md" color="pink" value="no">No</Chip>
                            </>)
                        }
                    </div>
                </Chip.Group>

                {/* {formErrors.hasChildren && (
                    <p className="error-message">{formErrors.hasChildren}</p>
                )} */}
            </div>
        </div>
    )
}

export default Hobbies