"use client"
//if we want to click on a button and on clicking we want to navigate it to some other page 
import { useRouter } from "next/navigation"
export default function About (){
  const router = useRouter();
  return (
    <>
    <div>About us</div>
    <button onClick={()=>router.push("/")} className="bg-blue-400 p-2 text-white rounded-md">Go to home</button>
    </>
  )
}

