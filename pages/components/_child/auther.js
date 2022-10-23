import Image from "next/image"
import Link from "next/link"

export default function Auther() {
  return (
    <div className=" flex flex-col pt-3 w-[100%] ">
  
      <div className="flex flex-row py-t text-white text-[12px] items-center justify-between w-[100%]">
        <div className="flex">

        <div className="pt-1">1.</div>
        <div className="flex">
        <img  className="mx-1" width={"20%"}  src="/images/back2.png"  alt="" />
        <div className="flex"><div>HB<div className="text-slate-400">Song</div></div></div>
       </div></div>
        <button className="bg-gradient-to-r from-blue-300 -mt-1  to-purple-500 px-3 text-[10px] py-1 rounded" >Click</button>
      </div>
      <div className="flex flex-row py-2 text-white text-[12px] items-center justify-between w-[100%]">
        <div className="flex">

        <div className="pt-3">2.</div>
        <div className="flex mt-2">
        <img  className="mx-1" width={"20%"}  src="/images/back3.png"  alt="" />
        <div className="flex"><div>SHAPE OF YOU<div className="text-slate-400">Song</div></div></div>
       </div></div>
        <button className="bg-gradient-to-r from-blue-300   to-purple-500 px-3 text-[10px] py-1 rounded" >Click</button>
      </div>
      <div className="flex flex-row py-2 text-white text-[12px] items-center justify-between w-[100%]">
        <div className="flex">

        <div className="pt-1">3.</div>
        <div className="flex">
        <img  className="mx-1" width={"20%"}  src="/images/back4.png"  alt="" />
        <div className="flex"><div>IN THE SUMMERTIME<div className="text-slate-400">Song</div></div></div>
       </div></div>
        <button className="bg-gradient-to-r from-blue-300 -mt-3  to-purple-500 px-3 text-[10px] py-1 rounded" >Click</button>
      </div>
      <div className="flex flex-row pt-2 text-white text-[12px] items-center justify-between w-[100%]">
        <div className="flex">

        <div className="pt-1">4.</div>
        <div className="flex">
        <img  className="mx-1" width={"20%"}  src="/images/back5.png"  alt="" />
        <div className="flex"><div>CANDLE IN THE WIND<div className="text-slate-400">Song</div></div></div>
       </div></div>
        <button className="bg-gradient-to-r from-blue-300 -mt-3  to-purple-500 px-3 text-[10px] py-1 rounded" >Click</button>
      </div>
      {/* <div className="flex flex-row py-2 text-white text-[12px] items-center justify-between w-[100%]">
        <div className="flex">
        <div>2.</div>
        <div className="px-3">
          <div className="flex"> <span className="flex ">  <img width={"20%"}  src="/images/back3.png"  alt="" />SHAPE OF YOU
  </span>
          </div></div></div>
        <button className="bg-gradient-to-r from-blue-300 -mt-3  to-purple-500 px-3 text-[10px] py-1 rounded" >Click</button>
      </div>
      <div className="flex flex-row py-2 text-white text-[12px] items-center justify-between w-[100%]">
        <div className="flex">
        <div>3.</div>
        <div className="px-3">
          <div className="flex"> <span className="flex">  <img width={"20%"}  src="/images/back4.png"  alt="" />IN THE SUMMERTIME
  </span>
          </div></div></div>
        <button className="bg-gradient-to-r from-blue-300 -mt-3  to-purple-500 px-3 text-[10px] py-1 rounded" >Click</button>
      </div>
      <div className="flex flex-row py-2 text-white text-[12px] items-center justify-between w-[100%]">
        <div className="flex">
        <div>4.</div>
        <div className="px-3">
          <div className="flex"> <span className="flex">  <img width={"20%"}  src="/images/back5.png"  alt="" />CANDLE IN THE WIND
  </span>
          </div></div></div>
        <button className="bg-gradient-to-r from-blue-300 -mt-3   to-purple-500 px-3 text-[10px] py-1 rounded" >Click</button>
      </div> */}
    

   
      </div>
  )
}
{/* <img width={"20%"}  src="/images/back2.png"  alt="" />
<img width={"17%"}className='ml-[-8px]' src="/images/back3.png"  alt="" />
<img width={"18%"} className='ml-[-8px]' src="/images/back4.png"  alt="" />
<img width={"22%"} className='ml-[-8px]' src="/images/back5.png"  alt="" /> */}