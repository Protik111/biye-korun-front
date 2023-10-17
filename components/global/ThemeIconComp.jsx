import { ThemeIcon } from "@mantine/core";
import { IconFall } from "@tabler/icons-react";

const ThemeIconComp = ({ iconComp, size = 28, color = "pink" }) => {
  return (
    <ThemeIcon color={color} size={size} radius="xl">
      {iconComp ? iconComp : "B"}
    </ThemeIcon>
  );
};

export default ThemeIconComp;
