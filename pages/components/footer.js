import { ImFacebook,ImYoutube,ImTwitter } from "react-icons/im";
import Link from "next/link";
import Newslatter from "./_child/newslatter";
export default function footer() {
  return (
  <footer className="bg-slate-800">
    <Newslatter></Newslatter>
<div className=" mx-auto flex justify-center py-12">
  <div className="py-5">
    <div className="flex gap-6 justify-center">
    <Link href={"/"}>
    <a><ImFacebook color="gray"/></a>
    </Link>
    <Link href={"/"}>
    <a><ImTwitter color="gray"/></a>
    </Link>
    <Link href={"/"}>
    <a><ImYoutube color="gray"/></a>
    </Link>
   
    </div>
    <p className="py-5 text-gray-400">copy right c this is official site of alpha squad</p>
    <p className="text-center text-gray-400">Term and condition</p>
  </div>

</div>
  </footer>
  )
}
  