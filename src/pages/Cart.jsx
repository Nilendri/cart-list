import {
  ArrowLongRightIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <div className=" p-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </div>
      {cart.length > 0 ? (
        <table className="mt-10 w-full pl-4">
          <thead>
            <tr className="border">
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className=" p-4">
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td className="">₹{item.price * item.quantity}</td>

                <td>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => dispatch(addToCart(item))}>+</button>
                </td>
                <td>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className=" flex flex-col items-center gap-8">
          <ShoppingCartIcon className="size-15 text-gray-400" />
          <p className="text-gray-400">Your cart is empty</p>
          <Link className="flex" to="/">
            <button className="bg-black text-white px-6 py-2 rounded-xl cursor-pointer">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
