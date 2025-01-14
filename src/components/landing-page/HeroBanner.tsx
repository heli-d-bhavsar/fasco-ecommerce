import LandingMan1 from '../../assets/landing-man-1.svg';
import LandingGirls2 from '../../assets/girls-2.svg';
import LandingGirls4 from '../../assets/girls-4.svg';
import LandingMan2 from '../../assets/landing-man-2.svg';

const HeroBanner = () => {
  return (
    <div>
      <div className='flex gap-3'>
        <div className='w-[30%] bg-[#E0E0E0] relative md:flex justify-center items-end rounded-lg hidden'>
          <img src={LandingMan1} className='object-cover' />
        </div>
        <div className='md:w-3/5 items-center text-center w-full'>
          <img src={LandingGirls4} className='w-full object-cover' />
          <div className='text-[#484848] my-5'>
            <p className='font-medium text-7xl md:text-[91px] -tracking-[4%]'>
              ULTIMATE
            </p>
            <p className='text-[168px] md:text-[187px] -tracking-[5.5%] leading-[100%]'>
              SALE
            </p>
            <p className='text-xl tracking-wide mb-5'> NEW COLLECTION</p>
            <button className='bg-black text-white w-[152px] h-[56px] rounded-xl'>
              Sign up
            </button>
          </div>
          <img src={LandingGirls2} className='w-full object-cover' />
        </div>
        <div className='w-[30%] bg-[#E0E0E0] relative md:flex justify-center items-end rounded-lg hidden'>
          <img src={LandingMan2} className='object-cover' />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
