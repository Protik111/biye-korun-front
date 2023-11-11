import { Autocomplete, Input, Select, Textarea } from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import {
  IconArrowDown,
  IconCalendarStats,
  IconChevronDown,
} from "@tabler/icons-react";
import React from "react";
import { useRef } from "react";
import { ActionIcon, rem } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";

const EventsInquiry = () => {
  const ref = useRef(null);

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="white"
      onClick={() => ref.current?.showPicker()}
    >
      <IconClock
        style={{ width: rem(26), height: rem(26), color: "white" }}
        stroke={1.8}
      />
    </ActionIcon>
  );

  return (
    <div className="eventsInquiry">
      <div className="eventsInquiry__wrapper container">
        <div className="eventsInquiry__wrapper--left">
          <img src="/landing/Footer.jpg" alt="bride-groom" loading="lazy" />
        </div>

        <div className="eventsInquiry__wrapper--right">
          <h2>Events Inquiry</h2>
          <form action="">
            <div>
              <Input
                width="100%"
                variant="filled"
                radius="md"
                size="xl"
                placeholder="Your Name..."
                name="fullName"
              />
              <br />
              {/* <Input width="100%" variant="filled" radius="md" size="xl" placeholder="Your Partner Name *" />
                        <br /> */}
              <Input
                width="100%"
                variant="filled"
                radius="md"
                size="xl"
                placeholder="Email *"
                name="email"
              />
              <br />
              <Input
                width="100%"
                variant="filled"
                radius="md"
                size="xl"
                placeholder="Contact Number *"
              />
              <br />
              <DatePickerInput
                clearable
                // defaultValue={today}
                // description="Years must be at least 18"
                placeholder="Preferred Event Date *"
                mx="auto"
                size="xl"
                radius="md"
                rightSection={<IconCalendarStats color="white" />}
                // maw={400}
                // withAsterisk
                // value={data.basic2dob}
                // onChange={(event) => handleChange("basic2dob", event)}
                // error={fieldErrors.basic2dob}
                //disableBeforeDate={minDate} // Use the disableDate function
                // maxDate={generate18YearBefore()}
              />
              <br />
              {/* <Select
              placeholder="Select Event *"
           
              data={["Event 1", "Event 2", "Event 3"]}
              size="xl"
              radius="md"
              rightSection={<IconChevronDown color="white" />}
              // value={["Event 1", "Event 2", "Event 3"]}
              // name="basic2country"
              // onChange={(event) => handleChange("basic2country", event)}
              // error={fieldErrors.basic2country}
              searchable
            /> */}

              <br />
              {/* <Autocomplete
              searchable
              placeholder="Select How Many People?"
              // styles={{ label: labelStyles }}
              // data={countries}
              // data={countryList}
              data={["1", "2", "3", "4", "5", "6"]}
              size="xl"
              radius="md"
              rightSection={<IconChevronDown color="white" />}
              // value={["Event 1", "Event 2", "Event 3"]}
              // name="basic2country"
              // onChange={(event) => handleChange("basic2country", event)}
              // error={fieldErrors.basic2country}
            />
            <br /> */}
              {/* <TimeInput
              size="xl"
              radius="md"
              // label="Click icon to show browser picker"
              placeholder="Set The Timer"
              ref={ref}
              rightSection={pickerControl}
            />
            <br /> */}
              <Textarea
                size="xl"
                radius="md"
                minRows={3}
                placeholder="Event Description *"
              />
              <br />
              <button className="btn">Submit Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventsInquiry;
