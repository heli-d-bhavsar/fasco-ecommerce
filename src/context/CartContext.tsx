import { createContext, useContext, useEffect, useState } from 'react';
import { Cart } from '../interface/Cart';
// import { useAuthContext } from './AuthContext';

export interface CartContextI {
  cart: Cart | null;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
}

export const CartContext = createContext<CartContextI | null>(null);

interface CartProviderI {
  children: React.ReactNode;
}
export const CartProvider: React.FC<CartProviderI> = ({ children }) => {
  // const { user } = useAuthContext();
  const [cart, setCart] = useState<Cart>({
    id: '',
    discountedTotal: 0,
    products: [],
    total: 0,
    totalProducts: 0,
    totalQuantity: 0,
  });

  useEffect(() => {
    const data = localStorage.getItem('cart') || '{}';
    const parseData = JSON.parse(data) as Cart;
    if (parseData && parseData.products) {
      setCart({ ...parseData });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext) as CartContextI;
};
