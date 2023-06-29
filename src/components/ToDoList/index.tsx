import { Stack, createStyles, Center, Divider } from "@mantine/core";
import CreateItem from "../CreateItem";
import { useState } from "react";
import { iToDoList } from "@/interfaces/iTodoList";
import ToDoItem from "../ToDoItem";

const useStyles = createStyles((theme) => ({
  stack: {
    padding: "2rem",
    borderColor: theme.colors.cyan[4],
    borderWidth: "2px",
    width: "fit-content",
    borderRadius: "1rem",
    minWidth: "30%",
  },
  center: {
    height: "100vh",
  },
}));

const ToDoList = () => {
  const { classes } = useStyles();
  const [toDoList, setToDoList] = useState<iToDoList[]>([]);

  return (
    <Center className={classes.center}>
      <Stack spacing="md" className={classes.stack}>
        <CreateItem setToDoList={setToDoList} />
        {toDoList.length > 0 && <Divider />}
        {toDoList.map((item, index) => {
          return (
            <ToDoItem
              key={index}
              content={item.content}
              title={item.name}
              id={item.id}
              setToDoList={setToDoList}
            />
          );
        })}
      </Stack>
    </Center>
  );
};

export default ToDoList;
