package com.example.stripe_example;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class PaymentController {

    String STRIPE_API_KEY = System.getenv().get("STRIPE_API_KEY");
    String PRICE_ID = System.getenv().get("PRICE_ID");

    @PostMapping("/checkout/hosted")
    String hostedCheckout(@RequestBody RequestDTO requestDTO) throws StripeException {

        // Configurar a API Key do Stripe
        Stripe.apiKey = STRIPE_API_KEY;
        String clientBaseURL = System.getenv().get("CLIENT_BASE_URL");

        // Encontrar ou criar um cliente no Stripe
        Customer customer = CustomerUtil.findOrCreateCustomer(requestDTO.getCustomerEmail(), requestDTO.getCustomerName());

        // Configurar os parâmetros da sessão de checkout
        SessionCreateParams.Builder paramsBuilder = SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setCustomer(customer.getId())
                //.setPhoneNumberCollection(customer.getPhone())
                .setSuccessUrl(clientBaseURL + "/success")
                .setCancelUrl(clientBaseURL + "/failure");

        // Adicionar o produto existente (usando Price ID do Stripe Dashboard)
        paramsBuilder.addLineItem(
                SessionCreateParams.LineItem.builder()
                        .setQuantity(1L) // Define a quantidade
                        .setPrice(PRICE_ID) // Substitua pelo Price ID do seu produto
                        .build()
        );

        // Criar a sessão e retornar a URL
        Session session = Session.create(paramsBuilder.build());
        return session.getUrl();
    }
}

