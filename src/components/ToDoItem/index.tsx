import { ActionIcon, Box, Group, Text, Title } from "@mantine/core";
import { CheckIcon, TrashIcon, Cross1Icon } from "@modulz/radix-icons";
import useStyles from "./index.style";
import { useEventListener } from "@mantine/hooks";
import { iToDoList } from "@/interfaces/iTodoList";
import { useState } from "react";

interface props {
  content?: string;
  title?: string;
  id?: string;
  setToDoList: any;
}

const ToDoItem = ({ content, title, id, setToDoList }: props) => {
  const { classes } = useStyles();
  const [finish, setFinish] = useState<boolean>(false);

  const deleteRef = useEventListener("click", () => {
    setToDoList((prev: iToDoList[]) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  });

  const finishRef = useEventListener("click", () => {
    setFinish(true);
  });
  const unFinishRef = useEventListener("click", () => {
    setFinish(false);
  });

  return (
    <Box>
      <Group>
        <Box className={classes.contentBox}>
          <Title
            className={classes.content}
            order={2}
            opacity={finish ? "60%" : "100%"}
          >
            {title}
          </Title>
          <Text className={classes.content} opacity={finish ? "60%" : "100%"}>
            {content}
          </Text>
        </Box>
        <Group className={classes.actionIcons}>
          <ActionIcon
            className={classes.actionIcon}
            disabled={finish}
            ref={finishRef}
          >
            <CheckIcon />
          </ActionIcon>
          <ActionIcon
            className={classes.actionIcon}
            ref={deleteRef}
            disabled={finish}
          >
            <TrashIcon />
          </ActionIcon>
          {finish && (
            <ActionIcon ref={unFinishRef}>
              <Cross1Icon />
            </ActionIcon>
          )}
        </Group>
      </Group>
    </Box>
  );
};

export default ToDoItem;
