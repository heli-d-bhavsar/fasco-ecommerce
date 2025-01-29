import ProductImage from '../../assets/product-image.png';
const MiniCart = () => {
  return (
    <div className='flex flex-col p-4 gap-6'>
      <h1 className='font-logo text-4xl'>Shopping Cart</h1>
      <h2 className='text-2xl text-[#8A8A8A]'>
        Buy <span>$122.35</span> more and get <span>free shipping</span>
      </h2>
      <div className='flex gap-3'>
        <div>
          <img src={ProductImage} />
        </div>
        <div>
          <p className='font-logo text-xl'>Denim Jacket</p>
          <p className='text-xl'>$14.00</p>
        </div>
      </div>
      <div className='flex gap-2 justify-end'>
        <input type='checkbox' />
        <p>
          For <span className='text-black'>$10.00</span> please wrap the product
        </p>
      </div>
      <div className='h-0.5 w-full bg-black'></div>
      <div className='flex justify-between'>
        <p className='font-logo text-xl'>Subtotal</p>
        <p>$100</p>
      </div>
      <button className='bg-black text-white text-lg w-full py-4 rounded'>
        Checkout
      </button>
    </div>
  );
};

export default MiniCart;
