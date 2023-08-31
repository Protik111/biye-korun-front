import { Accordion } from '@mantine/core'

const Faqs = () => {

    const accordionControlStyles = {
        root: {
            color: 'red',
            fontSize: '100px'
        },
    };

    return (
        <div className='faqs py-30'>
            <h2 className='text-center text-white'>FAQs</h2>
            <div className='faqs__container container'>
                <Accordion defaultValue="customization" variant='contained'>
                    <Accordion.Item value="customization" className='mantive-custom_accordion'>
                        <Accordion.Control className='mantive-custom_control'>What is Biye Korun and how does it differ from other matrimony websites?</Accordion.Control>
                        <Accordion.Panel>Answer: The mission of the distinctive marriage website Biye Korun is to assist people in finding the ideal life partner. We stand apart from other websites because to our sophisticated matching system, verified profiles, and committed assistance. In order to provide the best matchmaking experience, we put our users' security, privacy, and contentment first.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="accordion2" className='mantive-custom_accordion'>
                        <Accordion.Control className='mantive-custom_control'>Is my personal information safe and private with Biye Korun?</Accordion.Control>
                        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="accordion3" className='mantive-custom_accordion'>
                        <Accordion.Control className='mantive-custom_control'>How does the matchmaking algorithm of Biye Korun work?</Accordion.Control>
                        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                    </Accordion.Item>


                    <Accordion.Item value="accordion4" className='mantive-custom_accordion'>
                        <Accordion.Control className='mantive-custom_control'>Do I need to pay to register on Biye Korun?</Accordion.Control>
                        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="accordion5" className='mantive-custom_accordion'>
                        <Accordion.Control className='mantive-custom_control'>How can I contact Biye Korun's customer support in case of issues or queries?</Accordion.Control>
                        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Faqs