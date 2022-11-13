import React, { Fragment, useEffect, useState } from "react";
import { Head  } from "@inertiajs/inertia-react";
import PageLayout from "@/layout/PageLayout";
import Note from "@/components/Note";
import { Transition, Dialog } from "@headlessui/react";
import { Inertia  } from "@inertiajs/inertia";


function Dashboard({ notes, errors  , flash}) {

    const [dialogOpen, setdialogOpen] = useState(false);
    const [search, setsearch] = useState("");
    const [values, setvalues] = useState({
        note_title: "",
        note_text: "",
    });

    const [filteredNotes, setfilteredNotes] = useState([]);
    useEffect(() => {
        setfilteredNotes(() => (
            search ? notes.filter((v) => v.note_title.includes(search)) : notes 
        ))},[search , notes]);
    
    const handleChange = ({ target }) => {
        setvalues((old) => ({
            ...old,
            [target.id]: target.value,
        }));
    };

    const handleSubmit = (event) => {
        closeModal();
        event.preventDefault();
        setvalues({
            note_title: "",
            note_text: "",
        });
       Inertia.post("/", values);
    };

    useEffect(() => {
        flash.code && flash.code  != 201 && openModal();
    },[flash])

    const openModal = () => {
        setdialogOpen(true);
    };

    const closeModal = () => {
        setdialogOpen(false);
    };


    return (
        <PageLayout >
            <Head title="Dashboard" />

            <div className="mt-6">
                <div className="flex items-end justify-between">
                    <button
                        onClick={openModal}
                        className="bg-blue-600 text-base font-medium px-4 py-2 rounded-md text-text-dark"
                    >
                        Add Notes
                    </button>
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
                <Transition show={dialogOpen} appear>
                    <Dialog
                        as="div"
                        onClose={closeModal}
                        className="relative z-10"
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 backdrop-blur-sm" />
                        </Transition.Child>

                        <div className="fixed inset-0 ">
                            <div className="flex min-h-full items-center justify-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-150"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-150"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel as={Fragment}>
                                        <div className="w-11/12 max-w-2xl p-6 pt-8 rounded-lg bg-white -mt-10 bg-gray-white text-black dark:text-white dark:bg-[#1A1B1E]">
                                            <div className="flex justify-between">
                                                <span>Create New Note</span>
                                                <button
                                                    onClick={() =>
                                                        setdialogOpen(false)
                                                    }
                                                    className="p-1 rounded-md border border-transparent active:border-white"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <form
                                                onSubmit={handleSubmit}
                                                className="mt-10"
                                            >
                                                <div className="mb-2">
                                                    <label
                                                        htmlFor="note_title"
                                                        className="text-sm"
                                                    >
                                                        Title*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={
                                                            values?.note_title
                                                        }
                                                        onChange={handleChange}
                                                        className="w-full rounded-md bg-white dark:bg-secondary-dark text-sm p-2 px-5 border ring-1 ring-transparent border-gray-300 dark:border-gray-700 outline-none  transition-color duration-150  @error('title')  border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-300/60 @enderror focus:ring-blue-300/50 focus:border-blue-500  dark:focus:border-blue-500 "
                                                        name="note_title"
                                                        id="note_title"
                                                    />
                                                    <span className="text-xs text-red-500">
                                                        {errors.note_title ??
                                                            ""}
                                                    </span>
                                                </div>
                                                <div className="">
                                                    <label
                                                        htmlFor="note_text"
                                                        className="text-sm"
                                                    >
                                                        Body*
                                                    </label>
                                                    <textarea
                                                        name="body"
                                                        id="note_text"
                                                        className="w-full rounded-md resize-none bg-white dark:bg-secondary-dark text-sm p-2 px-5 border ring-1 ring-transparent border-gray-300 dark:border-gray-700 outline-none transition-color duration-150   @error('body') border-red-500 dark:border-red-500  focus:border-red-500 dark:focus:border-red-500 focus:ring-red-300/60 @enderror focus:ring-blue-300/50  focus:border-blue-500 dark:focus:border-blue-500"
                                                        rows="10"
                                                        value={
                                                            values?.note_text
                                                        }
                                                        onChange={handleChange}
                                                    ></textarea>
                                                    <span className="text-xs text-red-500">
                                                        {errors.note_text ?? ""}
                                                    </span>
                                                </div>
                                                <input
                                                    type="submit"
                                                    className="w-full bg-blue-600  text-white dar rounded-md py-3 text-sm mt-2 hover:bg-blue-500"
                                                    role="button"
                                                    value="Add Note"
                                                />
                                            </form>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>

                { filteredNotes.length > 0  ? (
                    <div className="grid items-start mt-6 grid-cols-1 max-h-[70vh] scrollbar-thin dark:scrollbar-track-black scrollbar-track-gray-400  scrollbar-thumb-white dark:scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-100  scrollbar-thumb-rounded-md   overflow-y-scroll sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {filteredNotes.map((e, i) => (
                            <Note version={1} cdata={e} key={i} />
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
