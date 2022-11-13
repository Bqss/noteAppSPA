import React, { useEffect  ,useState} from "react";
import Navbar from "@/components/Navbar";
import { Inertia } from "@inertiajs/inertia";
import Toast from "@/components/Toast";
import {  useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { usePage } from "@inertiajs/inertia-react";

function PageLayout({ children}) {
    const {flash} = usePage().props ?? {};
    const [err, seterr] = useState(!isEmpty(flash));
    const theme = useSelector((state) => state.theme.isDark);

    const showNotif = () => {
        seterr(true);
    };
    const hideNotif = () => {
        seterr(false);
    };
    useEffect(() => {
        return Inertia.on("error", (ev) => {
            showNotif();
        });
    }, []);
    useEffect(() => {
        return Inertia.on("success", (ev) => {
            showNotif();
        });
    }, []);
    useEffect(() => {
        document.body.classList = theme
            ? "bg-primary-dark dark"
            : "bg-primary-light";
    }, [theme]);

    return (
        <div className="w-11/12 mx-auto max-w-[60rem] font-nunito">
            <Navbar />
            <Toast
                title={flash.code == 201 ? "Succes" : "Error"}
                msg={flash.msg}
                className={flash.code == 201 ? "bg-green-500" : "bg-red-500"}
                show={err}
                onClose={hideNotif}
                autoClose={5000}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-7 h-7"
                >
                    {flash.code == 201 ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    )}
                </svg>
            </Toast>
            {children}
        </div>
    );
}

export default PageLayout;
