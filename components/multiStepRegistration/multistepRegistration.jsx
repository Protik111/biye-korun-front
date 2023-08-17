import { communities, profileFor, religions } from "@/staticData/InputFields/inputFields"
import { Button, Group, Input, Radio, Select, TextInput } from "@mantine/core"

const MultistepRegistration = () => {
    return (
        <div className="mutlistep__registration px-15">
            <Select
                size="md"
                placeholder="Select"
                label="Profile for"
                defaultValue="20"
                // styles={{ label: labelStyles }}
                data={profileFor}
                withAsterisk
            />

            <br />

            <div className="flex flex-gap-10">
                <TextInput
                    label="Your Name"
                    placeholder="First name"
                    size="md"
                    withAsterisk

                />

                <TextInput
                    style={{ display: 'flex', alignSelf: 'flex-end' }}
                    placeholder="Last name"
                    size="md"
                    withAsterisk
                />
            </div>

            <br />

            <Radio.Group
                name="favoriteFramework"
                label="Gender"
                withAsterisk
            >
                <Group mt="xs">
                    <Radio color="pink" value="male" label="Male" />
                    <Radio color="pink" value="Female" label="Female" />
                </Group>
            </Radio.Group>

            <br />

            <Select
                size="md"
                placeholder="Select Religion"
                label="Religion"
                data={religions}
            />

            <br />


            <Select
                size="md"
                placeholder="Select Community"
                label="Community"
                data={communities}
            />

            <br />


            <Button size="md" fullWidth color="pink">
                Next
            </Button>

            <br />

        </div>
    )
}

export default MultistepRegistration