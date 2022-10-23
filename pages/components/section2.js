import Image from "next/image"
import Link from "next/link"
import Auther from "./_child/auther"
export default function Section2() {
  return (
    <div className=" sm:flex-col lg:flex-col xl:flex-row pl-5 pt-2 bg-slate-800 w-[100%] flex containe">
      <div className="w-[86%]">
    <h1 className="font-bold text-2xl xl:-mt-3 sm:mt-4  text-white text-start">Explore</h1>
   
    <div className="grid md:grid-cols-3 pt-3 lg:grid-col-2 gap-3 ">
    
      <div> { Post()}</div>
      <div className="count"> { Post()}</div>
      <div className="count"> { Post()}</div>
      <div className="count"> { Post()}</div>
      <div className="count"> { Post()}</div>
      <div className="count"> { Post()}</div>
      
      
    </div>

    </div>

    <div className=" mt-1     bg-slate-700 rounded-lg px-3 py-4  car" >
    <div className=" text-white font-bold text-[16px]">
    Top Collection
    </div>
  <Auther></Auther>
    <div>
    </div>
    
    </div>
    <div className=" w-[30%] mx-3 bg-slate-700 rounded-lg px-3 py-4 max-h-[90vh] recent" >
    <div className=" text-white font-bold text-[16px]">
    Recent Activity
    </div>

    <div>
    </div>
    
    </div>
    </div>
  )
}
function Post(){
    return(
      <div className="item bg-slate-700 rounded-md mb-[60px]">
      <div className="image p-2" >
          <Link href={"/"} >
          <Image src={"/images/background-section-1.jpg"} width={400} height={200} alt={""} />
          </Link>
      </div>
      <div className="info-section flex justify-center flex-col">
<div className="catagory flex p-2">
<Link  href={"/"}>
 <p className="text-white text-[13px]"> Dummy text </p>
  </Link>

</div>
<div className=" p-2" >

 <h3 className=" text-xl  text-white text-[15px]">26 Stories</h3>

</div>
<div className="border-t border-slate-600">
<div className="flex max-w-[200px] px-1 pt-2">
  <img className='imh' width={"20%"}  src="/images/back2.png"  alt="" />
  <img className='imh1' width={"17%"}src="/images/back3.png"  alt="yuyiuy" />
  <img className='imh2' width={"18%"}  src="/images/back4.png"  alt="" />
  <img className='imh3' width={"22%"}  src="/images/back5.png"  alt="" />
  
</div>
</div>
</div>
  </div>
    )
}