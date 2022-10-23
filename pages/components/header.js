import { ImFacebook, ImYoutube, ImTwitter } from "react-icons/im";
import Link from "next/link";
import Section1 from "./section1";
import Section2 from "./section2";
import { FaGithubSquare, FaSquarespace } from "react-icons/fa";
import {
  MdOutlineSpaceDashboard,
  MdSettingsBrightness,
  MdSpaceDashboard,
  MdTrackChanges,
} from "react-icons/md";

import { FiSettings } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { GrClose  } from "react-icons/gr";
import { GiAbstract012 } from "react-icons/gi";
import { TiArrowForward } from "react-icons/ti";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

export default function Header() {
const[open, setOpen]= useState(false)
function menu(){
setOpen(!open)
console.log('')

}
  
  return (
    <header className=" bg-slate-800 flex ">
      <div className="bg-slate-700 w-[5rem] h-[165vh] head ">
        <div className="px-7">
          <img src="/images/here.jpg" className="w-[40px] " alt="yut" />
        </div>
        <div className="flex flex-col   w-[5rem] h-[200px] justify-between  pt-4 ">
          <div className=" w-[5rem] px-6  hover:border-l-2 border-l-2 hover:border-orange-200  hover:bg-slate-600 py-3 border-transparent">
            <MdOutlineSpaceDashboard size={35} color="gray" />
          </div>
          <div className=" w-[5rem] px-6  hover:border-l-2 border-l-2 hover:border-orange-200  hover:bg-slate-600 py-3 border-transparent">
            <TiArrowForward size={35} color="gray" />
          </div>
          <div className=" w-[5rem] px-6  hover:border-l-2 border-l-2 hover:border-orange-200  hover:bg-slate-600 py-3 border-transparent">
            <GiAbstract012 size={35} color="gray" />
          </div>
          <div className=" w-[5rem] px-6  hover:border-l-2 border-l-2 hover:border-orange-200  hover:bg-slate-600 py-3 border-transparent">
            <FiSettings size={35} color="gray" />
          </div>
          <div className=" w-[5rem] px-6  hover:border-l-2 border-l-2 hover:border-orange-200  hover:bg-slate-600 py-3 border-transparent">
            <MdSettingsBrightness size={35} color="gray" />
          </div>
        </div>
      </div>
      <div onClick={menu} className="menu "><IoMdMenu size={35}/></div>
      {open ?  <div className="delay-700 transition-all duration-75 ease-in-out flex flex-col absolute bg-slate-900 w-[320px] h-[300vh] justify-between  pt-1 z-10 ">
      <div onClick={menu} className="menu text-white "><AiOutlineClose color="white" size={30}/></div>
      <div className="st-container w-[320px] border-t border-slate-700 mt-12">
          <div className=" w-[5rem] px-6   py-3 border-transparent">
            
          <form className=" mb-9 -mt-11">
              <input
                type="Search"
                className="rounded-md py-2 px-2 text-sm text-[12px] w-[300px] -ml-4 bg-slate-700"
                placeholder="Search"
              />
            </form>
            <div className="flex items-center">
              <div>
            <MdOutlineSpaceDashboard size={35} color="purple" /> </div><span className="ml-[20px] text-white text-[15px]">Dashboard</span></div>
          </div>
          <div className="w-[5rem] px-6   py-3 border-transparent">

          <div className="flex items-center">
              <div>
            <TiArrowForward size={35} color="purple" /> </div><span className="ml-[20px] text-white text-[15px]">Activity</span></div>
       
          </div>
          <div className=" w-[5rem] px-6   py-3 border-transparent">
          <div className="flex items-center">
              <div>
            <GiAbstract012 size={35} color="purple" /> </div><span className="ml-[20px] text-white text-[15px]">Trending</span></div>
       
        
          
          </div>
          <div className="w-[5rem] px-6   py-3 border-transparent">
          <div className="flex items-center">
              <div>
            <FiSettings size={35} color="purple" /> </div><span className="ml-[20px] text-white text-[15px]">Settings</span></div>
            
          </div>
          <div className="w-[5rem] px-6   py-3 border-transparent">
          <div className="flex items-center">
              <div>
            <MdSettingsBrightness size={35} color="purple" /> </div><span className="ml-[20px] text-white text-[15px]">swpx</span></div>
          
          </div>
          </div>
        </div> : ""}





      <div>
        <div className=" flex flex-col items-top sm:flex-row justify-between text-center py-3 w-[100%] bord">
          <div className=" w-[100%] flex">
            <form className="lg:w-[80%] sm:w-[59%] md:ml-[-10px] nosubmit ">
              <input
                type="Search"
                className=" w-[90%] inp  rounded-md py-2 px-2 text-sm text-[12px] nosubmit bg-slate-700"
                placeholder="Search"
              />
            </form>
            <div className=" count   bg-slate-700 py-2 h-[53px] rounded-md w-[20%] mt-[-3px] ml-[20px] md:ml-[-15px]  flex items-center justify-between px-2 pr-[70px]">
              <div className="flex items-center">
                <div className="">
                  {" "}
                  <FaSquarespace className="rounded bg-gradient-to-r from-blue-300  to-orange-500" />
                </div>{" "}
                <div className="text-[10px] px-2">24.5k</div>
              </div>
            </div>
          <div className="sm:w-[13rem] md:w-[20rem] sm:ml-3 xl:ml-7">
            <div className="flex gap-2 py-2 sm:pr-[10px] lg:pr-[50px] items-center">
              <Link href={"/"}>
                <a>
                  <MdTrackChanges
                    color="gray"
                    size={30}
                    className=" bg-slate-700 rounded-full"
                  />
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <MdTrackChanges
                    color="gray"
                    size={30}
                    className=" bg-slate-700 rounded-full"
                  />
                </a>
              </Link>

              <div className="flex items-center">
                <FaSquarespace
                  color="white"
                  className=" bg-gradient-to-r from-blue-400  to-blue-500"
                />
                <p className="px-2 text-white text-[10px] tex"> Text here</p>{" "}
              </div>
            </div>
          </div>
          </div>
        </div>
        <div >
        <Section1></Section1></div>
        <div>
        <Section2></Section2>
        </div>
        {/* <div className="count">
        <Section1></Section1></div> */}
      </div>
    </header>
  );
}
