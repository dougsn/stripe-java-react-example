import { Button, useColorMode } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export const CreateButtonWithSubmit = ({ isLoadingBtn, title = "Salvar" }) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      isLoading={isLoadingBtn}
      type="submit"
      bgColor={colorMode === "dark" ? "messenger.800" : "messenger.500"}
      color={colorMode === "dark" ? "" : "white"}
      _hover={{
        bgColor: colorMode === "dark" ? "messenger.900" : "messenger.600",
      }}
    >
      {title}
    </Button>
  );
};
