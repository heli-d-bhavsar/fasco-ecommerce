import { signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router';
import GirlImage from '../../assets/sign-up-page-girl.jpg';
import { useAuthContext } from '../../context/AuthContext';
import { firebaseAuth } from '../../firebase/BaseConfig';

const SignUp = () => {
  const navigate = useNavigate();

  const { user, setUser, googleAuthProvider } = useAuthContext();

  const handleLogin = () => {
    signInWithPopup(firebaseAuth, googleAuthProvider)
      .then((result) => {
        setUser(result.user);
        navigate('/');
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <div className='h-[100vh]'>
      <div className='flex justify-center h-full w-full'>
        <div className='hidden md:flex md:w-1/3 lg:w-1/2'>
          <img src={GirlImage} className='object-cover h-[100vh] w-full' />
        </div>
        <div className='w-full md:w-2/3 lg:w-1/2 flex flex-col gap-10 items-center justify-center'>
          <div className='font-logo text-[66px] text-[#484848]'>FASCO</div>
          <div className='font-logo text-3xl'>Create Account</div>
          <button
            className='flex gap-3 border-2 rounded-lg w-72 h-14 text-center items-center justify-center'
            onClick={handleLogin}
          >
            <FcGoogle size={36} /> Sign up with google
          </button>
          <p>
            Already have a account?
            <button className='text-blue-600 ml-2'>Log in</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
