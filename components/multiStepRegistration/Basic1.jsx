import useFormContext from "@/hooks/common/useFormContext";
import {
  communities,
  profileFor,
  religions,
} from "@/staticData/InputFields/inputFields";
import { btnBackground } from "@/styles/library/mantine";
import {
  Button,
  Group,
  Input,
  MultiSelect,
  Radio,
  Select,
  TextInput,
} from "@mantine/core";

const Basic1 = () => {
  const { data, handleChange, fieldErrors } = useFormContext();

  const genderDisable =
    data?.basic1postedBy === "My Son" ||
    data?.basic1postedBy === "My Daughter" ||
    data?.basic1postedBy === "My Brother" ||
    data?.basic1postedBy === "My Sister";

  const content = (
    <div className="mutlistep__registration px-10">
      <Select
        size="md"
        placeholder="Select"
        label="Profile For"
        // styles={{ label: labelStyles }}
        data={profileFor}
        value={data.basic1postedBy}
        withAsterisk
        name="basic1postedBy"
        onChange={(event) => handleChange("basic1postedBy", event)}
        error={fieldErrors.basic1postedBy}
      />

      <br />

      <div className="flex flex-gap-10">
        <TextInput
          label="First Name"
          placeholder="First name"
          size="md"
          withAsterisk
          name="basic1firstName"
          value={data.basic1firstName}
          onChange={(event) =>
            handleChange("basic1firstName", event.target.value)
          }
          error={fieldErrors.basic1firstName}
        />

        <TextInput
          // style={{ display: 'flex', alignSelf: 'flex-end' }}
          label="Last Name"
          placeholder="Last name"
          size="md"
          withAsterisk
          name="basic1lastName"
          value={data.basic1lastName}
          onChange={(event) =>
            handleChange("basic1lastName", event.target.value)
          }
          error={fieldErrors.basic1lastName}
        />
      </div>

      <br />

      <Radio.Group
        label="Gender"
        withAsterisk
        name="basic1gender"
        onChange={(event) => handleChange("basic1gender", event)}
        value={data.basic1gender}
        error={fieldErrors.basic1gender}
        className="custom-disable"
      >
        <Group mt="xs">
          <Radio
            disabled={genderDisable}
            checked={data.gender === "Male"}
            color="pink"
            value="Male"
            label="Male"
          />
          <Radio
            disabled={genderDisable}
            checked={data.gender === "Female"}
            color="pink"
            value="Female"
            label="Female"
          />
        </Group>
      </Radio.Group>

      <br />

      <Select
        size="md"
        placeholder="Select religion"
        label="Religion"
        data={religions}
        value={data.basic1religion}
        withAsterisk
        name="basic1religion"
        onChange={(event) => handleChange("basic1religion", event)}
        error={fieldErrors.basic1religion}
        // dropdownPosition="bottom"
      />

      <br />

      <MultiSelect
        size="md"
        placeholder="Select community "
        label="Community "
        data={communities}
        value={data.basic1community}
        withAsterisk
        name="basic1community"
        onChange={(event) => handleChange("basic1community", event)}
        error={fieldErrors.basic1community}
        searchable
      />

      <br />

      {/* <Button size="md" fullWidth style={btnBackground} onClick={handleFormSubmit}>
                Next
            </Button> */}

      <br />
    </div>
  );

  return content;
};
export default Basic1;
