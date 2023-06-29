import { Box, Text, Title } from "@mantine/core";

interface props {
  content?: string;
  title?: string;
}

const ToDoItem = ({ content, title }: props) => {
  return (
    <Box>
      <Title order={3}>{title}</Title>
      <Text>{content}</Text>
    </Box>
  );
};

export default ToDoItem;
