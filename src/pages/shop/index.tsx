import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ProductCard from '../../components/shop/ProductCard';
import {
  Product,
  ProductCategories,
  ProductResponse,
} from '../../interface/Product';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { BsFillFilterSquareFill } from 'react-icons/bs';
import { MdFilterListOff } from 'react-icons/md';

const LIMIT = 9;

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [catProducts, setCatProducts] = useState<Product[]>([]);

  const [categories, setCategories] = useState<ProductCategories[]>([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const updateUrlAndPage = (newVal: number) => {
    setPage(newVal);
  };

  const handleCategoryChange = async (category: string) => {
    console.log(category);
    setSelectedCategory(category);
    const skip = page * LIMIT;

    const response = await fetch(
      `https://dummyjson.com/products/category/${category}?limit=${LIMIT}&skip=${skip}`
    );
    const data = await response.json();
    setTotalPage(Math.ceil(data.total / LIMIT));
    setCatProducts(data.products);
  };

  const clearFilters = () => {};

  useEffect(() => {
    const skip = page * LIMIT;

    fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`)
      .then((response) => {
        response.json().then((data: ProductResponse) => {
          setTotalPage(Math.ceil(data.total / LIMIT));
          setProducts(data.products);
        });
      })
      .catch((e) => {
        console.log(e);
      });

    fetch('https://dummyjson.com/products/categories')
      .then((response) => {
        response.json().then((data) => {
          setCategories(data);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [page]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-logo text-[42px] mb-10'>Fashion</h1>

      <div className='flex gap-3'>
        <button onClick={toggleDrawer} className='md:hidden flex '>
          <BsFillFilterSquareFill size={20} />
        </button>

        <div className='hidden md:flex md:flex-col md:w-1/4'>
          <div className='flex justify-between items-center mb-5'>
            <h2 className='font-logo text-3xl'>Filters</h2>
            <button
              onClick={() => {
                setSelectedCategory('');
              }}
              className='h-8 bg-black px-4 text-white rounded'
            >
              Clear
            </button>
          </div>

          <h3 className='font-logo text-lg mb-5'>Categories</h3>

          <ul className='flex flex-wrap gap-2'>
            {categories.map((category) => {
              return (
                <li
                  key={category.slug}
                  className={`${
                    category.slug === selectedCategory
                      ? 'text-black font-semibold'
                      : 'text-gray-500'
                  } mb-2`}
                >
                  <button onClick={() => handleCategoryChange(category.slug)}>
                    {category.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='w-full md:w-3/4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mb-20'>
            {selectedCategory
              ? catProducts.map((product) => {
                  return <ProductCard product={product} key={product.id} />;
                })
              : products.map((product) => {
                  return <ProductCard product={product} key={product.id} />;
                })}
          </div>

          {/* Pagination Start */}
          {products && products.length > LIMIT && (
            <div className='flex items-center justify-center gap-4'>
              {page > 0 && (
                <>
                  <button onClick={() => updateUrlAndPage(page - 1)}>
                    <FaAngleLeft size={20} />
                  </button>
                  <button onClick={() => updateUrlAndPage(page - 1)}>
                    {page}
                  </button>
                </>
              )}
              <button
                className='h-10 w-10 rounded-full flex items-center justify-center border bg-slate-300'
                onClick={() => updateUrlAndPage(page)}
              >
                {page + 1}
              </button>
              <button onClick={() => updateUrlAndPage(page + 1)}>
                {page + 2}
              </button>

              {page <= totalPage && (
                <button onClick={() => updateUrlAndPage(page + 1)}>
                  <FaAngleRight size={20} />
                </button>
              )}
            </div>
          )}

          {/* Pagination End */}
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={() => toggleDrawer()}
        direction='left'
        className='md:hidden flex flex-col  justify-center p-2 gap-2 h-screen overflow-hidden'
      >
        <div className='flex justify-between items-center mt-5'>
          <h2 className='font-logo text-2xl'>Filters</h2>
          <button
            onClick={() => {
              setSelectedCategory('');
            }}
            className=' bg-black p-2 text-white rounded'
          >
            <MdFilterListOff size={16} />
          </button>
        </div>

        <h3 className='font-logo text-lg mb-3'>Categories</h3>

        <ul className='flex flex-col overflow-y-auto w-full h-full'>
          {categories.map((category) => {
            return (
              <li
                key={category.slug}
                className={`${
                  category.slug === selectedCategory
                    ? 'text-black font-semibold'
                    : 'text-gray-500'
                } mb-2`}
              >
                <button onClick={() => handleCategoryChange(category.slug)}>
                  {category.name}
                </button>
              </li>
            );
          })}
        </ul>
      </Drawer>
    </div>
  );
};

export default Shop;
