import { PlusIcon } from "@modulz/radix-icons";
import {
  ActionIcon,
  TextInput,
  Group,
  Stack,
  Title,
  Alert,
} from "@mantine/core";
import useStyles from "./index.styles";
import { ChangeEvent, useState } from "react";
import { iToDoList } from "@/interfaces/iTodoList";
import { useEventListener } from "@mantine/hooks";
import { v4 as uuidv4 } from "uuid";
import { InfoCircledIcon } from "@modulz/radix-icons";

interface props {
  setToDoList: any;
}

const CreateItem = ({ setToDoList }: props) => {
  const { classes } = useStyles();
  const [todoItem, setToDoItem] = useState<iToDoList>({
    id: uuidv4(),
    content: "",
    name: "",
  });
  const [alert, setAlert] = useState(false);

  const createItem = () => {
    const data = {
      ...todoItem,
    };

    if (data.content?.trim() === "" || data.name?.trim() === "") {
      setAlert(true);
      return;
    }

    setToDoList((prev: iToDoList[]) => {
      return [...prev, data];
    });
    setToDoItem({
      id: uuidv4(),
      content: "",
      name: "",
    });
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlert(false);
    const { name, value } = e.currentTarget;
    setToDoItem((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const ref = useEventListener("click", createItem);

  return (
    <>
      {alert && (
        <Alert
          icon={<InfoCircledIcon />}
          title="Error"
          color="red"
          variant="outline"
        >
          The field should no left empty
        </Alert>
      )}
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
    </>
  );
};

export default CreateItem;
