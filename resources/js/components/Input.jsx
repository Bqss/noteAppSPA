

const Input = ({validation , ...props}) => {
    const err = "border-red-500 dark:border-red-500 focus:ring-red-300/40 text-red-500 dark:text-red-500 focus:border-red-500";
    return (
        <>
            <input
                {...props}
                className={`rounded-md bg-transparent px-4 py-2  text-text-light text-sm dark:text-gray-300 border transition-colors ring-2 ring-transparent duration-300 outline-none  border-gray-500  focus:border-blue-400 focus:ring-blue-300/40 focus:invalid:border-red-500 focus:invalid:ring-red-500/40${
                    Boolean(validation) ? err : ""
                }`}
            />
            <span className="text-xs text-red-500 mt-1 ">{validation ?? ""}</span>
        </>
    );
}


export default Input;