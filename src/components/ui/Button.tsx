import { ReactElement } from "react";

interface ButtonProps{
    variant: "primary" | "secondary" | "home";
    size:"sm"|"md" |"lg";
    text:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement ;
    onClick: () => void;
}


const variantStyles = {
    "primary" :"bg-purple-600 text-white shadow-sm hover:bg-purple-500 transition",
    "secondary":"border border-purple-300 text-purple-600 shadow-sm hover:bg-purple-100 transition",
    "home":"bg-white border border-purple-300 text-black shadow-md hover:bg-purple-100 transition font-normal "
}

const defaultStyles = "rounded-md flex items-center font-light cursor-pointer";

const sizeStyles = {
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
}

export const Button = (props:ButtonProps) =>{

    return <button className={`flex items-center ${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`} >
        {props.startIcon}
        <div className="pr-2 pl-2">
            {props.text}
        </div>
        {props.endIcon}
        </button>
}

