"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { FaUserFriends } from "react-icons/fa";
import React from "react";

const lineData = [
  { name: "Mon", value: 2.8 },
  { name: "Tue", value: 2.1 },
  { name: "Wed", value: 2.4 },
  { name: "Thu", value: 2.2 },
  { name: "Fri", value: 2.5 },
  { name: "Sat", value: 2.3 },
  { name: "Sun", value: 2.3 },
];

const pendingForms = [
  { name: "Tax", value: 21 },
  { name: "Hea", value: 81 },
  { name: "Tota", value: 34 },
];

type StatCardProps = {
  title: string;
  value: React.ReactNode;
  trend?: number;
  trendType?: "up" | "down" | "neutral";
  children?: React.ReactNode;
};

function StatCard({ title, value, trend, trendType = "neutral", children = null }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between min-w-[220px] min-h-[140px]">
      <div className="text-lg font-semibold mb-2">{title}</div>
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold">{value}</span>
        {children}
      </div>
      {trend !== undefined && (
        <div className="flex items-center mt-2 gap-2">
          <span
            className={`px-2 py-1 rounded text-xs font-bold ${
              trendType === "up"
                ? "bg-green-100 text-green-700"
                : trendType === "down"
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {trend > 0 ? "+" : ""}
            {trend}%
          </span>
          <span className="text-xs text-gray-500">7-day trend</span>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-primary min-h-full px-5 py-9">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {/* Residents Onboarded */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col min-h-[200px]">
            <div className="text-xl font-semibold mb-2">Residents Onboarded</div>
            <div className="flex items-center gap-4 flex-1">
              <div className="w-24 h-24 flex items-center justify-center">
                <CircularProgressbar
                  value={223}
                  maxValue={250}
                  text={" "}
                  styles={buildStyles({
                    pathColor: "#a78bfa",
                    trailColor: "#e5e7eb",
                    textColor: "#7c3aed",
                  })}
                  strokeWidth={10}
                />
                <div className="absolute flex items-center justify-center w-20 h-20">
                  <FaUserFriends size={32} color="#7c3aed" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold">223 / 250</div>
                <div className="text-gray-500">Capacity</div>
                <div className="flex items-center mt-2 gap-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                    +12%
                  </span>
                  <span className="text-xs text-gray-500">7-day trend</span>
                </div>
              </div>
            </div>
          </div>
          {/* Average Task Completion */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col min-h-[200px]">
            <div className="text-xl font-semibold mb-2">Average Task Completion</div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <ResponsiveContainer width="100%" height={70}>
                <LineChart data={lineData} margin={{ left: -20, right: 0, top: 10, bottom: 0 }}>
                  <Line type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={3} dot={false} />
                  <XAxis dataKey="name" hide />
                  <YAxis hide domain={[2, 3]} />
                  <Tooltip formatter={(v) => `${v} days`} />
                </LineChart>
              </ResponsiveContainer>
              <div className="text-2xl font-bold mt-2">2.3 days</div>
            </div>
          </div>
          {/* Pending Forms */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col min-h-[200px]">
            <div className="text-xl font-semibold mb-2">Pending Forms</div>
            <div className="flex-1 flex flex-col justify-center">
              {pendingForms.map((form) => (
                <div key={form.name} className="flex items-center mb-2 last:mb-0">
                  <span className="w-12 text-sm text-gray-700">{form.name}</span>
                  <div className="flex-1 mx-2 bg-gray-200 rounded h-2 overflow-hidden">
                    <div
                      className="bg-cyan-700 h-2 rounded"
                      style={{ width: `${(form.value / 100) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-6 text-right text-sm text-gray-700">{form.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Lower row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
          <StatCard title="Open Requests" value={23} trend={-8} trendType="down" />
          <StatCard title="Requests Resolved" value={156} trend={-4} trendType="down" />
          <StatCard title="Active Staff" value={47} trend={12} trendType="up" />
          <StatCard title="Flagged Cases" value={12} />
        </div>
        {/* Dropdowns */}
        <div className="space-y-3">
          <details className="bg-white rounded-xl shadow">
            <summary className="cursor-pointer px-6 py-4 text-lg font-medium">Maya Insights</summary>
            <div className="px-6 pb-4 text-gray-500">(Add insights content here)</div>
          </details>
          <details className="bg-white rounded-xl shadow">
            <summary className="cursor-pointer px-6 py-4 text-lg font-medium">Recent Activity</summary>
            <div className="px-6 pb-4 text-gray-500">(Add recent activity content here)</div>
          </details>
        </div>
      </div>
    </div>
  );
}
