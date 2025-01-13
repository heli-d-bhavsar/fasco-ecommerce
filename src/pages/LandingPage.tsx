import LandingMan1 from '../assets/landing-man-1.svg';
import LandingGirls2 from '../assets/girls-2.svg';
import LandingGirls4 from '../assets/girls-4.svg';
import LandingMan2 from '../assets/landing-man-2.svg';

const LandingPage = () => {
  return (
    <div className='max-w-7xl h-[90vh] mx-auto'>
      <div className='flex gap-3'>
        <div className='w-1/3 bg-[#E0E0E0] relative flex justify-center items-end rounded-md'>
          <img src={LandingMan1} className='w-auto object-cover' />
        </div>
        <div className='w-1/3 items-center text-center'>
          <img src={LandingGirls4} />
          <div className='text-[#484848]'>
            <p className='font-medium text-[91px] '>ULTIMATE</p>
            <p className='text-[187px]'>SALE</p>
            <p className='text-xl tracking-wide'> NEW COLLECTION</p>
          </div>
          <img src={LandingGirls2} />
        </div>
        <div className='w-1/3 bg-[#E0E0E0] relative flex justify-center items-end rounded-md'>
          <img src={LandingMan2} className='w-auto object-cover' />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
