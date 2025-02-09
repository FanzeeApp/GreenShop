import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Detail from "../pages/Product-details";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Thankyou from "../pages/ThankYou";

export const Routerr = () => {
    return (
      <>
        <Routes>  
            <Route path="/" element={<Home /> } />
            <Route path="/details/:id" element={<Detail /> } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<Thankyou />} />

        </Routes>
      </>
    );
  };
  