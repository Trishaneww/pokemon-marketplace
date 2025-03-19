import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  isOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
  cartItems: any[]; // Replace with your cart item type
  addToCart: (item: any) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const toggleCart = () => setIsOpen(!isOpen);
  const closeCart = () => setIsOpen(false);
  const addToCart = (item: any) => setCartItems([...cartItems, item]);

  return (
    <CartContext.Provider value={{ isOpen, toggleCart, closeCart, cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
