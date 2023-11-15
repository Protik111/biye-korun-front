"use client";
import { Accordion } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

const Faqs = () => {
  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (value) => {
    if (value === expanded) {
      setExpanded(null);
    } else {
      setExpanded(value);
    }
  };

  const accordionControlStyles = {
    root: {
      color: "red",
      fontSize: "100px",
    },
  };

  const faqs = [
    {
      id: "customization",
      value: "What makes Biye Korun the Gem in the matrimony crown?",
      description:
        "Our essence lies in trust, innovation, and dedication. We're not just another platform; we're your ally, ensuring you find the one amidst verified profiles and with optimal privacy.",
    },
    {
      id: "customization2",
      value: "Is my data in safe hands at Biye Korun?",
      description:
        "As safe as in a vault! Your privacy isn't just a word; it's a commitment. We guard your data with top-tier security protocols.",
    },
    {
      id: "customization3",
      value: "A glimpse into Biye Korun's matching magic?",
      description:
        "Think of it as a master chef's secret recipe. Our algorithm combines preferences, intricate profile details, and user activity to serve you the perfect match.",
    },
    {
      id: "customization4",
      value: "Is there a price tag on love at Biye Korun?",
      description:
        "Love is priceless, and so is registering on Biye Korun. But for a gourmet experience, our Premium Plan adds the extra spice!",
    },
    {
      id: "customization5",
      value: "Do you need a hand or have a query at Biye Korun?",
      description:
        "We're all ears and hearts! Reach out to our ever-helpful team.",
    },
  ];

  const items = faqs.map((item) => (
    <Accordion.Item key={item.value} value={item.id}>
      <Accordion.Control
        className="mantive-custom_accordion"
        // icon={expanded === item.value ? <IconMinus /> : <IconPlus />}
      >
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  //  {
  //    faqs.map((faq) => (
  //      <Accordion.Item
  //        key={faq.id}
  //        value={faq.id}
  //        className="mantive-custom_accordion"
  //      >
  //        <Accordion.Control className="mantive-custom_control">
  //          {faq.value}
  //        </Accordion.Control>
  //        <Accordion.Panel>{faq.description}</Accordion.Panel>
  //      </Accordion.Item>
  //    ));
  //  }

  return (
    <div className="faqs py-30" id="faqs">
      <h1 className="text-center heading1V3">FAQs</h1>
      <div className="w-25 m-auto p-15">
        <hr />
      </div>
      {/* <Accordion defaultValue="customization" variant='contained' onChange={handleAccordionChange} chevron={expanded ? <IconMinus /> : <IconPlus />}>
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
                </Accordion> */}
      <div className="faqs__container container mt-30">
        <Accordion value={expanded} onChange={handleAccordionChange}>
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="mantive-custom_accordion"
            >
              <Accordion.Control className="mantive-custom_control">
                {faq.value}
              </Accordion.Control>
              <Accordion.Panel>{faq.description}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>

        {/* <Accordion
          defaultValue="Apples"
          //   classNames={{ chevron: classes.chevron }}
          //   chevron={<IconPlus className={classes.icon} />}
          onChange={(value) => handleAccordionChange(value)}
          //   chevron={expanded ? <IconMinus /> : <IconPlus />}
        >
          {items}
        </Accordion> */}
      </div>
    </div>
  );
};

export default Faqs;
