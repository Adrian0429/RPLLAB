import backgroundImage from '../public/images/bgood.png';
import Buttonss from './Buttonss';

const Hero = () => {
  return (
    <div className="w-full h-screen text-center">

        <div className='w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div> 
              <p className='uppercase text-lg font-medium tracking-widest'>Hello There !!</p>

              <h1 className='py-4 text-gray-600 text-5xl'>I&apos;m <span className='text-blue-500'>Adrian</span></h1>
              <h1 className='py-2 text-gray-600 text-3xl'>This is my first assignment on RPL-Lab bootcamp!</h1>
              
            </div>
        </div>
    </div>
  );
};

export default Hero;