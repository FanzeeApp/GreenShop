import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Detail from "../pages/Product-details";
import Cart from "../pages/Cart";

export const Routerr = () => {
    return (
      <>
        <Routes>  
            <Route path="/" element={<Home /> } />
            <Route path="/details/:id" element={<Detail /> } />
            <Route path="/cart" element={<Cart />} />

        </Routes>
      </>
    );
  };
  