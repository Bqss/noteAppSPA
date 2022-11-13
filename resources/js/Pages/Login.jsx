import React, { useState } from "react";
import PageLayout from "@/layout/PageLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Input from "@/components/Input";
function Login({  errors }) {
    const [payload, setpayload] = useState({
        email: "",
        password: "",
    });

    const handleChange = ({ target }) => {
        setpayload((old) => ({
            ...old,
            [target.name]: target.value,
        }));
    };

    const attempLogin = (ev) => {
        ev.preventDefault();
        Inertia.post("/login", payload);
    };

    return (
        <PageLayout>
            <Head title="Login" />
            <div className=" p-10 flex  flex-col md:flex-row md:items-center bg-secondary-light mx-auto dark:bg-secondary-dark rounded-lg mt-7">
                <div className=" hidden md:block w-7/12">
                    <img
                        src="/images/loginil.webp"
                        className="-ml-12 rounded-md"
                        alt="login-ilustraation"
                    />
                </div>
                <div className="text-light dark:text-text-dark">
                    <h1 className="mb-1">Hello, welcome back </h1>
                    <p>
                        Happy to meet with you again , let's login to continue
                    </p>
                    <form className="mt-6" onSubmit={attempLogin}>
                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="text-sm text-gray-600 dark:text-gray-300"
                            >
                                Email
                            </label>
                            <Input
                                type="email"
                                name="email"
                                value={payload.email}
                                onChange={handleChange}
                                id="email"
                                autoComplete="email"
                                validation={errors.email}
                            />
                        </div>
                        <div className="flex flex-col mt-3">
                            <label
                                htmlFor="password"
                                className="text-sm text-gray-600 dark:text-gray-300"
                            >
                                Password
                            </label>
                            <Input
                                type="password"
                                name="password"
                                value={payload.password}
                                onChange={handleChange}
                                id="password"
                                validation={errors.password}
                                autoComplete="current-password"
                            />
                        </div>
                        <input
                            role="button"
                            type="submit"
                            className="w-full bg-blue-600 py-3 block mt-6 font-medium text-text-dark  rounded-md hover:bg-blue-700 "
                            value="Login"
                        />
                        <p className="text-sm text-black dark:text-white mt-4">
                            Don't have account ?, click{" "}
                            <Link href="/register" className="text-blue-400">
                                here{" "}
                            </Link>
                            to Signup
                        </p>
                    </form>
                </div>
            </div>
        </PageLayout>
    );
}

export default Login;
