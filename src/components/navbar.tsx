import { SearchBar } from "./main-searchbar"
import {User,Bell,ChevronDown} from "lucide-react"


export const Navbar = () => {
    return (
        <div className="bg-secondary h-[10vh] flex items-center justify-between border-b-[1px] border-neutral-300 px-4">
            <div>
                <SearchBar/>
            </div>
            <div className="flex gap-2">
                <Bell size={29}/>
                <User size={29}/>
                <ChevronDown size={29}/>
            </div>
        </div>
    )
}