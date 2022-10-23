import Image from "next/image"
import Link from "next/link"
import Auther from "./_child/auther"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { Swiper,SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper'
export default function Section1() {
    SwiperCore.use([Autoplay])
    const bg = {
        // background: "url('/images/back3.png') no-repeat",  
        backgroundPosition: "top",  
    }
  return (
    <section className="py-1 flex w-[100%] md:flex-col xl:flex-row sm:flex-col  containe" >
    <div className=" mx-auto md:pl-5 conte md:w-[70%] xl:w-[77%]">


    <div
    
   
     
    >
      <SwiperSlide> {Slide()}</SwiperSlide>
     
    </div>




   
    </div>
    <div className="lg:w-[97%]   xl:w-[27%]  mx-3 bg-slate-700 rounded-lg px-3 py-4 dis1" >
    <div className=" text-white font-bold text-[16px]">
    Top Collection
    </div>
  <Auther></Auther>
    <div>
    </div>
    
    </div>

    </section>
  )
}
function Slide (){

    return(
        <div className=" grid overv  md:grid-cols-2 bg-gradient-to-r from-orange-300 via-gray-500 to-blue-500 h-[270px] rounded-lg ">
            <div className="imageu py-9 px-8 text-white font-bold text-[32px] " >
           Welcome to SoLBuzz
            </div>
            <div className="info-section flex justify-center flex-col">
<div className="catagory flex">
   

</div>
<div className="tittle" >

     
    
</div>
            </div>
        </div>
    )
}
