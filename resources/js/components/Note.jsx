import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

function Note({ cdata }) {
    const { note_title, created_at, note_text , id } = cdata;

    const deleteNote = (e) => {
        e.preventDefault();
        Inertia.delete(`/delete/${id}`);

    }
    const archiveNote = (e) => {
        e.preventDefault();
        Inertia.put(`/archive?id=${id}`);
    }

    return (
        <div className="bg-white dark:bg-secondary-dark p-6 flex flex-col justify-between rounded-md min-h-[15rem]">
            <div>
                <h3 className="text-text-light dark:text-text-dark line-clamp-1 truncate ">
                    {note_title}
                </h3>
                <p className="text-text-light dark:text-text-dark  text-sm mt-2 ">
                    {created_at}
                </p>
                <p className="text-text-light dark:text-text-dark  text-sm mt-3 line-clamp-2 break-words">
                    {note_text}
                </p>
            </div>

            <div className="mt-6 flex gap-2">
                <form onSubmit={deleteNote}  className="relative">
                    <input type="hidden" name="_method" value="DELETE"/>
                    <button
                        type="submit"
                        className="p-2 rounded-md bg-btn-delete-light dark:bg-btn-delete-dark   peer  "
                        value="delete"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            className="w-5 h-5  stroke-red-500 dark:stroke-red-200"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                    </button>
                    <span className="bg-black w-max py-1 px-2 rounded-md text-sm text-text-dark invisible transition duration-300 opacity-0 absolute  peer-hover:visible peer-hover:opacity-100 -top-10 left-1/2 -translate-x-1/2 ">
                        Delete
                    </span>
                </form>

                <form onSubmit={archiveNote} className="relative">

                    <input type="hidden" name="_method" value="PUT" />
                    <button
                        type="submit"
                        className="p-2 rounded-md bg-btn-archive-light dark:bg-btn-archive-dark  peer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            className=" stroke-green-500 dark:stroke-green-200 w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                            />
                        </svg>
                    </button>
                    <span className="bg-black w-max py-1 px-2 rounded-md text-sm text-text-dark invisible transition duration-300 opacity-0 absolute  peer-hover:visible peer-hover:opacity-100 -top-10 left-1/2 -translate-x-1/2 ">
                        Archive Note
                    </span>
                </form>

                <Link href="#" className="relative">
                    <button
                        type="submit"
                        className="p-2 rounded-md bg-btn-detail-light dark:bg-btn-detail-dark peer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            className="w-6 h-5  stroke-blue-500 dark:stroke-blue-200"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </button>
                    <span className="bg-black w-max py-1 px-2 rounded-md text-sm text-text-dark invisible transition duration-300 opacity-0 absolute  peer-hover:visible peer-hover:opacity-100 -top-10 left-1/2 -translate-x-1/2 ">
                        See Detail
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Note;
