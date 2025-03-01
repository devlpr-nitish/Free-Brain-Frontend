import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { ReactElement } from "react";


const socialInfo = [

    {
        link:"",
        icon:<FaInstagram/>
    },
    {
        link:"",
        icon:<FaXTwitter/>
    },
    {
        link:"",
        icon:<CiLinkedin/>
    },
    {
        link:"",
        icon:<FaGithub/>
    },
    
]

interface SetLinkProp{
    link:string;
    icon:ReactElement;
}

const SetLink = ({link, icon}:SetLinkProp) =>{
    return(
        <a className="text-2xl hover:text-purple-600 transition-all ease-in-out" href={link} target="_blank">
            {icon}
        </a>
    )
}


const Footer = () => {


  return (
    <div className="w-full bg-white mt-10 rounded-md px-8 py-2 flex justify-between   items-center gap-4">
        

        <div className="text-lg ">
            <span className="">Made with ❤️ by <span className="text-purple-600">Nitish</span></span>
        </div>


        <div className="flex gap-6">
            {
                socialInfo.map((social, index) => (
                    <SetLink key={index} link={social.link} icon={social.icon}/>
                ))
            }
        </div>
    </div>
  )
}

export default Footer;