// import React, { useContext, useRef } from 'react';
// import AuthContext from '../../AuthContext/AuthContext';
// import Swal from 'sweetalert2';

// const ForgetPassword = () => {

//     const findEmailRef = useRef('');
//     const {handleSubmit} = useContext(AuthContext);


//     const handleForget = async (e) => {
//             e.preventDefault();
    
//             const body = {
//                 email: findEmailRef.current.value,
//             }
    
//             const { status, message } = await handleSubmit(`/forget-password`, body);
    
    
//             if (status === 200) {
//                 Swal.fire({
//                     title: message,
//                     icon: "success",
//                     draggable: true
//                 });
    
//                 // console.log('forget user: ', status, message);
//             }
//         }

//     return (
//         <div className='w-full flex items-center justify-center p-10'>
//             <div className="lg:container mx-auto">
//                 <div className="flex items-center gap-16 justify-between w-full">
//                     <div className="right_wrapper space-y-4 max-w-[640px] w-full h-auto">
//                         <h3 className='text-5xl text-[#313131] font-semibold capitalize'>Forget your password?</h3>
//                         <p className='text-base text-[#313131] font-medium'>Don't worry. happens to all of us. Enter your email below to recover your password</p>

//                         <form className='space-y-4' onSubmit={handleForget}>

//                             <input type="email" ref={findEmailRef} className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 pl-3' placeholder='Your Email.....' required />
                        
//                             <button className='max-w-[640px] w-full h-[56px] bg-black rounded-lg flex items-center justify-center text-base text-black capitalize font-semibold cursor-pointer'>Submit</button>
//                         </form>
//                     </div>
//                     <div className="left_wrapper">
//                         <img src="../../../../src/assets/forgetimg.png" alt="forget" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ForgetPassword;


import React, { useContext, useRef } from 'react';
import AuthContext from '../../AuthContext/AuthContext';
import Swal from 'sweetalert2';

const ForgetPassword = () => {
    const findEmailRef = useRef('');
    const { handleSubmit } = useContext(AuthContext);

    const handleForget = async (e) => {
        e.preventDefault();

        const body = {
            email: findEmailRef.current.value,
        }

        const { status, message } = await handleSubmit(`/forget-password`, body);

        if (status === 200) {
            Swal.fire({
                title: message,
                icon: "success",
                draggable: true
            });
            
            findEmailRef.current.value = '';
        } else {
            Swal.fire({
                title: 'Error',
                text: message || 'Something went wrong!',
                icon: 'error',
            });
        }
    }

    return (
        <div className='w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10'>
            <div className="container mx-auto max-w-7xl">
                <div className='lg:hidden w-full flex justify-center mb-6 sm:mb-8'>
                    <img 
                        src="../../../../src/assets/forgetimg.png" 
                        alt="forget password illustration" 
                        className='w-full h-auto max-w-xs sm:max-w-sm object-contain'
                    />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 justify-between w-full">
                    <div className="right_wrapper space-y-4 sm:space-y-6 w-full max-w-[640px] h-auto order-1 lg:order-1">
                        <div className="text-center lg:text-left">
                            <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#313131] font-semibold capitalize leading-tight'>Forget your password?</h3>
                            <p className='text-sm sm:text-base text-[#313131] font-medium leading-relaxed mt-2'>Don't worry, happens to all of us. Enter your email below to recover your password</p>
                        </div>

                        <form className='space-y-4 sm:space-y-6' onSubmit={handleForget}>
                            <input 
                                type="email" 
                                ref={findEmailRef} 
                                className='w-full h-12 sm:h-14 md:h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 px-3 text-sm sm:text-base focus:border-[#515def] focus:ring-1 focus:ring-[#515def] transition-all duration-200' 
                                placeholder='Your Email.....' 
                                required 
                            />
                        
                            <button className='w-full h-12 sm:h-14 md:h-[56px] bg-[#313131] rounded-lg flex items-center justify-center text-sm sm:text-base text-black capitalize font-semibold cursor-pointer hover:bg-[#404040] active:bg-[#1f1f1f] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#313131] focus:ring-opacity-50'>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="hidden lg:flex left_wrapper w-full max-w-md lg:max-w-lg xl:max-w-xl order-2 lg:order-2 justify-center">
                        <img 
                            src="../../../../src/assets/forgetimg.png" 
                            alt="forget password illustration" 
                            className='w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;