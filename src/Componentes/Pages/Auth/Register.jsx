// import React, { useContext, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; 
// import AuthContext from '../../AuthContext/AuthContext';
// import Swal from 'sweetalert2';

// const Register = () => {
//   const { handleSubmit } = useContext(AuthContext);
//   const nameRef = useRef('');
//   const emailRef = useRef('');
//   const passwordRef = useRef('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     const body = {
//       name: nameRef.current.value,
//       email: emailRef.current.value,
//       password: passwordRef.current.value,
//     };

//     const { status, message } = await handleSubmit('/register', body); 

//     if (status === 201) {
//       Swal.fire({
//         title: message,
//         icon: 'success',
//         draggable: true,
//       });
//       nameRef.current.value = '';
//       emailRef.current.value = '';
//       passwordRef.current.value = '';

//       navigate('/login');
//     } else {
//       Swal.fire({
//         title: 'Error',
//         text: message || 'Something went wrong!',
//         icon: 'error',
//       });
//     }
//   };

//   return (
//     <div className='w-full flex items-center justify-center p-10'>
//       <div className='lg:container mx-auto'>
//         <div className='flex items-center gap-16 justify-between w-full'>
//           <div className='left_wrapper'>
//             <img src='../../../../src/assets/Signimg.jpg' alt='register' />
//           </div>
//           <div className='right_wrapper space-y-4 max-w-[640px] w-full h-auto'>
//             <h3 className='text-5xl text-[#313131] font-semibold capitalize'>Register</h3>
//             <p className='text-base text-[#313131] font-medium'>Let's get you all set up so you can access your personal account</p>

//             <form className='space-y-4' onSubmit={handleRegister}>
//               <input type='text' ref={nameRef} className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 pl-3' placeholder='Your Name.....' required />
//               <input type='email' ref={emailRef} className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 pl-3' placeholder='Your Email.....' required />
//               <input type='password' ref={passwordRef} className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 pl-3' placeholder='Your Password.....' required />

//               <button className='max-w-[640px] w-full h-[56px] bg-[#515def] rounded-lg flex items-center justify-center text-base text-[#f3f3f3] capitalize font-semibold cursor-pointer'>
//                 create account
//               </button>
//             </form>

//             <p className='max-w-[640px] w-full h-auto text-sm text-[#313131] font-normal'>
//               Already have an account? <Link to='/login' className='text-red-500 font-medium'>Login</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import AuthContext from '../../AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
  const { handleSubmit } = useContext(AuthContext);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const body = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const { status, message } = await handleSubmit('/register', body); 

    if (status === 201) {
      Swal.fire({
        title: message,
        icon: 'success',
        draggable: true,
      });
      nameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';

      navigate('/login');
    } else {
      Swal.fire({
        title: 'Error',
        text: message || 'Something went wrong!',
        icon: 'error',
      });
    }
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10'>
      <div className='container mx-auto max-w-7xl'>
        <div className='lg:hidden w-full flex justify-center mb-6 sm:mb-8'>
          <img 
            src='../../../../src/assets/Signimg.jpg' 
            alt='register' 
            className='w-full h-auto max-w-xs sm:max-w-sm object-contain'
          />
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 justify-between w-full'>
          <div className='hidden lg:flex left_wrapper w-full max-w-md lg:max-w-lg xl:max-w-xl order-2 lg:order-1 justify-center'>
            <img 
              src='../../../../src/assets/Signimg.jpg' 
              alt='register' 
              className='w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain'
            />
          </div>
          <div className='right_wrapper space-y-4 sm:space-y-6 w-full max-w-[640px] h-auto order-1 lg:order-2'>
            <div className='text-center lg:text-left'>
              <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#313131] font-semibold capitalize leading-tight'>Register</h3>
              <p className='text-sm sm:text-base text-[#313131] font-medium leading-relaxed mt-2'>Let's get you all set up so you can access your personal account</p>
            </div>

            <form className='space-y-4 sm:space-y-6' onSubmit={handleRegister}>
              <input 
                type='text' 
                ref={nameRef} 
                className='w-full h-12 sm:h-14 md:h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 px-3 text-sm sm:text-base focus:border-[#515def] focus:ring-1 focus:ring-[#515def] transition-all duration-200' 
                placeholder='Your Name.....' 
                required 
              />
              <input 
                type='email' 
                ref={emailRef} 
                className='w-full h-12 sm:h-14 md:h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 px-3 text-sm sm:text-base focus:border-[#515def] focus:ring-1 focus:ring-[#515def] transition-all duration-200' 
                placeholder='Your Email.....' 
                required 
              />
              <input 
                type='password' 
                ref={passwordRef} 
                className='w-full h-12 sm:h-14 md:h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 px-3 text-sm sm:text-base focus:border-[#515def] focus:ring-1 focus:ring-[#515def] transition-all duration-200' 
                placeholder='Your Password.....' 
                required 
              />

              <button className='w-full h-12 sm:h-14 md:h-[56px] bg-[#515def] rounded-lg flex items-center justify-center text-sm sm:text-base text-black capitalize font-semibold cursor-pointer hover:bg-[#4a4bc7] active:bg-[#3d3ea8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#515def] focus:ring-opacity-50'>
                create account
              </button>
            </form>

            <p className='w-full h-auto text-xs sm:text-sm text-[#313131] font-normal text-center lg:text-left'>
              Already have an account? <Link to='/login' className='text-red-500 font-medium hover:text-red-600 transition-colors duration-200 underline hover:no-underline'>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;