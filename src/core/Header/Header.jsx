import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDesktopMenuOpen, setDesktopMenuOpen] = useState(false);
    const [isOpen, setOpenMenu] = useState(null);
    const location = useLocation();
    const Active = location.pathname;
    const mobileRef = useRef(null);
    const deskaboutRef = useRef(null);
    const deskAuthorRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileRef.current && !mobileRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
            if (isDesktopMenuOpen === 'about' && deskaboutRef.current && !deskaboutRef.current.contains(event.target)) {
                setDesktopMenuOpen(false);
            }
            if (isDesktopMenuOpen === 'author' && deskAuthorRef.current && !deskAuthorRef.current.contains(event.target)) {
                setDesktopMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDesktopMenuOpen]);

    const toggleMenu = (menu) => {
        setOpenMenu(isOpen === menu ? null : menu);
    };

    const desktopmenu = (menu) => {
        setDesktopMenuOpen(isDesktopMenuOpen === menu ? false : menu);
    };

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <nav className={`fixed w-full top-0 z-50  py-3 transition-all duration-300  ${Active === "/" ? scrolled ? 'bg-[#1D26A1] backdrop-blur-md shadow-lg' : 'bg-transparent' : "bg-[#1D26A1] backdrop-blur-md shadow-lg"}`}>
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center space-x-3">
                            <img alt="ICASMET 2025 Logo" className="w-55 h-12" src="/assets/images/logo.png" />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex space-x-10">
                            <Link to="/" className={`text-xl  transition duration-300 text-white  hover:text-yellow-500 ${Active === "/" ? " text-yellow-400" : "text-white"}`}>Home</Link>

                            {/* About Dropdown */}
                            <div className="relative " ref={deskaboutRef}>
                                <button className={`text-xl  flex items-center space-x-2 text-white hover:text-yellow-500 ${Active === "/about" || Active === "/scope" || Active === "/organizingCommittee" || Active === "/editorial" ? 'text-yellow-400' : 'text-white hover:text-white'}`} onClick={() => desktopmenu('about')}>
                                    {/* <span className='capitalize'>{`${Active ==="/about" ? "About the Conference" : "About " || Active === "/scope" ? "Scope of the Conference" : "About"}`}</span> */}
                                    <span>About Us</span>
                                    <span className="text-sm"><IoIosArrowDropdown className='text-lg' /></span>
                                </button>
                                <div className={`mt-2 absolute  overflow-hidden transition-all p-2 duration-400 ease-in-out bg-gray-100 shadow-lg rounded-md pt-3 pb-3 whitespace-nowrap ${isDesktopMenuOpen === 'about' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <Link to="/about" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150   rounded-md ${Active === "/about" ? " text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>About the Conference</Link>
                                    <Link to="/scope" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 rounded-md  ${Active === "/scope" ? " text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Scope of Conference</Link>
                                    <Link to="/organizingCommittee" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 rounded-md  ${Active === "/organizingCommittee" ? " text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Organzing Committee</Link>
                                    <Link to="/editorial" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150  rounded-md ${Active === "/editorial" ? " text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Editorial Board</Link>
                                </div>
                            </div>

                            {/* Author's Desk Dropdown */}
                            <div className="relative" ref={deskAuthorRef}>
                                <button className={`text-xl  flex items-center space-x-2 text-white hover:text-yellow-500 ${Active === "/conferenceTracks" || Active === "/important-dates" || Active === "/paper-submission" ? 'text-yellow-400' : 'text-white hover:text-yellow-500'}`} onClick={() => desktopmenu('author')}>
                                    <span>Author's Desk</span>
                                    <span className="text-sm"><IoIosArrowDropdown className='text-lg' /></span>
                                </button>
                                <div className={`mt-2 absolute overflow-hidden transition-all duration-500 ease-in-out bg-gray-100 p-2 shadow-lg rounded-md pt-3 pb-3 whitespace-nowrap ${isDesktopMenuOpen === 'author' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <Link to="/conferenceTracks" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150  rounded-md ${Active === "/conferenceTracks" ? "text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Conference Tracks</Link>
                                    <Link to="/important-dates" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150  rounded-md ${Active === "/important-dates" ? "text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Key Dates</Link>
                                    <Link to="/paper-submission" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150  rounded-md ${Active === "/paper-submission" ? "text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Paper Submission</Link>
                                </div>
                            </div>

                            {/* <Link to="/keyInvitees" className="text-2xl  text-white/80 hover:text-white">Key Invitees</Link> */}
                            <Link to="/contact" className={`text-xl   hover:text-yellow-500 ${Active === "/contact" ? "text-yellow-400 " : "text-white"}`}>Contact Us</Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-white focus:outline-none"
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>

                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                                    <line x1="4" x2="20" y1="12" y2="12" />
                                    <line x1="4" x2="20" y1="6" y2="6" />
                                    <line x1="4" x2="20" y1="18" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}

                <div
                    ref={mobileRef}
                    className={`fixed top-0 right-0 h-screen w-64 bg-[#0f1675] text-white shadow-lg z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-5 right-5 text-white"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex flex-col items-start mt-16 space-y-6 px-4">
                        <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`text-lg  transition duration-300 text-white  hover:text-white ${Active === "/" ? " text-yellow-400" : "text-white"}`}>Home</Link>

                        {/* About Us Dropdown */}
                        <div className='group '>
                            <button className={`w-full text-left flex items-center space-x-2 ${Active === "/about" || Active === "/scope" || Active === "/organizingCommittee" || Active === "/editorial" ? 'text-yellow-500' : 'text-white/80 hover:text-yellow-400 '}`} onClick={() => toggleMenu('about')}>
                                <span className='text-lg'>About Us</span>
                                <span className="text-sm">{isOpen === "about" ? <IoIosArrowDropdown className='text-lg rotate-180 transition-transform duration-300' /> : <IoIosArrowDropdown className='text-lg transition-transform duration-300' />}</span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen === 'about' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="pl-4 whitespace-nowrap mt-2 text-lg border rounded-md p-3 border-white ">
                                    <Link to="/about" onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }} className={`block py-1 hover:text-yellow-400  text-white ${Active === "/about" ? "text-yellow-500 " : "text-white"}`}>About the Conference</Link>
                                    <Link to="/scope" onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }} className={`block py-1   text-white/90 hover:text-yellow-400  ${Active === "/scope" ? "text-yellow-500 " : "text-white"}`}>Scope of the Conference</Link>
                                    <Link to="/organizingCommittee" onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }} className={`block py-1   text-white/90 hover:text-yellow-400  ${Active === "/organizingCommittee" ? "text-yellow-500 " : "text-white"}`}>Organizing Committee</Link>
                                    <Link to="/editorial" onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }} className={`block py-1   text-white/90 hover:text-yellow-400  ${Active === "/editorial" ? "text-yellow-500 " : "text-white"}`}>Editorial Board</Link>
                                </div>
                            </div>
                        </div>

                        {/* Author's Desk Dropdown */}
                        <div className='group'>
                            <button className={`w-full text-left flex items-center space-x-2 ${Active === "/conferenceTracks" || Active === "/important-dates" || Active === "/paper-submission" ? 'text-yellow-500' : 'text-white/80 hover:text-yellow-400 '}`} onClick={() => toggleMenu('author')}>
                                <span className='text-lg'>Author's Desk</span>
                                <span className="text-sm">{isOpen === "author" ? <IoIosArrowDropdown className='text-lg rotate-180 transition-transform duration-300' /> : <IoIosArrowDropdown className='text-lg transition-transform duration-300' />}</span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen === 'author' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="pl-4 mt-2 text-lg  border rounded-md p-3 border-white ">
                                    <Link to="/conferenceTracks" onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }} className={`block py-1 text-white/90 hover:text-yellow-400  ${Active === "/conferenceTracks" ? "text-yellow-500 " : "text-white"}`}>Conference Tracks</Link>
                                    <Link to="/important-dates" onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }} className={`block py-1 text-white/90 hover:text-yellow-400  ${Active === "/important-dates" ? "text-yellow-500 " : "text-white"}`}>Key Dates</Link>
                                    <Link to="/paper-submission" onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }} className={`block py-1 text-white/90 hover:text-yellow-400  ${Active === "/paper-submission" ? "text-yellow-500 " : "text-white"}`}>Paper Submission</Link>
                                </div>
                            </div>

                        </div>

                        {/* <Link to="/keyInvitees" className="text-lg  text-white/90 hover:text-yellow-400 ">Key Invitees</Link> */}
                        <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`text-lg  text-white hover:text-yellow-400  ${Active === "/contact" ? "text-yellow-500 " : "text-white"}`}>Contact Us</Link>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Header

// import React, { useEffect, useRef, useState } from 'react';
// import { IoIosArrowDropdown } from 'react-icons/io';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [isDesktopMenuOpen, setDesktopMenuOpen] = useState(false);
//     const [isOpen, setOpenMenu] = useState(null);
//     const location = useLocation();
//     const Active = location.pathname;
//     const mobileRef = useRef(null);
//     const deskaboutRef = useRef(null);
//     const deskAuthorRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (mobileRef.current && !mobileRef.current.contains(event.target)) {
//                 setMobileMenuOpen(false);
//             }
//             if (isDesktopMenuOpen === 'about' && deskaboutRef.current && !deskaboutRef.current.contains(event.target)) {
//                 setDesktopMenuOpen(false);
//             }
//             if (isDesktopMenuOpen === 'author' && deskAuthorRef.current && !deskAuthorRef.current.contains(event.target)) {
//                 setDesktopMenuOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [isDesktopMenuOpen]);

//     const toggleMenu = (menu) => {
//         setOpenMenu(isOpen === menu ? null : menu);
//     };

//     const desktopmenu = (menu) => {
//         setDesktopMenuOpen(isDesktopMenuOpen === menu ? false : menu);
//     };

//     const [scrolled, setScrolled] = useState(false);
//     useEffect(() => {
//         const handleScroll = () => {
//             const isScrolled = window.scrollY > 20;
//             setScrolled(isScrolled);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);


//     return (
//         <>
//             <nav className={`fixed w-full top-0 z-50 transition-all duration-300  ${Active === "/" ? scrolled ? 'bg-[#1D26A1] backdrop-blur-md shadow-lg' : 'bg-transparent' : "bg-[#1D26A1] backdrop-blur-md shadow-lg"}`}>
//                 <div className="container mx-auto px-6">
//                     <div className="flex justify-between items-center">
//                         <Link to="/" className="flex items-center space-x-3">
//                             <img alt="ICCNDS 2025 Logo" className="w-20 " src="/assets/images/logo.png" />
//                         </Link>

//                         {/* Desktop Nav */}
//                         <div className="hidden lg:flex space-x-10">
//                             <Link to="/" className={`text-xl  transition duration-300 text-white  hover:text-yellow-500 ${Active === "/" ? " text-yellow-400" : "text-white"}`}>Home</Link>

//                             {/* About Dropdown */}
//                             <div className="relative " ref={deskaboutRef}>
//                                 <button className={`text-xl  flex items-center space-x-2 text-white hover:text-yellow-500 ${Active === "/about" || Active === "/scope" || Active === "/organizingCommittee" || Active === "/editorial" ? 'text-yellow-400' : 'text-white hover:text-white'}`} onClick={() => desktopmenu('about')}>
//                                     {/* <span className='capitalize'>{`${Active ==="/about" ? "About the Conference" : "About " || Active === "/scope" ? "Scope of the Conference" : "About"}`}</span> */}
//                                     <span>About Us</span>
//                                     <span className="text-sm"><IoIosArrowDropdown className='text-lg' /></span>
//                                 </button>
//                                 <div className={`mt-2 absolute  overflow-hidden transition-all p-2 duration-400 ease-in-out bg-gray-100 shadow-lg rounded-md pt-5 pb-3 whitespace-nowrap ${isDesktopMenuOpen === 'about' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
//                                     <Link to="/about" className={`block px-4 py-2 hover:font-medium duration-150   rounded-md ${Active === "/about" ? " text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>About the Conference</Link>
//                                     <Link to="/scope" className={`block px-4 py-2 hover:font-medium duration-150 rounded-md  ${Active === "/scope" ? " text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Scope of Conference</Link>
//                                     <Link to="/organizingCommittee" className={`block px-4 py-2 hover:font-medium duration-150 rounded-md  ${Active === "/organizingCommittee" ? " text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Organzing Committee</Link>
//                                     <Link to="/editorial" className={`block px-4 py-2 hover:font-medium duration-150  rounded-md ${Active === "/editorial" ? " text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Editorial Board</Link>
//                                 </div>
//                             </div>

//                             {/* Author's Desk Dropdown */}
//                             <div className="relative" ref={deskAuthorRef}>
//                                 <button className={`text-xl  flex items-center space-x-2 text-white hover:text-yellow-500 ${Active === "/conferenceTracks" || Active === "/important-dates" || Active === "/paper-submission" ? 'text-yellow-400' : 'text-white hover:text-yellow-500'}`} onClick={() => desktopmenu('author')}>
//                                     <span>Author's Desk</span>
//                                     <span className="text-sm"><IoIosArrowDropdown className='text-lg' /></span>
//                                 </button>
//                                 <div className={`mt-2 absolute overflow-hidden transition-all duration-500 ease-in-out bg-gray-100 p-2 shadow-lg rounded-md pt-5 pb-3 whitespace-nowrap ${isDesktopMenuOpen === 'author' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
//                                     <Link to="/conferenceTracks" className={`block px-4 py-2 hover:font-medium duration-150  rounded-md ${Active === "/conferenceTracks" ? "text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Conference Tracks</Link>
//                                     <Link to="/important-dates" className={`block px-4 py-2 hover:font-medium duration-150  rounded-md ${Active === "/important-dates" ? "text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Key Dates</Link>
//                                     <Link to="/paper-submission" className={`block px-4 py-2 hover:font-medium duration-150  rounded-md ${Active === "/paper-submission" ? "text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Paper Submission</Link>
//                                 </div>
//                             </div>

//                             {/* <Link to="/keyInvitees" className="text-2xl  text-white/80 hover:text-white">Key Invitees</Link> */}
//                             <Link to="/contact" className={`text-xl   hover:text-yellow-500 ${Active === "/contact" ? "text-yellow-400 " : "text-white"}`}>Contact Us</Link>
//                         </div>

//                         {/* Mobile Menu Button */}
//                         <button
//                             className="lg:hidden text-white focus:outline-none"
//                             onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//                         >
//                             {isMobileMenuOpen ? (
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
//                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
//                                     strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
//                                     <path d="M18 6L6 18M6 6l12 12" />
//                                 </svg>

//                             ) : (
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
//                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
//                                     strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
//                                     <line x1="4" x2="20" y1="12" y2="12" />
//                                     <line x1="4" x2="20" y1="6" y2="6" />
//                                     <line x1="4" x2="20" y1="18" y2="18" />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu Overlay */}

//                 <div
//                     ref={mobileRef}
//                     className={`fixed top-0 right-0 h-screen w-64 bg-[#0f1675] text-white shadow-lg z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//                         }`}
//                 >
//                     {/* Close button */}
//                     <button
//                         className="absolute top-5 right-5 text-white"
//                         onClick={() => setMobileMenuOpen(false)}
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
//                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
//                             strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
//                             <path d="M18 6L6 18M6 6l12 12" />
//                         </svg>
//                     </button>

//                     <div className="flex flex-col items-start mt-16 space-y-6 px-4">
//                         <Link to="/" className={`text-lg  transition duration-300 text-white  hover:text-white ${Active === "/" ? " text-yellow-400" : "text-white"}`}>Home</Link>

//                         {/* About Us Dropdown */}
//                         <div className='group '>
//                             <button className={`w-full text-left flex items-center space-x-2 ${Active === "/about" || Active === "/scope" || Active === "/organizingCommittee" || Active === "/editorial" ? 'text-yellow-500' : 'text-white/80 hover:text-yellow-400 '}`} onClick={() => toggleMenu('about')}>
//                                 <span className='text-lg'>About Us</span>
//                                 <span className="text-sm">{isOpen === "about" ? <IoIosArrowDropdown className='text-lg rotate-180 transition-transform duration-300' /> : <IoIosArrowDropdown className='text-lg transition-transform duration-300' />}</span>
//                             </button>
//                             <div
//                                 className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen === 'about' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
//                                     }`}
//                             >
//                                 <div className="pl-4 whitespace-nowrap mt-2 text-lg border rounded-md p-3 border-white ">
//                                     <a href="/about" className={`block py-1 hover:text-yellow-400  text-white ${Active === "/about" ? "text-yellow-500 " : "text-white"}`}>About the Conference</a>
//                                     <a href="/scope" className={`block py-1   text-white/90 hover:text-yellow-400  ${Active === "/scope" ? "text-yellow-500 " : "text-white"}`}>Scope of the Conference</a>
//                                     <a href="/organizingCommittee" className={`block py-1   text-white/90 hover:text-yellow-400  ${Active === "/organizingCommittee" ? "text-yellow-500 " : "text-white"}`}>Organizing Committee</a>
//                                     <a href="/editorial" className={`block py-1   text-white/90 hover:text-yellow-400  ${Active === "/editorial" ? "text-yellow-500 " : "text-white"}`}>Editorial Board</a>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Author's Desk Dropdown */}
//                         <div className='group'>
//                             <button className={`w-full text-left flex items-center space-x-2 ${Active === "/conferenceTracks" || Active === "/important-dates" || Active === "/paper-submission" ? 'text-yellow-500' : 'text-white/80 hover:text-yellow-400 '}`} onClick={() => toggleMenu('author')}>
//                                 <span className='text-lg'>Author's Desk</span>
//                                 <span className="text-sm">{isOpen === "author" ? <IoIosArrowDropdown className='text-lg rotate-180 transition-transform duration-300' /> : <IoIosArrowDropdown className='text-lg transition-transform duration-300' />}</span>
//                             </button>
//                             <div
//                                 className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen === 'author' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
//                                     }`}
//                             >
//                                 <div className="pl-4 mt-2 text-lg  border rounded-md p-3 border-white ">
//                                     <a href="/conferenceTracks" className={`block py-1 text-white/90 hover:text-yellow-400  ${Active === "/conferenceTracks" ? "text-yellow-500 " : "text-white"}`}>Conference Tracks</a>
//                                     <a href="/important-dates" className={`block py-1 text-white/90 hover:text-yellow-400  ${Active === "/important-dates" ? "text-yellow-500 " : "text-white"}`}>Key Dates</a>
//                                     <a href="/paper-submission" className={`block py-1 text-white/90 hover:text-yellow-400  ${Active === "/paper-submission" ? "text-yellow-500 " : "text-white"}`}>Paper Submission</a>
//                                 </div>
//                             </div>

//                         </div>

//                         {/* <Link to="/keyInvitees" className="text-lg  text-white/90 hover:text-yellow-400 ">Key Invitees</Link> */}
//                         <a href="/contact" className={`text-lg  text-white hover:text-yellow-400  ${Active === "/contact" ? "text-yellow-500 " : "text-white"}`}>Contact Us</a>
//                     </div>
//                 </div>

//             </nav>
//         </>
//     )
// }

// export default Header


// import React, { useEffect, useRef, useState } from 'react';
// import { IoIosArrowDropdown } from 'react-icons/io';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [isDesktopMenuOpen, setDesktopMenuOpen] = useState(false);
//     const [isOpen, setOpenMenu] = useState(null);
//     const location = useLocation();
//     const Active = location.pathname;
//     const mobileRef = useRef(null);
//     const deskaboutRef = useRef(null);
//     const deskAuthorRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (mobileRef.current && !mobileRef.current.contains(event.target)) {
//                 setMobileMenuOpen(false);
//             }
//             if (deskaboutRef.current && !deskaboutRef.current.contains(event.target)) {
//                 setDesktopMenuOpen(false);
//             }
//             if (deskAuthorRef.current && !deskAuthorRef.current.contains(event.target)) {
//                 setDesktopMenuOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [isDesktopMenuOpen]);

//     const toggleMenu = (menu) => {
//         setOpenMenu(isOpen === menu ? null : menu);
//     };

//     const desktopmenu = (menu) => {
//     setDesktopMenuOpen(isDesktopMenuOpen === menu ? false : menu);
// };

//     const [scrolled, setScrolled] = useState(false);
//     useEffect(() => {
//         const handleScroll = () => {
//             const isScrolled = window.scrollY > 20;
//             setScrolled(isScrolled);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);


//     return (
//         <>
//             <nav className={`fixed w-full top-0 z-50 transition-all duration-300  ${Active === "/" ? scrolled ? 'bg-[#1D26A1] backdrop-blur-md shadow-lg' : 'bg-transparent' : "bg-[#1D26A1] backdrop-blur-md shadow-lg"}`}>
//                 <div className="container mx-auto px-6">
//                     <div className="flex justify-between items-center">
//                         <Link to="/" className="flex items-center space-x-3">
//                             <img alt="ICCNDS 2025 Logo" className="w-20 " src="/assets/images/logo.png" />
//                         </Link>

//                         {/* Desktop Nav */}
//                         <div className="hidden lg:flex space-x-10">
//                             <Link to="/" className={`text-xl  transition duration-300 text-white  hover:text-yellow-500 ${Active === "/" ? " text-yellow-400" : "text-white"}`}>Home</Link>

//                             {/* About Dropdown */}
//                             <div className="relative " ref={deskaboutRef}>
//                                 <button className={`text-xl  flex items-center space-x-2 text-white hover:text-yellow-500 ${Active === "/about" || Active === "/scope" || Active === "/organizingCommittee" || Active === "/editorial" ? 'text-yellow-400' : 'text-white hover:text-white'}`} onClick={() => desktopmenu('about')}>
//                                     {/* <span className='capitalize'>{`${Active ==="/about" ? "About the Conference" : "About " || Active === "/scope" ? "Scope of the Conference" : "About"}`}</span> */}
//                                     <span>About Us</span>
//                                     <span className="text-sm"><IoIosArrowDropdown className='text-lg' /></span>
//                                 </button>
//                                 <div className={`absolute  overflow-hidden transition-all p-2 duration-400 ease-in-out bg-gray-100 shadow-lg rounded-md pt-5 pb-3 whitespace-nowrap ${isDesktopMenuOpen === 'about' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
//                                     <Link to="/about" className={`block px-4 py-2 hover:font-medium duration-150   rounded-md ${Active === "/about" ? " text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>About the Conference</Link>
//                                     <Link to="/scope" className={`block px-4 py-2 hover:font-medium duration-150 rounded-md  ${Active === "/scope" ? " text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Scope of Conference</Link>
//                                     <Link to="/organizingCommittee" className={`block px-4 py-2 hover:font-medium duration-150 rounded-md  ${Active === "/organizingCommittee" ? " text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Organizing Committee</Link>
//                                     <Link to="/editorial" className={`block px-4 py-2 hover:font-medium duration-150  rounded-md ${Active === "/editorial" ? " text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Editorial Board</Link>
//                                 </div>
//                             </div>

//                             {/* Author's Desk Dropdown */}
//                             <div className="relative" ref={deskAuthorRef}>
//                                 <button className={`text-xl  flex items-center space-x-2 text-white hover:text-yellow-500 ${Active === "/conferenceTracks" || Active === "/important-dates" || Active === "/paper-submission" ? 'text-yellow-400' : 'text-white hover:text-yellow-500'}`} onClick={() => desktopmenu('author')}>
//                                     <span>Author's Desk</span>
//                                     <span className="text-sm"><IoIosArrowDropdown className='text-lg' /></span>
//                                 </button>
//                                 <div className={`absolute overflow-hidden transition-all duration-500 ease-in-out bg-gray-100 p-2 shadow-lg rounded-md pt-5 pb-3 whitespace-nowrap ${isDesktopMenuOpen === 'author' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
//                                     <Link to="/conferenceTracks" className={`block px-4 py-2 hover:font-medium duration-150  rounded-md ${Active === "/conferenceTracks" ? "text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Conference Tracks</Link>
//                                     <Link to="/important-dates" className={`block px-4 py-2 hover:font-medium duration-150  rounded-md ${Active === "/important-dates" ? "text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Key Dates</Link>
//                                     <Link to="/paper-submission" className={`block px-4 py-2 hover:font-medium duration-150  rounded-md ${Active === "/paper-submission" ? "text-white font-medium bg-[#1D26A1]" : "text-black hover:text-[#1D26A1]"}`}>Paper Submission</Link>
//                                 </div>
//                             </div>

//                             {/* <Link to="/keyInvitees" className="text-2xl  text-white/80 hover:text-white">Key Invitees</Link> */}
//                             <Link to="/contact" className={`text-xl   hover:text-yellow-500 ${Active === "/contact" ? "text-yellow-400 " : "text-white"}`}>Contact Us</Link>
//                         </div>

//                         {/* Mobile Menu Button */}
//                         <button
//                             className="lg:hidden text-white focus:outline-none"
//                             onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//                         >
//                             {isMobileMenuOpen ? (
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
//                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
//                                     strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
//                                     <path d="M18 6L6 18M6 6l12 12" />
//                                 </svg>

//                             ) : (
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
//                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
//                                     strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
//                                     <line x1="4" x2="20" y1="12" y2="12" />
//                                     <line x1="4" x2="20" y1="6" y2="6" />
//                                     <line x1="4" x2="20" y1="18" y2="18" />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu Overlay */}

//                 <div
//                     ref={mobileRef}
//                     className={`fixed top-0 right-0 h-screen w-64 bg-[#0f1675] text-white shadow-lg z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//                         }`}
//                 >
//                     {/* Close button */}
//                     <button
//                         className="absolute top-5 right-5 text-white"
//                         onClick={() => setMobileMenuOpen(false)}
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
//                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
//                             strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
//                             <path d="M18 6L6 18M6 6l12 12" />
//                         </svg>
//                     </button>

//                     <div className="flex flex-col items-start mt-16 space-y-6 px-4">
//                         <Link to="/" className={`text-lg  transition duration-300 text-white  hover:text-white ${Active === "/" ? " text-yellow-400" : "text-white"}`}>Home</Link>

//                         {/* About Us Dropdown */}
//                         <div className='group '>
//                             <button className={`w-full text-left flex items-center space-x-2 ${Active === "/about" || Active === "/scope" || Active === "/organizingCommittee" || Active === "/editorial" ? 'text-yellow-500' : 'text-white/80 hover:text-yellow-400 '}`} onClick={() => toggleMenu('about')}>
//                                 <span className='text-lg'>About Us</span>
//                                 <span className="text-sm">{isOpen === "about" ? <IoIosArrowDropdown className='text-lg rotate-180 transition-transform duration-300' /> : <IoIosArrowDropdown className='text-lg transition-transform duration-300' />}</span>
//                             </button>
//                             <div
//                                 className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen === 'about' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
//                                     }`}
//                             >
//                                 <div className="pl-4 whitespace-nowrap mt-2 text-lg border rounded-md p-3 border-white ">
//                                     <a href="/about" className={`block py-1 hover:text-yellow-400  text-white ${Active === "/about" ? "text-yellow-500 " : "text-white"}`}>About the Conference</a>
//                                     <a href="/scope" className={`block py-1   text-white/90 hover:text-yellow-400  ${Active === "/scope" ? "text-yellow-500 " : "text-white"}`}>Scope of the Conference</a>
//                                     <a href="/organizingCommittee" className={`block py-1   text-white/90 hover:text-yellow-400  ${Active === "/organizingCommittee" ? "text-yellow-500 " : "text-white"}`}>Technical Committee</a>
//                                     <a href="/editorial" className={`block py-1   text-white/90 hover:text-yellow-400  ${Active === "/editorial" ? "text-yellow-500 " : "text-white"}`}>Editorial Board</a>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Author's Desk Dropdown */}
//                         <div className='group'>
//                             <button className={`w-full text-left flex items-center space-x-2 ${Active === "/conferenceTracks" || Active === "/important-dates" || Active === "/paper-submission" ? 'text-yellow-500' : 'text-white/80 hover:text-yellow-400 '}`} onClick={() => toggleMenu('author')}>
//                                 <span className='text-lg'>Author's Desk</span>
//                                 <span className="text-sm">{isOpen === "author" ? <IoIosArrowDropdown className='text-lg rotate-180 transition-transform duration-300' /> : <IoIosArrowDropdown className='text-lg transition-transform duration-300' />}</span>
//                             </button>
//                             <div
//                                 className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen === 'author' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
//                                     }`}
//                             >
//                                 <div className="pl-4 mt-2 text-lg  border rounded-md p-3 border-white ">
//                                     <a href="/conferenceTracks" className={`block py-1 text-white/90 hover:text-yellow-400  ${Active === "/conferenceTracks" ? "text-yellow-500 " : "text-white"}`}>Conference Tracks</a>
//                                     <a href="/important-dates" className={`block py-1 text-white/90 hover:text-yellow-400  ${Active === "/important-dates" ? "text-yellow-500 " : "text-white"}`}>Key Dates</a>
//                                     <a href="/paper-submission" className={`block py-1 text-white/90 hover:text-yellow-400  ${Active === "/paper-submission" ? "text-yellow-500 " : "text-white"}`}>Paper Submission</a>
//                                 </div>
//                             </div>

//                         </div>

//                         {/* <Link to="/keyInvitees" className="text-lg  text-white/90 hover:text-yellow-400 ">Key Invitees</Link> */}
//                         <a href="/contact" className={`text-lg  text-white hover:text-yellow-400  ${Active === "/contact" ? "text-yellow-500 " : "text-white"}`}>Contact Us</a>
//                     </div>
//                 </div>

//             </nav>
//         </>
//     )
// }

// export default Header