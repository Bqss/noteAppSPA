import React, { Fragment, useEffect, useState } from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import PageLayout from "@/layout/PageLayout";
import Note from "@/components/Note";
import { Inertia } from "@inertiajs/inertia";
import Toast from "@/components/Toast";

function Dashboard({ notes, errors }) {
    const { flash } = usePage().props;
    const [search, setsearch] = useState("");
    const [toast, settoast] = useState(false);



    useEffect(() => {
        Object.keys(flash ?? {}).length > 0 && settoast(true);
    }, [flash]);

    useEffect(() => {
        toast &&
            setTimeout(() => {
                settoast(false);
            }, 5000);
    }, [toast]);


    return (
        <PageLayout>
            <Head title="Dashboard" />

            <Toast
                isShow={toast}
                onClose={() => settoast(false)}
                msg={flash.msg}
                type={flash.code === 201 ? 2 : 0}
            >
                {flash.code === 201 ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                    </svg>
                )}
            </Toast>

            <div className="mt-6">
                <div className="flex items-end justify-end">
                    
                    <form action="">
                        <div className="relative">
                            <input
                                type="text"
                                id="search"
                                className=" text-sm text-text-light focus:pl-5 transition-all peer dark:text-text-dark bg-white dark:bg-secondary-dark  px-5 py-2 pl-10  border outline-none rounded-md border-gray-300 dark:border-transparent  focus:border-blue-500  dark:focus:border-blue-500 "
                                name="search"
                                value={search}
                                onChange={(e) => setsearch(e.target.value)}
                                placeholder="Search by title"
                            />
                            <label
                                htmlFor="search"
                                className="absolute left-2 top-1/2 -translate-y-1/2 cursor-text peer-focus:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="stroke-black dark:stroke-white"
                                    strokeWidth="1.5"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </label>
                        </div>
                    </form>
                </div>
                

                {notes.length > 0 ? (
                    <div className="grid items-start mt-6 grid-cols-1 max-h-[70vh] scrollbar-thin dark:scrollbar-track-black scrollbar-track-gray-400  scrollbar-thumb-white dark:scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-100  scrollbar-thumb-rounded-md   overflow-y-scroll sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {notes.map((e, i) => (
                            <Note cdata={e} key={i} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center rounded-lgf bg-white dark:bg-secondary-dark py-24 mt-8 ">
                        There's no active note
                    </p>
                )}
            </div>
        </PageLayout>
    );
}

export default Dashboard;
