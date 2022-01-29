import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    //Validate Email address with Regex
    const validateEmail = email => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    //Setting the User Email in State after validating
    const getUserEmail = e => {
        const newUserEmail = e.target.value;
        if (validateEmail(newUserEmail)) {
            setEmailErrorMessage("");
        } else {
            e.target.value === "" ? setEmailErrorMessage("") : setEmailErrorMessage("Please Enter the correct Email Address !");
        }
        setUserEmail(newUserEmail);
    };

    //Setting Password in state after validating
    const getUserPassword = e => {
        const newPassword = e.target.value;
        if (newPassword.length < 8 && newPassword.length !== 0) {
            setPasswordErrorMessage("Password should be greater than 8 characters");
        } else {
            setPasswordErrorMessage("");
        }
        setPassword(newPassword);
    };

    //Login Handler
    // const loginHandler = () => {};

    //Password Error Message JSX
    const Passworderror = (
        <span className="flex items-center font-bold tracking-wide text-red-500 text-xs -mt-3 mb-6">{passwordErrorMessage}</span>
    );

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <div className="flex justify-center mb-8">
                    <div className="rounded-full w-20 h-20 bg-gray-900 flex text-center text-white text-2xl font-bold justify-center flex-col">
                        <div className="flex justify-center">
                            SYN<p className="text-orange-600">C</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <div className="px-5 py-7">
                        <Input label="E-mail" id="email" value={userEmail} onChange={getUserEmail} error={emailErrorMessage}></Input>

                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                        <input
                            type="password"
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            value={password}
                            onChange={getUserPassword}
                        />

                        {Passworderror}

                        <Button
                            name="Login"
                            isenabled={
                                emailErrorMessage === "" && passwordErrorMessage === "" && userEmail.length > 0 && password.length > 0
                            }
                            onClick={() => {
                                console.log("Clicked login");
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-4 h-4 inline-block"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Button>
                    </div>

                    <div className="p-5">
                        <Button
                            name="Sign Up"
                            isenabled={true}
                            buttonstyle="bg-red-500 hover:bg-red-600 focus:bg-red-700 focus:ring-red-500"
                            onClick={() => {
                                console.log("Clicked Sign up");
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-4 h-4 inline-block"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Button>
                    </div>

                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-4 h-4 inline-block align-text-top"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="inline-block ml-1">Forgot Password</span>
                                </button>
                            </div>
                            <div className="text-center sm:text-right whitespace-nowrap">
                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-4 h-4 inline-block align-text-bottom	"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                    <span className="inline-block ml-1">Help</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
