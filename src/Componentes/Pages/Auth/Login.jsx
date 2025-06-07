// import React, { useContext, useRef } from 'react';
// import { Link, useNavigate } from 'react-router';
// import AuthContext from '../../AuthContext/AuthContext';
// import Swal from 'sweetalert2';

// const Login = () => {
//     const emailRef = useRef('');
//     const passwordRef = useRef('');
//     const navigate = useNavigate();
//     const { handleSubmit } = useContext(AuthContext);

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         const body = {
//             email: emailRef.current.value,
//             password: passwordRef.current.value,
//         }

//         const { status, message } = await handleSubmit(`/login`, body);
//         if (status === 200) {
//             Swal.fire({
//                 title: message,
//                 icon: "success",
//                 draggable: true
//             });
//             navigate('/')
//         }
//     }

//     return (
//         <div className='w-full flex items-center justify-center p-10'>
//             <div className="lg:container mx-auto">
//                 <div className="flex items-center gap-16 justify-between w-full">
//                     <div className="right_wrapper space-y-4 max-w-[640px] w-full h-auto">
//                         <h3 className='text-5xl text-[#313131] font-semibold capitalize'>Login</h3>
//                         <p className='text-base text-[#313131] font-medium'>Login to access your travelwise account</p>

//                         <form className='space-y-4' onSubmit={handleLogin}>

//                             <input type="email" ref={emailRef} className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 pl-3' placeholder='Your Email.....' required />

//                             <input type="password" className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 pl-3' placeholder='Your Password.....' ref={passwordRef} />

//                             <p className='max-w-[640px] w-full h-auto text-sm text-[#313131] font-normal flex items-center justify-end'><Link to={'/forget-password'} className='text-red-500 font-medium'>Forget Password</Link></p>

//                             <button className='max-w-[640px] w-full h-[56px] bg-[#515def] rounded-lg flex items-center justify-center text-base text-black capitalize font-semibold cursor-pointer'>Login</button>
//                         </form>

//                         <p className='max-w-[640px] w-full h-auto text-sm text-[#313131] font-normal'>Already have an account? <Link to={'/register'} className='text-red-500 font-medium'>Register</Link></p>
//                     </div>
//                     <div className="left_wrapper">
//                         <img src="../../../../src/assets/loginimg.jpg" alt="login" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../../AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const { handleSubmit } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        const body = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        const { status, message } = await handleSubmit(`/login`, body);
        if (status === 200) {
            Swal.fire({
                title: message,
                icon: "success",
                draggable: true
            });
            navigate('/')
        }
    }

    return (
        <div className='w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10'>
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 justify-between w-full">
                    <div className="right_wrapper space-y-4 sm:space-y-6 w-full max-w-[640px] h-auto order-2 lg:order-1">
                        <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#313131] font-semibold capitalize leading-tight'>Login</h3>
                        <p className='text-sm sm:text-base text-[#313131] font-medium leading-relaxed'>Login to access your OMSheel groups access</p>

                        <form className='space-y-4 sm:space-y-6' onSubmit={handleLogin}>

                            <input 
                                type="email" 
                                ref={emailRef} 
                                className='w-full h-12 sm:h-14 md:h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 px-3 text-sm sm:text-base focus:border-[#515def] focus:ring-1 focus:ring-[#515def] transition-all duration-200' 
                                placeholder='Your Email.....' 
                                required 
                            />

                            <input 
                                type="password" 
                                className='w-full h-12 sm:h-14 md:h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 px-3 text-sm sm:text-base focus:border-[#515def] focus:ring-1 focus:ring-[#515def] transition-all duration-200' 
                                placeholder='Your Password.....' 
                                ref={passwordRef} 
                                required
                            />

                            <p className='w-full h-auto text-xs sm:text-sm text-[#313131] font-normal flex items-center justify-center sm:justify-end'>
                                <Link 
                                    to={'/forget-password'} 
                                    className='text-red-500 font-medium hover:text-red-600 transition-colors duration-200 underline hover:no-underline'
                                >
                                    Forget Password
                                </Link>
                            </p>

                            <button className='w-full h-12 sm:h-14 md:h-[56px] bg-[#515def] rounded-lg flex items-center justify-center text-sm sm:text-base text-black capitalize font-semibold cursor-pointer hover:bg-[#4a4bc7] active:bg-[#3d3ea8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#515def] focus:ring-opacity-50'>
                                Login
                            </button>
                        </form>

                        <p className='w-full h-auto text-xs sm:text-sm text-[#313131] font-normal text-center sm:text-left'>
                            Don't have an account? <Link to={'/register'} className='text-red-500 font-medium hover:text-red-600 transition-colors duration-200 underline hover:no-underline'>Register</Link>
                        </p>
                    </div>
                    <div className="left_wrapper w-full max-w-md lg:max-w-lg xl:max-w-xl order-1 lg:order-2 flex justify-center">
                        <img 
                            src="../../../../src/assets/loginimg.jpg" 
                            alt="login" 
                            className='w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;