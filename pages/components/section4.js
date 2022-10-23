import Image from "next/image"
import Link from "next/link"
import Auther from "./_child/auther"
import {Swiper,SwiperSlide} from "swiper/react"
export default function Section3() {
  return (
    <section className=" mx-auto md:px-20 py-16z">
         <h1 className="font-bold text-4xl py-12 text-center">Our Team</h1>
        <div className="grid  lg:grid-cols-2 py-12">
            <div className="item">
            {/* <h1 className="font-bold text-4xl py-12">Our Team</h1> */}
            <div className="flex flex-col gap-6">
{/* posts */} {Post()}
{/* posts */} {Post()}
{/* posts */} {Post()}
            </div>
            </div>
            <div className="item">
            {/* <h1 className="font-bold text-4xl py-12">Travel</h1> */}
            <div className="flex flex-col gap-6">
{/* posts */} {Post()}
{/* posts */} {Post()}
{/* posts */} {Post()}
            </div>
            </div>
            
        </div>
    </section>
        )
    }

    function Post(){
        return(
<div className="flex gap-5 ">
<div className="image flex flex-col justify-start">
<Link href={"/"} >
              <Image src={"/images/background-section-1.jpg"} className="rounded" width={300} height={250} alt={""} />
              </Link>
</div>
<div className="info flex justify-center flex-col">
<div className="catagory flex">
    <Link  href={"/"}>
     <p className="text-blue-300">Muhammad Ahmed </p>
      </Link>
    <Link  href={"/"}>
     <p className="text-black">(Designer)</p>
      </Link>
    
    </div>
    <div className="tittle" >
    
     <h3 className=" text-xl   text-gray-800">Your most unhappy costumers are your greatest source of learning</h3>
     
</div>
    <Auther></Auther>
</div>
</div>
        )}