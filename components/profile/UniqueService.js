import React from "react";

import { Accordion } from "@mantine/core";
const groceries = [
  {
    emoji: "🍎",
    value: "Engagement plan",
    description: "Coming Soon...",
  },
  {
    emoji: "🍌",
    value: "Wedding Plan",
    description: "Coming Soon...",
  },
  {
    emoji: "🥦",
    value: "Gift Collection",
    description: "Coming Soon...",
  },
  {
    emoji: "🥦",
    value: "Honeymoon Plan",
    description: "Coming Soon...",
  },
];
const UniqueService = () => {
  const items = groceries.map((item) => (
    <Accordion.Item
      key={item.value}
      value={item.value}
      style={{ backgroundColor: "white" }}
    >
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <div className="">
      <h1 className="pb-20">Unique Service</h1>
      <Accordion variant="separated" radius="md">
        {items}
      </Accordion>
    </div>
  );
};

export default UniqueService;
