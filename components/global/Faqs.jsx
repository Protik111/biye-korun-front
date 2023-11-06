"use client"
import { Accordion } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react';

const Faqs = () => {

    const accordionControlStyles = {
        root: {
            color: 'red',
            fontSize: '100px'
        },
    };

    const faqs = [
        {
            value: "What makes Biye Korun the Gem in the matrimony crown?",
            description: "Our essence lies in trust, innovation, and dedication. We're not just another platform; we're your ally, ensuring you find the one amidst verified profiles and with optimal privacy."
        },
        {
            value: "Is my data in safe hands at Biye Korun?",
            description: "As safe as in a vault! Your privacy isn't just a word; it's a commitment. We guard your data with top-tier security protocols."
        },
        {
            value: "A glimpse into Biye Korun's matching magic?",
            description: "Think of it as a master chef's secret recipe. Our algorithm combines preferences, intricate profile details, and user activity to serve you the perfect match."
        },
        {
            value: "Is there a price tag on love at Biye Korun?",
            description: "Love is priceless, and so is registering on Biye Korun. But for a gourmet experience, our Premium Plan adds the extra spice!"
        },
        {
            value: "Do you need a hand or have a query at Biye Korun?",
            description: "We're all ears and hearts! Reach out to our ever-helpful team."
        },
    ]

    return (
        <div className='faqs py-30' id="faqs">
            <h1 className='text-center'>Frequently Asked Questions</h1>
            <div className='w-25 m-auto p-15'>
                <hr />
            </div>
            <div className='faqs__container container mt-30'>
                <Accordion defaultValue="customization" variant='contained' chevron={<IconPlus />}>
                    <Accordion.Item value="customization" className='mantive-custom_accordion'>
                        <Accordion.Control className='mantive-custom_control'>What makes Biye Korun the Gem in the matrimony crown?</Accordion.Control>
                        <Accordion.Panel>Our essence lies in trust, innovation, and dedication. We're not just another platform; we're your ally, ensuring you find the one amidst verified profiles and with optimal privacy.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="accordion2" className='mantive-custom_accordion'>
                        <Accordion.Control className='mantive-custom_control'>Is my data in safe hands at Biye Korun?</Accordion.Control>
                        <Accordion.Panel>As safe as in a vault! Your privacy isn't just a word; it's a commitment. We guard your data with top-tier security protocols.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="accordion3" className='mantive-custom_accordion'>
                        <Accordion.Control className='mantive-custom_control'>A glimpse into Biye Korun's matching magic?</Accordion.Control>
                        <Accordion.Panel>Think of it as a master chef's secret recipe. Our algorithm combines preferences, intricate profile details, and user activity to serve you the perfect match.</Accordion.Panel>
                    </Accordion.Item>


                    <Accordion.Item value="accordion4" className='mantive-custom_accordion'>
                        <Accordion.Control className='mantive-custom_control'>Is there a price tag on love at Biye Korun?</Accordion.Control>
                        <Accordion.Panel>Love is priceless, and so is registering on Biye Korun. But for a gourmet experience, our Premium Plan adds the extra spice!</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="accordion5" className='mantive-custom_accordion'>
                        <Accordion.Control className='mantive-custom_control'>Do you need a hand or have a query at Biye Korun?</Accordion.Control>
                        <Accordion.Panel>We're all ears and hearts! Reach out to our ever-helpful team.</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Faqs