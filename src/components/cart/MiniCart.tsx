import { useNavigate } from 'react-router';
import { useCartContext } from '../../context/CartContext';
const MiniCart = () => {
  const { cart } = useCartContext();
  const navigate = useNavigate();

  return (
    <div className='flex flex-col p-4 gap-6 overflow-y-auto w-full h-full'>
      <h1 className='font-logo text-4xl'>Shopping Cart</h1>
      <h2 className='text-2xl text-[#8A8A8A]'>
        Buy <span>$122.35</span> more and get <span>free shipping</span>
      </h2>

      {cart?.products.map((product) => {
        return (
          <div className='flex gap-3'>
            <div>
              <img src={product.thumbnail} />
            </div>
            <div>
              <p className='font-logo text-xl'>{product.title}</p>
              <p className='text-xl'>{product.price}</p>
            </div>
          </div>
        );
      })}

      <div className='flex gap-2 justify-end'>
        <input type='checkbox' />
        <p>
          For <span className='text-black'>$10.00</span> please wrap the product
        </p>
      </div>
      <div className='h-0.5 w-full bg-black'></div>
      <div className='flex justify-between'>
        <p className='font-logo text-xl'>Subtotal</p>
        <p>{cart?.total}</p>
      </div>
      <button
        className='bg-black text-white text-lg w-full py-4 rounded'
        onClick={() => navigate('/cart')}
      >
        Checkout
      </button>
    </div>
  );
};

export default MiniCart;
