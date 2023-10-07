import { createStyles, rem } from "@mantine/core";

export const labelStyles = {
  color: "white",
};

export const selectMobileStyles = {
  width: "150px",
  "@media (max-width: 640px)": {
    width: "250px",
  },
};

export const selectMobileStylesV2 = {
  width: "100px",
  "@media (max-width: 640px)": {
    width: "250px",
  },
};
export const selectMultiStyles = {
  width: "230px",
  "@media (max-width: 640px)": {
    width: "250px",
  },
};

export const logininput = {
  width: "300px",
  "@media (max-width: 640px)": {
    width: "250px",
  },
  "@media (max-width: 400px)": {
    width: "200px",
  },
};

export const btnBackground = {
  // backgroundColor: '#F143CB',
  backgroundColor: "#FD123F",

  "&:hover": {
    backgroundColor: "#9880E7",
  },
};

export const fontSizeMnd = {
  fontSize: "16px",
};

export const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    border: `${rem(1)} solid transparent`,
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease",

    "&[data-active]": {
      transform: "scale(1.03)",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    "&[data-rotate]": {
      transform: "rotate(-90deg)",
    },
  },
}));
