import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  actionIcon: {
    borderWidth: 2,
    borderColor: theme.colors.cyan[5],
    transition: "250ms all",

    "&:hover": {
      backgroundColor: theme.colors.cyan[5],
      color: theme.colors.gray[1],
    },
  },
  input: {
    width: "100%",
  },
}));

export default useStyles;
