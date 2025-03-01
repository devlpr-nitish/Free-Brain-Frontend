import { useNavigate } from "react-router-dom"
import AccountIcon from "../icons/AccountIcon"
import DashboardIcon from "../icons/DashboardIcon"
import HomeIcon from "../icons/HomeIcon";



const NavBar = () => {

    const navItems = [
        {
            name:"Free Brain",
            icon: <HomeIcon/>,
            link:"/"
        },
        {
            name:"Dashboard",
            icon: <DashboardIcon/>,
            link:"/dashboard"
        },
        {
            name:"Account",
            icon:<AccountIcon/>,
            link:"/user"
        }
    ]

    const navigate = useNavigate();

    const navigateOnClick = (link:string)    =>{
        navigate(link);
    }

  return (
    <div className= "w-full bg-white flex justify-evenly px-4 py-2 mx-auto rounded-md h-20 mb-10">
        {
            navItems.map((item, index) =>(
                <div key={index} onClick={() => navigateOnClick(item.link)} className="flex items-center gap-1 cursor-pointer p-4 rounded-md transform transition duration-300 hover:text-purple-600 ">
                    <div className="text-purple-600 text-3xl">
                        {item.icon}
                    </div>

                    <div className="mt-1 text-xl font-normal">
                        {item.name}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default NavBar