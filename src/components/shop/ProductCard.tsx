import { Product } from '../../interface/Product';

interface ProductCardI {
  product: Product;
}
const ProductCard: React.FC<ProductCardI> = ({ product }) => {
  return (
    <div className='flex flex-col gap-3 border rounded-md p-5 cursor-pointer'>
      <img
        src={product.thumbnail}
        alt={product.title}
        className='object-cover h-96'
      />
      <h3 className='font-logo'>{product.title}</h3>
      <p>$ {product.price}</p>
    </div>
  );
};

export default ProductCard;
