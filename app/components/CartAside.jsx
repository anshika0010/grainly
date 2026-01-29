"use client";
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";
import { anton } from "../lib/fonts";

const CartAside = () => {
  const { isCartOpen, closeCart, cartItems, updateQty, removeFromCart } =
    useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/50 z-40
        ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-[420px] bg-white z-50
        transform transition-transform
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between p-4 border-b">
          <h2 className={`${anton.className}`}>Your Cart</h2>
          <button onClick={closeCart} className="cursor-pointer">
            <X />
          </button>
        </div>

        {/* Items */}
        <div className="p-4 space-y-4 overflow-y-auto">
          {cartItems?.length === 0 && (
            <p className="text-center text-gray-500">Cart is empty</p>
          )}

          {cartItems.map((item) => (
            <div
              key={item.productId}
              className="relative flex gap-3 bg-gray-100 p-2 rounded-lg"
            >
              {/* Delete icon */}
              <button
                onClick={() => removeFromCart(item.productId)}
                className="absolute cursor-pointer top-2 right-1 text-gray-500 hover:text-red-500"
              >
                <FiTrash size={16} />
      
              </button>

              <img
                src={item.image}
                className="w-20 h-20 object-cover rounded-md"
                alt={item.flavour}
              />

              <div className="flex-1 text-black">
                <h4 className="font-semibold">{item.flavour}</h4>
                <p>₹{item.price}</p>

                <div className="flex items-center gap-3 mt-1">
                  <button
                    onClick={() => updateQty(item.productId, item.quantity - 1)}
                    className="p-1 border rounded cursor-pointer"
                  >
                    <FiMinus />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQty(item.productId, item.quantity + 1)}
                    className="p-1 border rounded cursor-pointer"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <button className="button-2 w-full">Checkout</button>
        </div>
      </aside>
    </>
  );
};

export default CartAside;
