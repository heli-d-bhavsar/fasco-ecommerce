import BrandList from '../../components/home/BrandList';
import HeroBanner from '../../components/home/HeroBanner';

const Home = () => {
  return (
    <div className='h-[90vh]'>
      <HeroBanner />
      <BrandList />
    </div>
  );
};

export default Home;
