import { MdOutlineStarPurple500 } from 'react-icons/md';
// import { MdOutlineStarOutline } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { FiMinus } from 'react-icons/fi';
import React, { useEffect, useState } from 'react';
import { Product } from '../../interface/Product';
import { useParams } from 'react-router';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import MiniCart from '../../components/cart/MiniCart';
import { useCartContext } from '../../context/CartContext';

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = React.useState(false);
  const { cart, setCart } = useCartContext();
  const { productId } = useParams();

  useEffect(() => {
    try {
      fetch(`https://dummyjson.com/products/${productId}`).then((response) =>
        response.json().then((data: Product) => {
          setProduct(data);
        })
      );
    } catch (e) {
      console.log(e);
    }
  }, [productId]);

  if (!product) {
    return;
  }

  const addToCart = () => {
    if (cart && cart.products) {
      setCart({
        ...cart,
        totalProducts: cart.totalProducts + quantity,
        total: cart.total + product.price * quantity,
        discountedTotal:
          cart.discountedTotal +
          product.discountPercentage * product.price * quantity,
        products: [
          ...cart.products,
          {
            id: product.id,
            price: product.price,
            discountPercentage: product.discountPercentage,
            discountedTotal:
              product.discountPercentage * product.price * quantity,
            quantity: quantity,
            title: product.title,
            thumbnail: product.thumbnail,
            total: product.price * quantity,
          },
        ],
      });
    }
    setIsOpen(true);
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className='mb-20'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex w-full md:w-1/2 gap-2'>
            <div className='grid grid-rows-5'>
              {product?.images.map((image, index) => {
                return (
                  <img src={image} className='object-cover w-14' key={index} />
                );
              })}
            </div>
            <div>
              <img src={product?.thumbnail} className='object-cover h-full' />
            </div>
          </div>

          <div className='flex w-full flex-col gap-4 md:w-1/2 '>
            <h1 className='font-logo text-sm'> FASCO</h1>
            <h2 className='font-logo text-3xl'>{product?.title}</h2>
            <div className='flex gap-2 items-center'>
              {Array.from([1, 2, 3, 4, 5]).map(() => {
                return <MdOutlineStarPurple500 size={15} />;
              })}
              <p>(3)</p>
            </div>
            <div className='flex gap-4 items-center'>
              <p className='font-logo text-2xl'>${product?.price}</p>
              <p className='line-through'>
                {product?.price
                  ? (product.price - product.discountPercentage).toFixed(2)
                  : 'N/A'}
              </p>
              <span className='text-xs bg-[#DA3F3F] text-white font-bold p-3 rounded-3xl'>
                SAVE {product?.discountPercentage} %
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
                Only <span className='font-bold'>{product?.stock}</span> item(s)
                left in stock!
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

                {cart?.products.find((item) => item.id === product.id) ===
                undefined ? (
                  <>
                    <p className='font-logo'>Quantity</p>

                    <div className='flex gap-3'>
                      <div className='border-2 border-gray-300 justify-between flex gap-6 rounded items-center px-4 h-11'>
                        <button
                          onClick={() => {
                            setQuantity(quantity + 1);
                          }}
                        >
                          <FaPlus size={12} />
                        </button>
                        {quantity}
                        <button
                          disabled={quantity == 1}
                          onClick={() => {
                            setQuantity(quantity - 1);
                          }}
                        >
                          <FiMinus size={12} />
                        </button>
                      </div>
                      <button
                        className='border-2 border-black h-11 rounded font-logo w-full'
                        onClick={() => addToCart()}
                      >
                        Add to cart
                      </button>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        style={{ maxWidth: '600px', width: '60%' }}
      >
        <MiniCart />
      </Drawer>
    </>
  );
};

export default ProductDetail;
