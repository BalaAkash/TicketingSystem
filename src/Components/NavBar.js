import React from "react";

import styles from "./NavBar.module.css";

function NavBar(props) {
    const burgerMenuHandler = () => {
        console.log("as");
        const height = document.getElementsByClassName("mobile-menu")[0].style.maxHeight;
        if (height === "200px") {
            document.getElementsByClassName("mobile-menu")[0].style.maxHeight = "0px";
        } else {
            document.getElementsByClassName("mobile-menu")[0].style.maxHeight = "200px";
        }
    };
    return (
        // <!-- navbar goes here -->
        <>
            <nav className="bg-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            {/* <!-- logo --> */}
                            <div>
                                <a href="/#" className="flex items-center py-3 px-2 text-gray-700 hover:text-gray-900">
                                    <div className="rounded-full py-2 px-5 bg-gray-900 flex text-center text-white text-md font-bold justify-center flex-col">
                                        <div className="flex justify-center">
                                            SYN<p className="text-orange-600">C</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* <!-- primary nav --> */}
                            <div className="hidden md:flex items-center space-x-1">
                                <a href="/#" className="py-3 px-3 text-gray-700 hover:text-gray-900">
                                    Home
                                </a>
                                <a href="/#" className="py-3 px-3 text-gray-700 hover:text-gray-900">
                                    Create Order
                                </a>
                                <a href="/#" className="py-3 px-3 text-gray-700 hover:text-gray-900">
                                    Track Order
                                </a>
                                <a href="/#" className="py-3 px-3 text-gray-700 hover:text-gray-900">
                                    Create Customer
                                </a>
                                <a href="/#" className="py-3 px-3 text-gray-700 hover:text-gray-900">
                                    Create User
                                </a>
                            </div>
                        </div>

                        {/* <!-- secondary nav --> */}
                        <div className="hidden md:flex items-center space-x-1">
                            <a
                                href=""
                                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded-lg transition duration-300"
                            >
                                Logout
                            </a>
                        </div>

                        {/* <!-- mobile button goes here --> */}
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button" onClick={burgerMenuHandler}>
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- mobile menu --> */}
                <div className={"mobile-menu " + styles.transitionBurger}>
                    <a href="/#" className="block py-2 px-4 text-sm hover:bg-gray-300">
                        Home
                    </a>
                    <a href="/#" className="block py-2 px-4 text-sm hover:bg-gray-300">
                        Create Order
                    </a>
                    <a href="/#" className="block py-2 px-4 text-sm hover:bg-gray-300">
                        Track Order
                    </a>
                    <a href="/#" className="block py-2 pb-3 px-4 text-sm hover:bg-gray-300">
                        Create Customer
                    </a>
                    <a href="/#" className="block py-2 pb-3 px-4 text-sm hover:bg-gray-300">
                        Create User
                    </a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
