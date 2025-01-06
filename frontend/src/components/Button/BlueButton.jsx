import { Button, useColorMode } from "@chakra-ui/react";

export const BlueButton = ({ text, fontSize, width }) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      w={width}
      fontSize={fontSize}
      bgColor={colorMode === "dark" ? "messenger.800" : "messenger.500"}
      color={colorMode === "dark" ? "" : "white"}
      _hover={{
        bgColor: colorMode === "dark" ? "messenger.900" : "messenger.600",
      }}
    >
      {text}
    </Button>
  );
};
