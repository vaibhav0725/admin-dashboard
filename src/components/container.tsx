"use client";
import { SideBar } from "./sidebar"
import { Navbar } from "./navbar"
import { AuthCard } from "./authcard"
import { useState } from "react"

// Hardcoded profile for authentication
const HARDCODED_PROFILE = {
    email: "mayacode@admin.com",
    password: "admin123"
};

export const Container = ({children}:{children:React.ReactNode}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [authError, setAuthError] = useState("");
    const [sidebarHovered, setSidebarHovered] = useState(false);

    const handleAuthSubmit = (email: string, password: string) => {
        // Clear any previous errors
        setAuthError("");
        
        // Check against hardcoded profile
        if (email === HARDCODED_PROFILE.email && password === HARDCODED_PROFILE.password) {
            setIsAuth(true);
            console.log("Authentication successful!");
        } else {
            setAuthError("Invalid email or password. Please try again.");
            console.log("Authentication failed!");
        }
    };

    return (
        isAuth 
            ? 
        <div className="flex w-full h-screen">
            <div
                className={`border-neutral-300 ${sidebarHovered ? 'w-[15%]' : 'w-[7%]'} bg-secondary flex justify-center flex-col border-r-[1px] h-screen transition-all ease-in-out duration-300`}
                onMouseEnter={() => setSidebarHovered(true)}
                onMouseLeave={() => setSidebarHovered(false)}
            >
                <SideBar expanded={sidebarHovered}/>
            </div>
            <div className={`flex flex-col h-screen transition-all duration-300 ${sidebarHovered ? 'w-[85%]' : 'w-full'}`}>
                <div className="">
                    <Navbar/>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
        : 
        <AuthCard onSubmit={handleAuthSubmit} error={authError} />
    )
}