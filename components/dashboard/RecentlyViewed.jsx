

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const RecentlyViewed = () => {
  const newArr = new Array(5).fill();

  return (
    <div className="container recentlyViewed">
      {newArr?.map((_item, i) => (
        <div key={i} className="recentlyViewed__singleContainer">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="/dashboard/blank-profile.jpg"
                height={200}
                alt="Norway"
                fit="cover"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Syeda Khatun</Text>
              <Badge color="pink" variant="light" size="md">
                Online 2h ago
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              20 yrs, 5' 5", Muslim,
              <br />
              Bengali Sheikh Lives in Comilla, Chittagong
            </Text>

            <h3 className="text-center pt-15">Connect with her?</h3>

            <Button variant="filled" color="pink" fullWidth mt="md" radius="md">
              Yes
            </Button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default RecentlyViewed;
