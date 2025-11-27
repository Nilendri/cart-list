import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  updateQuantity,
} from "../redux/cartSlice";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { addProducts } from "../redux/productSlice";

function Product() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const handleAddProduct = () => {
    if (!productName) {
      setError("Product name is");
      return;
    }
    if (!productPrice) {
      setError("Product price is required");
      return;
    }
    const newProduct = {
      id: Math.random(),
      name: productName,
      price: productPrice,
    };
    dispatch(addProducts(newProduct));
    setProductName("");
    setProductPrice("");
  };
  return (
    <section>
      <div className=" border border-gray-200 rounded-md my-8 mx-24 p-8 flex flex-col gap-8">
        <h2 className="text-3xl font-bold">Add New Product</h2>
        <div className=" flex justify-between w-full items-center">
          <div className="flex flex-col w-[48%]">
            <label>Product Name</label>
            <input
              className="border border-gray-200 py-2 px-4 rounded-sm"
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            {!productName && error && (
              <span className="text-red-500 text-sm">Name is required</span>
            )}
          </div>
          <div className="flex flex-col  w-[48%]">
            <label>Price</label>
            <input
              className="border border-gray-200 py-2 px-4 rounded-sm"
              type="number"
              placeholder="Enter price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            {!productPrice && error && (
              <span className="text-red-500 text-sm">Price is required</span>
            )}
          </div>
        </div>
        <button
          onClick={() => handleAddProduct()}
          className="w-full rounded-md cursor-pointer bg-black text-white py-2 flex justify-center items-center">
          <span>
            <PlusIcon className="size-5 text-white   h- 7" />
          </span>
          <span className="">Add Products</span>
        </button>
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="px-24 text-3xl font-bold">All Products</h2>
        {products.length === 0 ? (
          <p className="text-gray-400 flex  justify-center">
            No products created yet. Add your first product above!
          </p>
        ) : (
          <ul className=" gap-2 grid grid-cols-3 mx-24">
            {products.map((p) => (
              <div
                key={p.id}
                className="border w-96 border-gray-200 rounded-md flex flex-col pl-8 gap-3 py-6 hover:shadow-lg">
                <span className="text-xl font-bold">{p.name}</span>
                <span className="text-2xl font-bold">${p.price}</span>
              </div>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Product;
