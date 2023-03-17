import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Cart, Home, Login, SignUp, History, Bill, Account } from "./pages";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/history" element={<History />}/>
        <Route path="/bill" element={<Bill />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
