import Chanel from '../../assets/chanel.svg';
import CK from '../../assets/calvin-klein.svg';
import Prada from '../../assets/prada.svg';
import Denim from '../../assets/denim.svg';
import LV from '../../assets/louis-vitton.svg';

const BrandList = () => {
  return (
    <div>
      <div className='flex flex-wrap mt-10 justify-between'>
        <img src={Chanel} />
        <img src={LV} />
        <img src={Prada} />
        <img src={Denim} />
        <img src={CK} />
      </div>
    </div>
  );
};

export default BrandList;
