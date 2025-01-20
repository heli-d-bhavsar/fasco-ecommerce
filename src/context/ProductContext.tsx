import { createContext, useContext, useState } from 'react';
import { Product } from '../interface/Product';

export interface ProductContextI {
  product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}
export const ProductContext = createContext<ProductContextI | null>(null);

interface ProductProviderI {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<ProductProviderI> = ({ children }) => {
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext) as ProductContextI;
};
