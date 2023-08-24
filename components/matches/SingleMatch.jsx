import { Checkbox } from '@mantine/core'
import React from 'react'

const SingleMatch = ({ item }) => {
    const { imageUrl, name, age, height, profession, community, city } = item;
    return (
        <div className="matchesContainer__profile border-1 rounded-10">
            <div className="matchesContainer__profile--image">
                <img src={imageUrl}></img>
            </div>
            <div className="matchesContainer__profile--info">
                <h3>{name}</h3>
                <div className="flex flex-gap-5">
                    <p className='small-text'>{age}{', '}</p>
                    <p className='small-text'>{height}</p>
                </div>
                <p className='small-text'>{profession}</p>
                <p className='small-text'>{community}</p>
                <p className='small-text'>{city}</p>
            </div>
            <div className="matchesContainer__profile--check mt-10">
                <Checkbox
                    color="red"
                />
            </div>
        </div>
    )
}

export default SingleMatch