import React from "react";
import PageLayout from "@/layout/PageLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import Toast from "@/components/Toast";
import { isEmpty } from "lodash";


function Register({errors , status}) {
    return (
        <PageLayout>
            <Head title="Register"></Head>
            {
                !isEmpty(status) && (
                    
                ) 
            }

            <div class=" p-10 flex flex-col md:flex-row md:items-center  bg-secondary-light mx-auto dark:bg-secondary-dark rounded-lg mt-7">
                <div class=" hidden md:block w-7/12">
                    <img
                        src="/images/loginil.webp"
                        class="-ml-12 rounded-md"
                        alt="login-ilustration"
                    />
                </div>
                <div class="text-light dark:text-text-dark w-5/12">
                    <h1 class="mb-1">Let's Get Started</h1>
                    <p>Register now and enjoy write your notes</p>

                    <form action="/register" class="mt-6" method="POST">
                     
                        <div class="flex flex-col">
                            <label
                                for="username"
                                class="text-sm text-gray-600 dark:text-gray-300 mb-1"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value=""
                                class="rounded-md bg-transparent px-4 py-2  text-text-light text-sm dark:text-gray-300 border transition-colors ring-2 ring-transparent duration-300 outline-none  border-gray-500  @error('username') border-red-500 dark:border-red-500 focus:ring-red-300/40 focus:border-red-500 @enderror focus:border-blue-400 focus:ring-blue-300/40"
                                placeholder="Enter your username"
                                autocomplete="username"
                            />

                            {/* <small class="text-xs mt-1 text-red-500">{{ $errors->first('username') }}</small> */}
                        </div>
                        <div class="flex flex-col mt-2">
                            <label
                                for="email"
                                class="text-sm text-gray-600 dark:text-gray-300 mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value=""
                                class="rounded-md bg-transparent px-4 py-2  text-text-light text-sm dark:text-gray-300 border transition-colors ring-2 ring-transparent duration-300 outline-none  border-gray-500  @error('email') border-red-500 dark:border-red-500 focus:ring-red-300/40 focus:border-red-500 @enderror focus:border-blue-400 focus:ring-blue-300/40"
                                autocomplete="email"
                                placeholder="Enter your email"
                            />
                            {/* <small class="text-xs mt-1 text-red-500">{{ $errors->first('email') }}</small> */}
                        </div>
                        <div class="flex flex-col mt-2">
                            <label
                                for="password"
                                class="text-sm text-gray-600 dark:text-gray-300 mb-1"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                class="rounded-md bg-transparent px-4 py-2  text-text-light text-sm dark:text-gray-300 border transition-colors ring-2 ring-transparent duration-300 outline-none  border-gray-500  @error('password') border-red-500 dark:border-red-500 focus:ring-red-300/40 focus:border-red-500 @enderror focus:border-blue-400 focus:ring-blue-300/40"
                                placeholder="Enter your password"
                                autocomplete="new-password"
                            />
                            {/* <small class="text-xs mt-1 text-red-500">{{ $errors->first('password') }}</small> */}
                        </div>
                        <div class="flex flex-col mt-2">
                            <label
                                for="pass_confirm"
                                class="text-sm text-gray-600 dark:text-gray-300 mb-1 "
                            >
                                Password Confirmation
                            </label>
                            <input
                                type="password"
                                name="pass_confirm"
                                id="confirm_password"
                                class="rounded-md bg-transparent px-4 py-2  text-text-light text-sm dark:text-gray-300 border transition-colors ring-2 ring-transparent duration-300 outline-none  border-gray-500  @error('pass_confirm') border-red-500 dark:border-red-500 focus:ring-red-300/40 focus:border-red-500 @enderror focus:border-blue-400 focus:ring-blue-300/40"
                                autocomplete="current-password"
                                placeholder="Enter your confirm password"
                            />
                            {/* <small class="text-xs mt-1 text-red-500">{{ $errors->first('pass_confirm') }}</small> */}
                        </div>
                        <input
                            role="button"
                            type="submit"
                            class="w-full bg-blue-600 py-2 block mt-6 font-medium text-text-dark  rounded-md hover:bg-blue-700 "
                            value="Register"
                        />
                        <p class="text-sm text-black dark:text-white mt-2">
                            Have account ?, click{" "}
                            <Link href="/login" class="text-blue-400">
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
