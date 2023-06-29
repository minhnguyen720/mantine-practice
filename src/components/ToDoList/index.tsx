import { Stack, createStyles, Center } from "@mantine/core";
import CreateItem from "../CreateItem";
import { useState } from "react";
import { iToDoList } from "@/interfaces/iTodoList";

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
        <CreateItem toDoList={toDoList} setToDoList={setToDoList} />

        {toDoList.map((item, index) => {
          return <div>Hello world {index}</div>;
        })}
      </Stack>
    </Center>
  );
};

export default ToDoList;
