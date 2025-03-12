import { useNavigate } from "react-router-dom";
import AccountIcon from "../icons/AccountIcon";
import LogoutIcon from "../icons/LogoutIcon";
import { DashBoardInfo } from "./DashBoard";
import { toast } from "sonner";


const Account = () => {

  const navigate = useNavigate();

  const logoutUser = () =>{

    localStorage.removeItem("token");
    localStorage.removeItem("username");  

    toast("User Logged out !!!");

    setTimeout(()=>{
      navigate("/auth")
    },1000)
  }
  return (
    <div className="flex flex-col w-full px-24 py-28 gap-12 bg-white ">
      <div className="">
        <h1 className="text-3xl font-bold">Basic Information</h1>
      </div>

      <div className="flex items-center gap-4 w-1/3">
        <div className="bg-gray-200 p-6 rounded-full text-purple-600">
          
            <AccountIcon size="lg"/>
          
        </div>

        <div className="flex items-center gap-4" title="logout">
          <span className="text-xl " >
            devlprnitish
          </span>

          <span onClick={logoutUser} className="rotate-90 cursor-pointer hover:text-purple-600">
            <LogoutIcon/>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4  w-full">
        {/* <div className="w-1/3 text-xl font-bold text-gray-800">
          Total Content :{" "}{45}
        </div> */}

        <div className="w-1/3 flex flex-col gap-2">
        {DashBoardInfo.map((info, index) => (
          <div
            key={index}
            className="w-full flex items-center gap-2 py-2  rounded-lg"
          >
            <div className="text-xl">{info.icon}</div>
            <div className="text-lg font-medium">{info.name}</div>
            <div className="text-purple-600">
              {": "}{10}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Account;