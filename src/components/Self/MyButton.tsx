import { ReactElement } from "react";

interface ButtonProps{
    variant: "primary" | "secondary";
    size:"sm"|"md" |"lg";
    text:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement ;
    onClick?: () => void; 
}


const variantStyles = {
    "primary" :"bg-[#594ef1] text-white shadow-sm hover:bg-[#594ef1e0] transition",
    "secondary":"border border-[#594ef1] text-[#594ef1] shadow-sm hover:bg-[#594ef1] hover:text-white transition",
}

const defaultStyles = "rounded-md flex items-center font-light cursor-pointer";

const sizeStyles = {
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
}

export const MyButton = (props:ButtonProps) =>{

    return <button onClick={props.onClick} className={`flex items-center ${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`} >
        {props.startIcon}
        <div className="pr-2 pl-2">
            {props.text}
        </div>
        {props.endIcon}
        </button>
}

