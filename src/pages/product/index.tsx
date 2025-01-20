import { MdOutlineStarPurple500 } from 'react-icons/md';
// import { MdOutlineStarOutline } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { FiMinus } from 'react-icons/fi';
import ProductGirl from '../../assets/product-girl.jpg';
import ProductImage from '../../assets/product-imgae.jpg';
const ProductDetail = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-4  lg:gap-2'>
        <div className='flex w-full md:w-1/2 gap-2'>
          <div className='grid grid-rows-5'>
            {Array.from({ length: 7 }).map(() => {
              return <img src={ProductImage} className='object-cover w-14' />;
            })}
          </div>
          <div>
            <img src={ProductGirl} className='object-cover h-full' />
          </div>
        </div>

        <div className='flex w-full flex-col gap-4 md:w-1/2 '>
          <h1 className='font-logo text-sm'> FASCO</h1>
          <h2 className='font-logo text-3xl'>Denim Jacket</h2>
          <div className='flex gap-2 items-center'>
            {Array.from([1, 2, 3, 4, 5]).map(() => {
              return <MdOutlineStarPurple500 size={15} />;
            })}
            <p>(3)</p>
          </div>
          <div className='flex gap-4 items-center'>
            <p className='font-logo text-2xl'>$39.00</p>
            <p className='line-through'>$59.00</p>
            <span className='text-xs bg-[#DA3F3F] text-white font-bold p-3 rounded-3xl'>
              SAVE 30%
            </span>
          </div>
          <p className='text-[#8A8A8A] flex gap-3'>
            <FaEye size={20} className='text-black' />
            24 people are viewing this right now
          </p>
          <div className='bg-[#FDEFEE] border-[#F8CCCC] border-2 rounded font-logo flex justify-between text-[#FF706B] text-center p-3'>
            <p className='font-logo text-lg'> Hurry up! Sale ends in:</p>
            <p className='text-xl font-semibold'>00 : 05 : 59 : 07</p>
          </div>
          <div className='flex gap-2 flex-col'>
            <p className='text-[#666666]'>
              Only <span className='font-bold'>9</span>item(s) left in stock!
            </p>
            <div className='w-full bg-gray-200 rounded-full h-1 mb-4 '>
              <div className='bg-[#EF2D2D] h-1 rounded-full w-1/6'></div>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-3'>
              <p className='font-logo'>
                <span className='font-bold'>Size</span> : M
              </p>
              <div className='flex gap-2'>
                <button className='rounded w-11 h-11 bg-black text-white'>
                  M
                </button>
                <button className='rounded w-11 h-11 bg-black text-white'>
                  L
                </button>
                <button className='rounded w-11 h-11 bg-black text-white'>
                  XL
                </button>
                <button className='rounded w-11 h-11 bg-black text-white'>
                  XXL
                </button>
              </div>
              <p className='font-logo'>
                <span className='font-bold'>Color</span> : Blue
              </p>
              <div className='flex gap-2'>
                <button className='rounded-full w-10 h-10 bg-[#8DB4D2] '></button>
                <button className='rounded-full w-10 h-10 bg-black '></button>
                <button className='rounded-full w-10 h-10 bg-[#FFD1DC] '></button>
              </div>
              <p className='font-logo'>
                <span className='font-bold'>Quantity</span>
              </p>
              <div className='flex gap-3'>
                <div className='border-2 border-gray-300 justify-between flex gap-6 rounded items-center px-4 h-11'>
                  <button>
                    <FaPlus size={12} />
                  </button>
                  1
                  <button>
                    <FiMinus size={12} />
                  </button>
                </div>
                <button className='border-2 border-black h-11 rounded font-logo w-full'>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
