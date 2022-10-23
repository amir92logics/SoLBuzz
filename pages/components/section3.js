import Image from "next/image"
import Link from "next/link"
import Auther from "./_child/auther"
import {Swiper,SwiperSlide} from "swiper/react"

export default function Section3() {
  return (
    <section className=" mx-auto md:px-20 py-16">
    <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
    {/* swiper */}
    <Swiper
    slidesPerView={2}
    >
        <SwiperSlide>{ Post()}</SwiperSlide>
        <SwiperSlide>{ Post()}</SwiperSlide>
        <SwiperSlide>{ Post()}</SwiperSlide>
        <SwiperSlide>{ Post()}</SwiperSlide>
        <SwiperSlide>{ Post()}</SwiperSlide>
        <SwiperSlide>{ Post()}</SwiperSlide>
        <SwiperSlide>{ Post()}</SwiperSlide>
    </Swiper>
    </section>
      )
    }
    function Post(){
        return(
          <div className="grid">
          <div className="image" >
              <Link href={"/"} >
              <Image src={"/images/sec6.png"} width={600} height={400} alt={""} />
              </Link>
          </div>
          <div className="info-section flex justify-center flex-col">
    <div className="catagory flex">
    <Link  href={"/"}>
     <p className="text-blue-300"> Alpha Portfolio </p>
      </Link>
    <Link  href={"/"}>
     <p className="text-black">_June30,2012</p>
      </Link>
    
    </div>
    <div className="tittle" >
    
     <h3 className=" text-3xl md:text-4xl  text-gray-800">Your most unhappy costumers are your greatest source of learning</h3>
     <p className="text-gray-500  py-3">“If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes.”
     </p>
    <Auther></Auther>
    </div>
    </div>
      </div>
        )
    }