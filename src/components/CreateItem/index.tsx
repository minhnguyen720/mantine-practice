import { PlusIcon } from "@modulz/radix-icons";
import { ActionIcon, Input, Group, Stack, Text, Title } from "@mantine/core";
import useStyles from "./index.styles";

interface props {
  toDoList: any;
  setToDoList: any;
}

const CreateItem = ({ toDoList, setToDoList }: props) => {
  const { classes } = useStyles();

  return (
    <Stack>
      <Title order={4}>New to-do Item</Title>
      <Group>
        <Input className={classes.input} />
        <ActionIcon className={classes.actionIcon}>
          <PlusIcon />
        </ActionIcon>
      </Group>
    </Stack>
  );
};

export default CreateItem;
