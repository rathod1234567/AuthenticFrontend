// import { Link, useNavigate } from "react-router-dom";
// import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
// import { BiSolidLogInCircle } from "react-icons/bi";
// import { IoMdLogOut } from "react-icons/io";
// import { useContext, useState, useRef, useEffect } from "react";
// import AuthContext from "../../Componentes/AuthContext/AuthContext";
// import Swal from "sweetalert2";

// const Navbar = () => {
//     const { handleSubmit } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const handleLogout = async (e) => {
//         e.preventDefault();
//         const { status, message } = await handleSubmit(`/logout`, {});
//         if (status === 200) {
//             Swal.fire({
//                 title: message,
//                 icon: "success",
//                 confirmButtonColor: "#515def"
//             });
//             navigate('/login');
//         }
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsMenuOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     return (
//         <nav className="w-full border-b-2 border-[#515def] bg-white shadow-md sticky top-0">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-20 items-center">
//                     <Link to="/" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-[#313131]">
//                         <FaRegUserCircle className="text-[#515def]" size="1.8rem" />
//                         <span className="hidden sm:inline text-[#515def]">OM Sheel Groups</span>
//                         <span className="sm:hidden text-[#515def]">Om Sheel Groups</span>
//                     </Link>
//                     <div className="hidden md:flex items-center gap-6">
//                         <Link
//                             to="/login"
//                             className="flex items-center gap-2 text-base lg:text-lg font-medium text-[#313131] hover:text-[#515def] transition"
//                         >
//                             <BiSolidLogInCircle className="text-[#515def]" size="1.5rem" />
//                             Login
//                         </Link>
//                         <Link
//                             to="/register"
//                             className="flex items-center gap-2 text-base lg:text-lg font-medium text-[#313131] hover:text-[#515def] transition"
//                         >
//                             <BiSolidLogInCircle className="text-[#515def]" size="1.5rem" />
//                             Register
//                         </Link>

//                         {/* Dropdown */}
//                         <div className="relative" ref={dropdownRef}>
//                             <button
//                                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                                 className="p-2 rounded-full hover:bg-blue-50 transition"
//                             >
//                                 <FaRegUser className="text-[#515def]" size="1.8rem" />
//                             </button>
//                             {isMenuOpen && (
//                                 <ul className="absolute right-0 mt-2 w-40 bg-white border border-[#ccc] shadow-lg rounded-lg p-2 z-50">
//                                     <li>
//                                         <button
//                                             onClick={handleLogout}
//                                             className="w-full flex items-center gap-2 text-sm font-medium text-[#313131] hover:bg-blue-50 px-3 py-2 rounded-md"
//                                         >
//                                             <IoMdLogOut className="text-[#515def]" size="1.5rem" />
//                                             Logout
//                                         </button>
//                                     </li>
//                                 </ul>
//                             )}
//                         </div>
//                     </div>

//                     {/* Mobile Toggle */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             className="text-[#515def] focus:outline-none"
//                         >
//                             <FaRegUser size="1.8rem" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu Dropdown */}
//                 {isMenuOpen && (
//                     <div className="md:hidden mt-2 space-y-2 pb-4 border-t border-gray-200">
//                         <Link
//                             to="/login"
//                             className="block w-full px-4 py-2 text-base font-medium text-[#313131] hover:bg-blue-50"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             <div className="flex items-center gap-2">
//                                 <BiSolidLogInCircle className="text-[#515def]" />
//                                 Login
//                             </div>
//                         </Link>
//                         <Link
//                             to="/register"
//                             className="block w-full px-4 py-2 text-base font-medium text-[#313131] hover:bg-blue-50"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             <div className="flex items-center gap-2">
//                                 <BiSolidLogInCircle className="text-[#515def]" />
//                                 Register
//                             </div>
//                         </Link>
//                         <button
//                             onClick={handleLogout}
//                             className="block w-full px-4 py-2 text-base font-medium text-[#313131] hover:bg-blue-50"
//                         >
//                             <div className="flex items-center gap-2">
//                                 <IoMdLogOut className="text-[#515def]" />
//                                 Logout
//                             </div>
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import { BiSolidLogInCircle } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { useContext, useState, useRef, useEffect } from "react";
import AuthContext from "../../Componentes/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
    const { handleSubmit } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleLogout = async (e) => {
        e.preventDefault();
        const { status, message } = await handleSubmit(`/logout`, {});
        if (status === 200) {
            Swal.fire({
                title: message,
                icon: "success",
                confirmButtonColor: "#515def"
            });
            navigate('/login');
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="w-full border-b-2 border-[#515def] bg-white shadow-md sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex justify-between h-16 sm:h-18 md:h-20 items-center">
                    <Link to="/" className="flex items-center gap-1 sm:gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#313131] flex-shrink-0">
                        <FaRegUserCircle className="text-[#515def] flex-shrink-0" size="1.5rem" />
                        <span className="hidden xs:hidden sm:inline text-[#515def] truncate">OM Sheel Groups</span>
                        <span className="xs:inline sm:hidden text-[#515def] truncate">OM Sheel Groups</span>
                        {/* <span className="xs:hidden text-[#515def]">OMSheel Groups</span> */}
                    </Link>
                    <div className="hidden md:flex items-center gap-3 lg:gap-6">
                        <Link
                            to="/login"
                            className="flex items-center gap-1 lg:gap-2 text-sm md:text-base lg:text-lg font-medium text-[#313131] hover:text-[#515def] transition-colors duration-200 px-2 py-1 rounded-md hover:bg-blue-50"
                        >
                            <BiSolidLogInCircle className="text-[#515def] flex-shrink-0" size="1.2rem" />
                            <span className="hidden lg:inline">Login</span>
                        </Link>
                        <Link
                            to="/register"
                            className="flex items-center gap-1 lg:gap-2 text-sm md:text-base lg:text-lg font-medium text-[#313131] hover:text-[#515def] transition-colors duration-200 px-2 py-1 rounded-md hover:bg-blue-50"
                        >
                            <BiSolidLogInCircle className="text-[#515def] flex-shrink-0" size="1.2rem" />
                            <span className="hidden lg:inline">Register</span>
                        </Link>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-1.5 lg:p-2 rounded-full hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#515def] focus:ring-opacity-50"
                                aria-label="User menu"
                            >
                                <FaRegUser className="text-[#515def]" size="1.5rem" />
                            </button>
                            {isMenuOpen && (
                                <ul className="absolute right-0 mt-2 w-36 md:w-40 bg-white border border-[#ccc] shadow-lg rounded-lg p-2 z-50 animate-fadeIn">
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-2 text-xs md:text-sm font-medium text-[#313131] hover:bg-blue-50 px-2 md:px-3 py-2 rounded-md transition-colors duration-200"
                                        >
                                            <IoMdLogOut className="text-[#515def] flex-shrink-0" size="1.2rem" />
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#515def] focus:outline-none focus:ring-2 focus:ring-[#515def] focus:ring-opacity-50 p-1 rounded-md"
                            aria-label="Toggle mobile menu"
                        >
                            <FaRegUser size="1.5rem" />
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden mt-2 space-y-1 pb-3 border-t border-gray-200 animate-slideDown">
                        <Link
                            to="/login"
                            className="block w-full px-3 py-2.5 text-sm sm:text-base font-medium text-[#313131] hover:bg-blue-50 rounded-md transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <div className="flex items-center gap-3">
                                <BiSolidLogInCircle className="text-[#515def] flex-shrink-0" size="1.2rem" />
                                Login
                            </div>
                        </Link>
                        <Link
                            to="/register"
                            className="block w-full px-3 py-2.5 text-sm sm:text-base font-medium text-[#313131] hover:bg-blue-50 rounded-md transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <div className="flex items-center gap-3">
                                <BiSolidLogInCircle className="text-[#515def] flex-shrink-0" size="1.2rem" />
                                Register
                            </div>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="block w-full px-3 py-2.5 text-sm sm:text-base font-medium text-[#313131] hover:bg-blue-50 rounded-md transition-colors duration-200 text-left"
                        >
                            <div className="flex items-center gap-3">
                                <IoMdLogOut className="text-[#515def] flex-shrink-0" size="1.2rem" />
                                Logout
                            </div>
                        </button>
                    </div>
                )}
            </div>
            
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                
                .animate-slideDown {
                    animation: slideDown 0.3s ease-out;
                }
                
                @media (min-width: 475px) {
                    .xs\\:inline { display: inline; }
                    .xs\\:hidden { display: none; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;