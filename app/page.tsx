"use client";

import ToDoList from "@/components/ToDoList";
import { MantineProvider } from "@mantine/core";

export default function Home() {
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
      }}
    >
      <ToDoList />
    </MantineProvider>
  );
}
