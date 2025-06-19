"use client";

import { Save } from "lucide-react"
import { useState } from "react"

const tabs = [
  "Shelter Profile",
  "Notifications",
  "System",
  "Security",
  "Integrations",
  "Help",
]

export default function Settings() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="bg-primary min-h-screen p-5">
      <div className="bg-white rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6">
          <span className="text-3xl font-semibold">Settings</span>
          <button className="flex items-center gap-2 text-lg font-semibold border border-gray-300 px-5 py-2 rounded-xl">
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>
        <div className="flex gap-8 px-8 border-b border-neutral-300">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(idx)}
              className={`py-4 text-lg font-medium transition border-b-4 ${
                activeTab === idx
                  ? "border-b-2 font-bold"
                  : "border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="px-8 py-10">
          <div className="text-gray-500">
            Tab content goes here...
            </div>
        </div>
      </div>
    </div>
  )
}