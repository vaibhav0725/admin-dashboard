"use client";
import { profiles } from "@/utils/constants/profiles";
import { User } from "lucide-react";
import { useState } from "react";
import { Profile } from "@/utils/types/types";

export default function Residents() {
    const [profilesList, setProfilesList] = useState(profiles);
    const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [newResident, setNewResident] = useState({
        fullname: "",
        gender: "",
        status: "Active",
        language: "",
        location: "",
        progress: 0,
        assignedStaff: "",
        lastupdated: "Just now"
    });
    
    function handleRowClick(profile: Profile) {
        setSelectedProfile(profile);
        setSidebarOpen(true);
    }
    function handleCloseSidebar() {
        setSidebarOpen(false);
        setSelectedProfile(null);
    }
    function handleAddResidentClick() {
        setAddModalOpen(true);
    }
    function handleAddModalClose() {
        setAddModalOpen(false);
        setNewResident({
            fullname: "",
            gender: "",
            status: "Active",
            language: "",
            location: "",
            progress: 0,
            assignedStaff: "",
            lastupdated: "Just now"
        });
    }
    function handleNewResidentChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewResident({ ...newResident, [e.target.name]: e.target.value });
    }
    function handleAddResidentSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setProfilesList([...profilesList, newResident]);
        handleAddModalClose();
    }

    return (
        <div className="bg-primary min-h-full px-5 py-5 flex flex-col gap-5">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">Residents</h1>
                <button className="bg-secondary rounded-xl px-7 py-2 border text-lg font-semibold" onClick={handleAddResidentClick}>Add Residents</button>
            </div>
            <div className="flex flex-wrap gap-4 items-end bg-secondary rounded-2xl p-4 drop-shadow-md">
                <div className="flex flex-col flex-1 min-w-[220px]">
                    <label className="font-semibold mb-1">Search Resident</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                        </span>
                        <input type="text" placeholder="Name, ID, Location, etc..." className="pl-10 pr-4 py-2 rounded-xl border border-purple-200 focus:border-purple-400 outline-none w-full text-base text-gray-700 bg-white" />
                    </div>
                </div>
                <div className="flex flex-col min-w-[160px]">
                    <label className="font-semibold mb-1">Status</label>
                    <select className="rounded-xl border border-purple-200 focus:border-purple-400 outline-none px-4 py-2 bg-white text-base text-gray-700">
                        <option>All Status</option>
                    </select>
                </div>
                <div className="flex flex-col min-w-[160px]">
                    <label className="font-semibold mb-1">Language</label>
                    <select className="rounded-xl border border-purple-200 focus:border-purple-400 outline-none px-4 py-2 bg-white text-base text-gray-700">
                        <option>All Languages</option>
                    </select>
                </div>
                <div className="flex flex-col min-w-[160px]">
                    <label className="font-semibold mb-1">Location</label>
                    <select className="rounded-xl border border-purple-200 focus:border-purple-400 outline-none px-4 py-2 bg-white text-base text-gray-700">
                        <option>All Areas</option>
                    </select>
                </div>
                <button className="flex items-center gap-2 border border-purple-200 hover:border-purple-400 rounded-xl px-6 py-2 text-base text-gray-700 bg-white transition-colors">
                    <span className="text-xl">&#10005;</span>
                    Clear All
                </button>
            </div>
            <div className="bg-secondary rounded-2xl drop-shadow-md p-5 overflow-y-scroll overflow-x-scroll h-[500px]">
                <h2 className="text-2xl font-semibold mb-6">Residents ({profilesList.length})</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                        <thead>
                            <tr className="border-b border-neutral-300">
                                <th className="py-3 px-4">Name</th>
                                <th className="py-3 px-4">Gender</th>
                                <th className="py-3 px-4">Status</th>
                                <th className="py-3 px-4">Language</th>
                                <th className="py-3 px-4">Location</th>
                                <th className="py-3 px-4">Progress</th>
                                <th className="py-3 px-4">Assigned Staff</th>
                                <th className="py-3 px-4">Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profilesList.map((profile, idx) => (
                                <tr key={idx} className="border-b border-neutral-300 last:border-b-0 cursor-pointer hover:bg-neutral-50" onClick={() => handleRowClick(profile)}>
                                    <td className="py-4 px-4 flex items-center gap-2">
                                        <span className="border rounded-full p-1 flex items-center justify-center w-7 h-7 mr-2">
                                            <User size={20} />
                                        </span>
                                        <span>{profile.fullname}</span>
                                    </td>
                                    <td className="py-4 px-4">{profile.gender || "-"}</td>
                                    <td className="py-4 px-4 font-semibold" style={{ color: getStatusColor(profile.status) }}>{profile.status}</td>
                                    <td className="py-4 px-4">{profile.language}</td>
                                    <td className="py-4 px-4">{profile.location || "-"}</td>
                                    <td className="py-4 px-4 font-semibold" style={{ color: getProgressColor(profile.progress) }}>{getProgressText(profile.progress, profile.status)}</td>
                                    <td className="py-4 px-4">{profile.assignedStaff || "-"}</td>
                                    <td className="py-4 px-4">2 H...</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {sidebarOpen && selectedProfile && (
                <ProfileSidebar profile={selectedProfile} onClose={handleCloseSidebar} />
            )}
            {addModalOpen && (
                <div className="fixed inset-0 bg-primary bg-opacity-30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 w-[400px] shadow-xl relative">
                        <button onClick={handleAddModalClose} className="absolute top-3 right-4 text-2xl font-bold">&times;</button>
                        <h2 className="text-xl font-bold mb-4">Add Resident</h2>
                        <form onSubmit={handleAddResidentSubmit} className="flex flex-col gap-3">
                            <input name="fullname" value={newResident.fullname} onChange={handleNewResidentChange} placeholder="Full Name" className="border rounded-lg px-3 py-2" required />
                            <input name="gender" value={newResident.gender} onChange={handleNewResidentChange} placeholder="Gender" className="border rounded-lg px-3 py-2" />
                            <input name="status" value={newResident.status} onChange={handleNewResidentChange} placeholder="Status" className="border rounded-lg px-3 py-2" />
                            <input name="language" value={newResident.language} onChange={handleNewResidentChange} placeholder="Language" className="border rounded-lg px-3 py-2" />
                            <input name="location" value={newResident.location} onChange={handleNewResidentChange} placeholder="Location" className="border rounded-lg px-3 py-2" />
                            <input name="assignedStaff" value={newResident.assignedStaff} onChange={handleNewResidentChange} placeholder="Assigned Staff" className="border rounded-lg px-3 py-2" />
                            <button type="submit" className="bg-secondary rounded-xl px-5 py-2 border text-lg font-semibold mt-2">Add</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

function getStatusColor(status: string) {
    if (status.toLowerCase().includes("active")) return "#22c55e"; // green
    if (status.toLowerCase().includes("review")) return "#eab308"; // yellow
    return "#000";
}

function getProgressColor(progress: number) {
    if (progress === 0) return "#ef4444"; // red
    if (progress === 100) return "#22c55e"; // green
    return "#000";
}

function getProgressText(progress: number, status: string) {
    if (progress === 0) return "Not Started";
    if (progress === 100) return "Completed";
    if (status.toLowerCase().includes("review")) return "Needs Review";
    return "In Progress";
}

// ProfileSidebar component (inline for now)
function ProfileSidebar({ profile, onClose }: { profile: Profile, onClose: () => void }) {
    return (
        <div className="fixed top-0 right-0 w-[420px] h-full bg-white shadow-2xl z-50 border-l border-neutral-300 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-neutral-300">
                <h2 className="text-2xl font-bold">Full Profile</h2>
                <button onClick={onClose} className="text-2xl font-bold">&times;</button>
            </div>
            <div className="flex flex-col items-center p-8 gap-2">
                <span className="border rounded-full p-2 flex items-center justify-center w-20 h-20 mb-2 bg-gray-100">
                    <User size={60} />
                </span>
                <div className="text-xl font-semibold">{profile.fullname}</div>
                <div className="text-base text-gray-600">{profile.gender}</div>
                {profile.language && (
                    <span className="text-2xl mt-1">{profile.language === 'Spanish' ? '🇪🇸' : profile.language === 'Italian' ? '🇮🇹' : ''}</span>
                )}
            </div>
            <div className="px-8 pb-8 flex-1 overflow-y-auto">
                <div className="mb-6">
                    <div className="font-semibold text-gray-700 mb-1">Onboarding Process - <span className={profile.progress === 0 ? 'text-red-500' : profile.progress === 100 ? 'text-green-500' : 'text-yellow-500'}>{getProgressText(profile.progress, profile.status)}</span></div>
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-2 mb-2">
                        <div className={`h-2 rounded-full ${profile.progress === 0 ? 'bg-red-500' : profile.progress === 100 ? 'bg-green-500' : 'bg-yellow-500'}`} style={{ width: `${profile.progress}%` }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Application Submission</span>
                        <span>Housing Interview</span>
                        <span>Tax ID Application</span>
                        <span>Health Check</span>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="font-semibold text-gray-700 mb-2">Documents Submission / Verification</div>
                    <div className="flex items-center gap-2 text-green-600 font-semibold text-lg">
                        <span className="text-2xl">&#10003;</span> Completed
                    </div>
                </div>
            </div>
        </div>
    );
}