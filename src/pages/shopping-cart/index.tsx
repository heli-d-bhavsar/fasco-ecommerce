import { FaPlus } from 'react-icons/fa';
import { FiMinus } from 'react-icons/fi';
import { useCartContext } from '../../context/CartContext';

const ShoppingCart = () => {
  const { cart } = useCartContext();

  return (
    <div>
      <h1 className='font-logo text-[42px] leading-8 items-center flex justify-center'>
        Shopping Cart
      </h1>

      <table className='table-auto w-full mt-8'>
        <thead className='font-logo text-xl p-4'>
          <tr>
            <th className='font-logo text-left p-10 border-b-2'>Product</th>
            <th className='font-logo text-left p-10 border-b-2'>Price</th>
            <th className='font-logo text-left p-10 border-b-2'>Quantity</th>
            <th className='font-logo text-left p-10 border-b-2'>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.products &&
            cart.products.map((cartItem, index) => {
              return (
                <tr key={index}>
                  <td className='p-4 text-left'>
                    <div className='flex'>
                      <div className='w-1/2'>
                        <img
                          src={cartItem.thumbnail}
                          className='object-cover w-full h-auto'
                        />
                      </div>
                      <div className='w-1/2 flex flex-col gap-3 justify-center'>
                        <p className='font-logo'>{cartItem.title}</p>
                      </div>
                    </div>
                  </td>
                  <td className='font-logo text-left p-4'>{cartItem.price}</td>
                  <td className='p-4'>
                    <div className='border-2 border-gray-300 justify-between flex rounded items-center px-4 h-11'>
                      <button>
                        <FaPlus size={8} />
                      </button>
                      {cartItem.quantity}
                      <button>
                        <FiMinus size={8} />
                      </button>
                    </div>
                  </td>
                  <td className='font-logo text-left p-4'>
                    {cartItem.price * cartItem.quantity}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div className='flex justify-end flex-col items-end gap-6'>
        <div className='flex gap-2'>
          <input type='checkbox' />
          <p className='text-[#8A8A8A] text-xl'>
            For <span className='text-black'>$10.00</span> please wrap the
            product
          </p>
        </div>

        <div className='h-[1px] bg-black w-1/3'></div>
        <div className='flex justify-between gap-2 font-logo text-xl'>
          <p>Subtotal : </p>
          <p>{cart?.total}</p>
        </div>
        <button className='bg-black text-white w-[152px] h-[56px] rounded-xl'>
          Checkout
        </button>
        <button className='font-logo underline text-xl'>View Cart</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
