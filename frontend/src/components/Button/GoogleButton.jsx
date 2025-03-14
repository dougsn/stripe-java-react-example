import { FcGoogle } from "react-icons/fc";
import { Button, Center, Text } from "@chakra-ui/react";

export default function GoogleButton() {
  return (
    <Center>
      <Button
        w={"full"}
        maxW={"md"}
        variant={"outline"}
        leftIcon={<FcGoogle />}
      >
        <Center>
          <Text>Entre com o Google</Text>
        </Center>
      </Button>
    </Center>
  );
}
