import { Loader } from '@mantine/core'
import React from 'react'

const LoaderWithText = ({ text = "", color = "white", textColor = "white", fontSize = "16px" }) => {
    return (
        <div className='flex flex-gap-5 align-center'>
            <Loader size="xs" color={color} /> <p style={{ color: textColor, fontSize }}>{text}</p>
        </div>
    )
}

export default LoaderWithText