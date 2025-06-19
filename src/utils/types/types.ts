import { LucideIcon } from "lucide-react";


export interface Profile{
    fullname:string,
    progress:number,
    status:string,
    language:string,
    lastupdated:string,
    gender?: string,
    location?: string,
    assignedStaff?: string,
}

export interface SideLinksInter{
    icon:LucideIcon,
    title:string,
    link:string,
}

export interface CardInter{
    title:string,
    children:React.ReactNode,
    icon?:LucideIcon
}