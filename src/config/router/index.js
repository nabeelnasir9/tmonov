import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  Login,
  SignUp,
  TomnovGenerate,
  IndividualCardReview,
  Account,
  Shipping,
  Payment,
  ContactUs,
  OrderHistory
} from "../../pages";
const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tomnov-generate" element={<TomnovGenerate />} />
        <Route
          path="/individual-card-review"
          element={<IndividualCardReview />}
        />
        <Route path="/account" element={<Account />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
