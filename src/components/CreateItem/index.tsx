import { PlusIcon } from "@modulz/radix-icons";
import { ActionIcon, TextInput, Group, Stack, Title } from "@mantine/core";
import useStyles from "./index.styles";
import { ChangeEvent, useState } from "react";
import { iToDoList } from "@/interfaces/iTodoList";
import { useEventListener } from "@mantine/hooks";

interface props {
  setToDoList: any;
}

const CreateItem = ({ setToDoList }: props) => {
  const { classes } = useStyles();
  const [todoItem, setToDoItem] = useState<iToDoList>({
    content: "",
    name: "",
  });

  const createItem = () => {
    const data = {
      ...todoItem,
    };
    setToDoList((prev: iToDoList[]) => {
      return [...prev, data];
    });
    setToDoItem({
      content: "",
      name: "",
    });
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setToDoItem((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const ref = useEventListener("click", createItem);

  return (
    <Stack>
      <Title order={4}>New to-do Item</Title>
      <ActionIcon className={classes.actionIcon} ref={ref}>
        <PlusIcon />
      </ActionIcon>
      <Group>
        <TextInput
          className={classes.input}
          placeholder="Title"
          value={todoItem.name}
          onChange={(e) => {
            handleOnChange(e);
          }}
          name="name"
        />
        <TextInput
          value={todoItem.content}
          className={classes.input}
          placeholder="Content"
          onChange={(e) => {
            handleOnChange(e);
          }}
          name="content"
        />
      </Group>
    </Stack>
  );
};

export default CreateItem;
