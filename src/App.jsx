import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import {
  Cart,
  Home,
  Login,
  SignUp,
  History,
  Bill,
  Account,
  Product,
  Search,
  Category,
  Checkout
} from "./pages";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/category" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
