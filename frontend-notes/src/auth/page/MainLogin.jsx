import { FormLogin } from '../components/FormLogin';
import { Header } from '../components/Header';

export const MainLogin = () => {
  return (
    <>
      <div className="relative">
        <div className="flex justify-center items-center h-screen">
          <div className="mt-0 ml-0 absolute left-0 top-0">
            <Header />
          </div>

          <div className="absolute inset-0 bg-imagen-bg bg-center filter grayscale opacity-5" />
          
          <div className='w-1/3 h-1/4 z-10'>
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
  
};
