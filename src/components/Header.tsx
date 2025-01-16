import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { HiBars3 } from 'react-icons/hi2';
import { useNavigate } from 'react-router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const navigate = useNavigate();

  return (
    <>
      <header className='hidden md:block'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between text-center h-[20vh]'>
            <div className='font-logo text-[52px]'>FASCO</div>
            <div>
              <ul className='flex gap-7 text-base items-center justify-center'>
                <li>Home</li>
                <li>Deals</li>
                <li>New Arrivals</li>
                <li>Packages</li>
                <li>Sign in</li>
                <li>
                  <button
                    className='bg-black text-white w-40 h-14 rounded-xl'
                    onClick={() => navigate('/signup')}
                  >
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className='block md:hidden px-4'>
        <div className='flex h-[20vh] justify-between items-center'>
          <div className='font-logo text-4xl'>FASCO</div>
          <button onClick={toggleDrawer}>
            <HiBars3 />
          </button>
        </div>

        <Drawer open={isOpen} onClose={() => toggleDrawer()} direction='left'>
          <div className='flex flex-col items-center gap-5 text-center mt-14'>
            <div className='font-logo text-4xl'>FASCO</div>
            <div>
              <ul className='flex flex-col gap-5 text-base items-center justify-center'>
                <li>Home</li>
                <li>Deals</li>
                <li>New Arrivals</li>
                <li>Packages</li>
                <li>Sign in</li>
                <li>
                  <button
                    className='bg-black text-white w-40 h-14 rounded-xl'
                    onClick={() => navigate('/signup')}
                  >
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Header;