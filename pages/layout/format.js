import  Header  from '../components/header'
import Sidebar from '../components/_child/sidebar'
import Head from "next/head"
export default function Format({ children }) {
  return (
    <>
    <Head>
        <title>Dashboard</title>
    </Head>
    
    <Sidebar/>
    <main>{children}</main>

    </>
  )
}
