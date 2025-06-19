import { SideLinksInter } from "../types/types"
import { House,Users,ChartNoAxesColumnIncreasing,FileText,Settings } from "lucide-react"
export const SideLinks:SideLinksInter[] = [
    {
        icon: House, // Replace with actual icon or import
        title: "Dashboard",
        link: "/",
    },
    {
        icon: Users, // Replace with actual icon or import
        title: "Residents",
        link: "/residents",
    },
    {
        icon: ChartNoAxesColumnIncreasing, // Replace with actual icon or import
        title: "Staff Analytics",
        link: "/staff-analytics",
    },
    {
        icon: FileText, // Replace with actual icon or import
        title: "Reports",
        link: "/reports",
    },
    {
        icon: Settings, // Replace with actual icon or import
        title: "Setting",
        link: "/settings",
    }
]