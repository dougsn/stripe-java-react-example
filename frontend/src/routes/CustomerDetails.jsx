import {Button, Input, VStack} from "@chakra-ui/react";
import {useState} from "react";

function CustomerDetails(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const onCustomerNameChange = (e) => {
        setName(e.target.value)
    }



    const onCustomerEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const initiatePayment = () => {
        fetch("http://localhost:8080" + props.endpoint, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                items: props.data.map(elem => ({name: elem.name, id: elem.id})),
                customerName: name,
                customerEmail: email,
            })
        })
            .then(r => r.text())
            .then(r => {
                window.location.href = r
            })

    }

    return <>
        <VStack spacing={3} width={'xl'}>
            <Input variant='filled' placeholder='Customer Name' onChange={onCustomerNameChange} value={name}/>
            <Input variant='filled' placeholder='Customer Email' onChange={onCustomerEmailChange} value={email}/>
            <Button onClick={initiatePayment} colorScheme={'green'}>Checkout</Button>
        </VStack>
    </>
}


export default CustomerDetails