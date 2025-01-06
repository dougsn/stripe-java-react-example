import { Center, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CartItem from "./CardItem.jsx";
import TotalFooter from "./TotalFooter.jsx";
import CustomerDetails from "./CustomerDetails.jsx";
import { Products } from "../../data.jsx";

function HostedCheckout() {
  const [items] = useState(Products);
  return (
    <>
      <Center h={"100vh"} color="black">
        <VStack spacing="24px">
          <Heading>Hosted Checkout Example</Heading>
          {items.map((elem) => {
            return <CartItem data={elem} mode={"checkout"} />;
          })}
          <TotalFooter total={30} mode={"checkout"} />
          <CustomerDetails
            data={items}
            endpoint={"/checkout/hosted"}
            mode={"checkout"}
          />
        </VStack>
      </Center>
    </>
  );
}

export default HostedCheckout;
