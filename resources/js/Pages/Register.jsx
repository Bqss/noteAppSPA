import React , {useState } from "react";
import PageLayout from "@/layout/PageLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Input from "@/components/Input";


function Register({errors}) {

    const [payload, setpayload] = useState({
        username : "",
        email : "",
        password : "",
        password_confirm : ""
    });

    const handleChange = ({target}) => {
        setpayload(old => ({
            ...old,
            [target.name] : target.value
        }))
    }
    const storeUser = (e) => { 
        e.preventDefault();
        Inertia.post("/register",payload);
    }

    return (
        <PageLayout>
            <Head title="Register"></Head>
            <div className=" p-10 flex flex-col md:flex-row md:items-center  bg-secondary-light mx-auto dark:bg-secondary-dark rounded-lg mt-7">
                <div className=" hidden md:block w-7/12">
                    <img
                        src="/images/loginil.webp"
                        className="-ml-12 rounded-md"
                        alt="login-ilustration"
                    />
                </div>
                <div className="text-light dark:text-text-dark w-5/12">
                    <h1 className="mb-1">Let's Get Started</h1>
                    <p>Register now and enjoy write your notes</p>

                    <form onSubmit={storeUser} className="mt-6">
                        <div className="flex flex-col">
                            <label
                                htmlFor="username"
                                className="text-sm text-gray-600 dark:text-gray-300 mb-1"
                            >
                                Username
                            </label>

                            <Input
                                type="text"
                                name="username"
                                id="username"
                                validation={errors.username}
                                onChange={handleChange}
                                value={payload.username}
                                placeholder="Enter your username"
                                autoComplete="username"
                            />

                            {/* <small className="text-xs mt-1 text-red-500">{{ $errors->first('username') }}</small> */}
                        </div>
                        <div className="flex flex-col mt-2">
                            <label
                                htmlFor="email"
                                className="text-sm text-gray-600 dark:text-gray-300 mb-1"
                            >
                                Email
                            </label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                value={payload.email}
                                validation={errors.email}
                                autoComplete="email"
                                placeholder="Enter your email"
                            />
                            {/* <small className="text-xs mt-1 text-red-500">{{ $errors->first('email') }}</small> */}
                        </div>
                        <div className="flex flex-col mt-2">
                            <label
                                htmlFor="password"
                                className="text-sm text-gray-600 dark:text-gray-300 mb-1"
                            >
                                Password
                            </label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChange}
                                value={payload.password}
                                validation={errors.password}
                                placeholder="Enter your password"
                                autoComplete="new-password"
                            />
                            {/* <small className="text-xs mt-1 text-red-500">{{ $errors->first('password') }}</small> */}
                        </div>
                        <div className="flex flex-col mt-2">
                            <label
                                htmlFor="pass_confirm"
                                className="text-sm text-gray-600 dark:text-gray-300 mb-1 "
                            >
                                Password Confirmation
                            </label>
                            <Input
                                type="password"
                                name="password_confirm"
                                value={payload.password_confirm}
                                onChange={handleChange}
                                id="confirm_password"
                                validation={errors.password_confirm}
                                autoComplete="current-password"
                                placeholder="Enter your confirm password"
                            />
                            {/* <small className="text-xs mt-1 text-red-500">{{ $errors->first('pass_confirm') }}</small> */}
                        </div>
                        <input
                            role="button"
                            type="submit"
                            className="w-full bg-blue-600 py-2 block mt-6 font-medium text-text-dark  rounded-md hover:bg-blue-700 "
                            value="Register"
                        />
                        <p className="text-sm text-black dark:text-white mt-2">
                            Have account ?, click{" "}
                            <Link href="/login" className="text-blue-400">
                                here{" "}
                            </Link>
                            to Login
                        </p>
                    </form>
                </div>
            </div>
        </PageLayout>
    );
}

export default Register;
