import { imageUrl } from '@/staticData/image';
import { calculateAge } from '@/utils/calculateAge';
import { heightCalculator } from '@/utils/heightCalculator';
import { Checkbox } from '@mantine/core'
import React from 'react'

const SingleMatch = ({ item, handleUserIds }) => {
    const { dateOfBirth, firstName, lastName, appearance: { height } = {}, community, country, location: { city } = {}, lifestyle: { maritalStatus } = {}, profilePicture: { url } = {} } = item;

    const handleUserIdsCheckBox = (e, user) => {
        // console.log('e', e.currentTarget.checked, user);
        if (e.currentTarget.checked) {
            handleUserIds(user)
        } else {
            handleUserIds(user, true)
        }
    }

    return (
        <div className="matchesContainer__profile border-1 rounded-10">
            <div className="matchesContainer__profile--image">
                <img src={url?.medium || imageUrl}></img>
            </div>
            <div className="matchesContainer__profile--info">
                <h3>{firstName + " " + lastName}</h3>
                <div className="flex flex-gap-5">
                    <p className='small-text'>{calculateAge(dateOfBirth)}</p>
                    <p className='small-text'>{heightCalculator(height)}</p>
                </div>
                <p className='small-text'>{maritalStatus}</p>
                <p className='small-text'>{community}</p>
                <p className='small-text'>{country}, {city}</p>
            </div>
            <div className="matchesContainer__profile--check mt-10">
                <Checkbox
                    color="red"
                    onChange={(e) => handleUserIdsCheckBox(e, item)}
                />
            </div>
        </div>
    )
}

export default SingleMatch