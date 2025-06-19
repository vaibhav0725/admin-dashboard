"use client";
import { ChevronDown,ChevronUp } from "lucide-react"
import { useState } from "react"

export const DropDownCards = ({children,title}:{children:React.ReactNode,title:string}) => {
    const [showDown,setShowDown] = useState(false);
    return (
        <div onClick={()=>setShowDown(!showDown)} className="bg-secondary rounded-2xl drop-shadow-md">
            <h2 className="text-2xl p-5 font-semibold flex items-center justify-between">
                {title}
                <button>
                    {showDown ? <ChevronUp size={40}/> : <ChevronDown size={40}/>}
                </button>
            </h2>
            { 
                showDown 
                    && 
                <div className="border-t border-neutral-300 p-5 ">
                    {children}
                </div>
            }
        </div>
    )
}