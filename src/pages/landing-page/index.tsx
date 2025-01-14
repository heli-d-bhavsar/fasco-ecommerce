import BrandList from '../../components/landing-page/BrandList';
import HeroBanner from '../../components/landing-page/HeroBanner';

const LandingPage = () => {
  return (
    <div className='max-w-7xl h-[90vh] mx-auto px-4 md:px-2'>
      <HeroBanner />
      <BrandList />
    </div>
  );
};

export default LandingPage;
