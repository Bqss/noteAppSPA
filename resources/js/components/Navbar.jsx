import React, { Fragment } from "react";
import { Link } from "@inertiajs/inertia-react";
import {Menu , Transition} from "@headlessui/react";
import { toggle } from "@/fitures/theme";
import { useDispatch } from "react-redux";
import { usePage } from "@inertiajs/inertia-react";
function Navbar() {
    const dispatch = useDispatch();
    const {auth } = usePage().props;
    const {url} = usePage();
    
    return (
        <nav className="transition-colors duration-300">
            <div className=" flex justify-between  mt-10 mx-auto bg-secondary-light dark:bg-secondary-dark px-5 py-4 rounded-lg items-center">
                <Link href="/" className="inline-flex items-center gap-4">
                    <img
                        src="/images/logo.jfif"
                        alt="logo"
                        className="w-10 h-10 rounded-lg"
                    />
                    <span className="text-xl text-text-light dark:text-text-dark font-semibold">
                        Note App
                    </span>
                </Link>

                {auth.user && (
                    <div>
                        <Link href="/">
                            <button
                                className={` py-2 text-blue-400  dark:text-slate-300  px-4 rounded-sm ${
                                    url === "/"
                                        ? "bg-navButton-light dark:bg-navButton-dark"
                                        : ""
                                }`}
                            >
                                Home
                            </button>
                        </Link>
                        <Link href="/archive" >
                            <button
                                className={` py-2 text-blue-400  dark:text-slate-300  px-4 rounded-sm ${
                                    url === "/archive"
                                        ? "bg-navButton-light dark:bg-navButton-dark"
                                        : ""
                                }`}
                            >
                                Archive
                            </button>
                        </Link>
                    </div>
                )}

                <div className="flex gap-4 items-center">
                    <div className="flex item-center gap-4">
                        <button
                            className="bg-theme-button-light dark:bg-theme-button-dark p-2 rounded-md"
                            onClick={() => dispatch(toggle())}
                        >
                            <svg
                                className=" w-5 h-5 dark:stroke-white "
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                />
                            </svg>
                        </button>
                    </div>
                    {auth.user && (
                        <div className="relative">
                            <Menu>
                                <Menu.Button
                                    className={
                                        "bg-navButton-light border border-transparent dark:bg-navButton-dark p-[.3rem] rounded-md active:border-white "
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        className="w-6 h-6 stroke-black dark:stroke-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        className={
                                            "absolute top-16 right-0 bg-blue-500 p-2 z-10 rounded-md flex flex-col space-y-2 w-max"
                                        }
                                    >
                                        <Menu.Item className="py-2 px-4 text-white rounded-md hover:bg-blue-400 text-sm  transition-colors duration-150">
                                            <Link href="/profile">
                                                View Profile
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item className="py-2 px-4 text-white rounded-md hover:bg-blue-400 text-sm  transition-colors duration-150">
                                            <Link href="/logout">Logout</Link>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
