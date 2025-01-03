import React from "react";
import "../components/Login/variables.scss";
import { createLazyFileRoute } from "@tanstack/react-router";
import CheckoutLayout from "../layouts/CheckoutLayout";
import PaymentOptions from "../components/Payment/Payment/Payment";
import Protected from "../components/Auth/Protected";

export const Route = createLazyFileRoute("/payment")({
  component: () => (
    <Protected roles={[1]}>
      <Payment />
    </Protected>
  ),
});

function Payment() {
  return (
    <CheckoutLayout 
      openPayment={true} 
      openSuccess={false}
      isPayment={true}
      isSaved={false}
    >
      <PaymentOptions />
    </CheckoutLayout>
  );
}
