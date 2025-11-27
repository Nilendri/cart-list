import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

function Home() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  console.log(products);

  return (
    <div className="flex flex-col gap-5">
      <div className=" p-8">
        <h1 className="text-3xl font-bold">Welcome to Store</h1>
        <p className="text-gray-400">
          Browse our amazing collection of products
        </p>
      </div>
      {products.length > 0 ? (
        <ul className=" gap-2 grid grid-cols-3 mx-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="border w-96 border-gray-200 rounded-md flex flex-col px-5 gap-3 py-6 hover:shadow-lg">
              {/* <div> */}
              <span className="text-xl font-bold">{p.name}</span>
              <span className="text-2xl font-bold">${p.price}</span>
              {/* </div> */}
              <button
                onClick={() => dispatch(addToCart(p))}
                className="bg-black text-white px-4 py-1 mt-3 rounded-md hover:bg-gray-700 cursor-pointer">
                + Add to Cart
              </button>
            </div>
          ))}
        </ul>
      ) : (
        // <div>
        <div className=" flex flex-col items-center gap-8">
          <p className="text-gray-400">No products available yet.</p>
          <Link className="flex" to="/products">
            <span className="font-bold text-md">Create Your first product</span>
            <ArrowLongRightIcon className="size-5 h-7  " />
          </Link>
        </div>
        // </div>
      )}
    </div>
  );
}

export default Home;
