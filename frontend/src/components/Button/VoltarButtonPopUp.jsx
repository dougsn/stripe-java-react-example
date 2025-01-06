import { Button, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const VoltarButtonPopUp = ({ endpoint, title = "Voltar" }) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <Button
      bgColor={colorMode === "dark" ? "blackAlpha.300" : "blackAlpha.500"}
      color={colorMode === "dark" ? "" : "white"}
      _hover={{
        bgColor: colorMode === "dark" ? "blackAlpha.400" : "blackAlpha.600",
      }}
      onClick={() => navigate(`${endpoint}`)}
    >
      {title}
    </Button>
  );
};
