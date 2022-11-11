import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useEffect } from "react";
const Toast = ({
    type = 0,
    children,
    msg,
    isShow,
    onClose,
}) => {
    const style = ["bg-red-500", "bg-yellow-500", "bg-green-500"];
    const title = ["Error" , "Warning" , "Success"]
    const baseStyle ="w-11/12 max-w-sm shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden";
    return (
        <Transition show={isShow}>
            <div
                aria-live="assertive"
                className="fixed inset-0  flex items-start z-20 px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
            >
                <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                    <Transition.Child
                        enter="transition-all duration-700"
                        enterFrom="opacity-0 translate-x-full"
                        enterTo="opacity-1 translate-x-0"
                        leave="transition-all duration-700"
                        leaveFrom="opacity-1 translate-x-0"
                        leaveTo="opacity-0 translate-x-full"
                        as={Fragment}
                    >
                        <div className={style[type] + " " + baseStyle}>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">{children}</div>
                                    <div className="flex w-full items-center">
                                        <div className="ml-3  flex-1 pt-0.5">
                                            <p className="text-base font-medium text-black dark:text-white">
                                                {title[type ]}
                                            </p>
                                            <p className="mt-1 text-sm text-black dark:text-white ">
                                                {msg}
                                            </p>
                                        </div>
                                        <button
                                            className="bg-white rounded-md inline-flex ml-auto text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 group"
                                            onClick={onClose}
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </div>
        </Transition>
    );
};

export default Toast;
