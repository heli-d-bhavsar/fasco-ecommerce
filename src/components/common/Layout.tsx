import Header from './Header';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <Header />
      <main className='max-w-7xl container mx-auto px-4 md:px-0'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
