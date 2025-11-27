import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import {
  CpuChipIcon,
  HomeIcon,
  InboxStackIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";  

function App() {
  return (
    <>
      <nav className=" flex justify-between p-4 bg-black text-white">
        <div className="flex gap-2">
          <InboxStackIcon className="size-7" />
          <h1 className="text-2xl font-bold">Store</h1>
        </div>
        <div className="flex gap-8">
          <Link to="/">
            <div className="flex gap-2">
              <HomeIcon className="size-5" /> Home
            </div>
          </Link>
          <Link to="/products">
            <div className="flex gap-2">
              <CpuChipIcon className="size-5" /> Products
            </div>
          </Link>
          <Link to="/cart">
            <div className="flex gap-2">
              <ShoppingCartIcon className="size-5" /> Cart
            </div>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

