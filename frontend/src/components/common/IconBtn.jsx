export default function IconBtn({text, onclick, children, disabled, outline = false, customClasses, type, }) {
    return (
        <button
            disabled={disabled}
            onClick={onclick}
            className={`flex items-center justify-center outline-none ${outline ? "border border-teal-50 bg-transparent" : "bg-teal-50"
                } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 hover:bg-black hover:text-teal-50 duration-300 ${customClasses}`}
            type={type}
        >
            {
                children ? (
                    <>
                        <span className={`${outline && "text-teal-50"}`}>{text}</span>
                        {children}
                    </>
                ) :
                    (text)
            }
        </button>
    )
}