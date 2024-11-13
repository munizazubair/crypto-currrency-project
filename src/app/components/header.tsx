"use client";
import { useState } from "react"
import Link from "next/link";
export default function Header() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const handleVisiblity = ()=> {
        setIsVisible(isVisible => !isVisible);

    }

    return(
        <div>
            <div className="h-[10vh] w-full bg-black text-white sm:text-xl flex justify-around items-center gap-8 md:gap-96 sm:gap-12 relative z-30">
                <div className="font-semibold text-lg sm:text-xl md:text-2xl sm:font-bold">CryptoPulse</div>
<div className="flex sm:gap-5 md:gap-4 gap-3 items-center">
                <div className="flex gap-2 sm:gap-3">
                    <button className="bg-gray-700  md:w-24 hover:bg-gray-600 h-8 w-16 sm:h-10 md:h-12 sm:w-20 rounded-sm">log in</button>
                    <button className="bg-green-600 hover:bg-green-500 h-8 w-20 sm:h-10 md:h-12 md:w-28 sm:w-24 rounded-sm">sign up</button>
                    </div>
                    <button onClick={handleVisiblity}>
                        {!isVisible ? 
                         <div className="flex flex-col gap-2 sm:gap-3">
                         <div className="sm:h-[0.4vh] h-[0.3vh] w-6 sm:rounded-lg sm:w-9 bg-white"></div>
                         <div className="sm:h-[0.4vh] h-[0.3vh] w-6 sm:rounded-lg sm:w-9 bg-white"></div>
                     </div> : 
                     <div className="relative ">
                     <div className="bg-gray-950 h-[100vh] w-[100vw] fixed -right-[4.3vw] sm:-right-[2vw] top-0   ">
                        <div className="flex justify-around pt-5 gap-[48vw]">
                     <div className="font-bold">CryptoPulse</div>
                     <div className=" text-white">&#10006;</div>
                     </div>
<div className="flex flex-col justify-center items-center pt-32 gap-10 text-xl sm:text-2xl md:text-3xl">
<Link className="hover:font-bold" href={"/"}>Home</Link>
<Link className="hover:font-bold" href={"./rates"}>Rates</Link>
<Link className="hover:font-bold" href={"/"}>About Us</Link>
<Link className="hover:font-bold" href={"/"}>Blog</Link>
</div>
<div className="flex gap-3 absolute left-20 bottom-32 sm:bottom-16">
                    <div className="bg-gray-700 h-12 sm:h-12 w-20 sm:w-24 rounded-sm flex items-center justify-center hover:bg-gray-600"><Link href={"/"}>log in</Link></div>
                    <div className="bg-green-600 h-12 sm:h-12 w-24 sm:w-28 rounded-sm flex items-center justify-center hover:bg-green-500"><Link href={"/"}>sign up</Link></div>
                    </div>
</div>

                     </div>
                      }


                    </button>
                   
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}