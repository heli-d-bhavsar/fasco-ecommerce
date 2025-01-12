import { useState } from 'react';
import Sidebar from 'react-sidebar';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSetSidebarOpen = (open: boolean): void => {
    setSidebarOpen(open);
  };
  return (
    <>
      <div className='block md:hidden'>
        <Sidebar
          sidebar={
            <div className='flex flex-col p-5'>
              <div className='font-logo text-[52px]'>FASCO</div>
              <div>
                <ul className='flex flex-col gap-7 text-base items-center justify-center'>
                  <li>Home</li>
                  <li>Deals</li>
                  <li>New Arrivals</li>
                  <li>Packages</li>
                  <li>Sign in</li>
                  <li>
                    <button className='bg-black text-white w-[152px] h-[56px] rounded-xl'>
                      Sign up
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          }
          open={sidebarOpen}
          onSetOpen={handleSetSidebarOpen}
          styles={{ sidebar: { background: 'white' } }}
        >
          <button onClick={() => handleSetSidebarOpen(true)}>
            Open sidebar
          </button>
        </Sidebar>
      </div>

      <header className='hidden md:block'>
        <div className='max-w-7xl h-[20vh] mx-auto'>
          <div className='flex items-center justify-between text-center'>
            <div className='font-logo text-[52px]'>FASCO</div>
            <div>
              <ul className='flex gap-7 text-base items-center justify-center'>
                <li>Home</li>
                <li>Deals</li>
                <li>New Arrivals</li>
                <li>Packages</li>
                <li>Sign in</li>
                <li>
                  <button className='bg-black text-white w-[152px] h-[56px] rounded-xl'>
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
