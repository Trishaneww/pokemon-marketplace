import { Minus, Plus, X } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "./CartContext";
import Image from "next/image";
import { pokemonCards } from "@/data";
import { Button } from "./ui/button";

const CartDrawer = () => {
  const { isOpen, closeCart, cartItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-10 z-40"
          onClick={closeCart}
        />
      )}

      {/* Sliding Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed right-0 top-0 w-[90%] lg:w-[25%] h-full bg-white shadow-xl z-50 py-8 flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-8 w-full px-5">
          <h2 className="text-lg tracking-widest">YOUR CART</h2>
          <button onClick={closeCart}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col overflow-y-auto mt-4 h-full ">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="border-b py-2">
                <h3 className="text-md font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-2 pt-8 px-5 items-stretch justify-between h-full">
            <section className="flex flex-col gap-4 py-8 lg:px-5">
              {pokemonCards.slice(12, 14).map((pokemon, idx) => (
                <div className="flex gap-2 justify-between lg:px-4 py-2" key={idx}>
                  <Image height={80} width={80} src={pokemon.src} alt="" />
                  <section className="flex flex-col gap-2">
                    <p className="tracking-widest text-sm">{pokemon.title}</p>
                    <p className="text-sm">{pokemon.price}</p>
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-1 border-[1.5px] border-gray-300 w-[105px] h-[40px] my-4">
                        <div className="w-[35px] h-[40px] flex items-center justify-center">
                          <Minus size={15} />
                        </div>
                        <div className="w-[35px] h-[40px] flex items-center justify-center text-sm">
                          <p>1</p>
                        </div>
                        <div className="w-[35px] h-[40px] flex items-center justify-center">
                          <Plus size={15} />
                        </div>
                      </div>
                      <p className="underline text-sm">Remove</p>
                    </div>
                  </section>
                </div>
              ))}
            </section>

              <footer className="flex flex-col py-2 px-5 gap-4 border-t">
                <p className="text-gray-500 mt-10 text-sm">
                  Taxes and shipping will be calculated at checkout
                </p>
                <Button className="tracking-widest h-[45px] w-full">
                  VIEW CART
                </Button>
                <Button className="tracking-widest h-[45px] w-full">
                  CHECKOUT NOW
                </Button>
              </footer>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default CartDrawer;
