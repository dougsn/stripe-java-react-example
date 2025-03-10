import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

function CartItem(props) {
  console.log(props)
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      width={"xl"}
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={props.data.image}
      />
      <Stack mt="6" spacing="3">
        <CardBody>
          <VStack spacing={"3"} alignItems={"flex-start"}>
            <Heading size="md">{props.data.name}</Heading>
            <VStack spacing={"1"} alignItems={"flex-start"}>
              <Text>{props.data.description}</Text>
              {props.data.mode === "checkout" ? (
                <Text>{"Quantity: " + props.data.quantity}</Text>
              ) : (
                <></>
              )}
            </VStack>
          </VStack>
        </CardBody>

        <CardFooter>
          <VStack alignItems={"flex-start"}>
            <Text color="blue.600" fontSize="2xl">
              {"$" + props.data.price}
            </Text>
          </VStack>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default CartItem;
