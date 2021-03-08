import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../pages/api/products";

export interface Cart {
  [id: string]: number;
}

interface StoreValue {
  cart: Cart;
  handleAddCart(product: Product, quantity: number): void;
  quantity: number;
}

const storeContext = createContext<StoreValue>(null);
const { Provider } = storeContext;

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState<Cart>({});

  useEffect(() => {
    const initialCart = JSON.parse(localStorage.getItem("cart")) ?? {};
    setCart(initialCart);
  }, []);

  const quantity = Object.values(cart).reduce((sum, q) => {
    sum += q;
    return sum;
  }, 0);

  const handleAddCart = (p: Product, quantity: number) => {
    setCart((value) => {
      if (!value[p.id]) {
        value[p.id] = quantity;
      } else {
        value[p.id] += quantity;
      }
      localStorage.setItem("cart", JSON.stringify(value));
      return { ...value };
    });
  };

  const value = { cart, quantity, handleAddCart };

  return <Provider value={value}>{children}</Provider>;
};

const useStore = () => {
  return useContext(storeContext);
};

export default useStore;
