import "@mantine/core/styles.css";
import { Flex, MantineProvider } from "@mantine/core";
import { Header } from "./Header.tsx";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Flex justify="center">
        <Header></Header>
      </Flex>
    </MantineProvider>
  );
}
