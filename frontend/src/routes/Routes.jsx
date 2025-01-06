import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Success from "./Sucess";
import Failure from "./Failure";
import HostedCheckout from "./HostedCheckout";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hosted-checkout" element={<HostedCheckout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
