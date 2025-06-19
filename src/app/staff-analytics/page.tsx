import React from "react";
import { Card } from "@/components/card";

// Mock data for staff analytics
const staffStats = [
  { title: "Total Staff", value: 25 },
  { title: "Active Staff", value: 17 },
  { title: "Shifts Per Day", value: 3 },
  { title: "Work Hours", value: 8 },
];

const casesPerStaff = [
  { name: "Mike", cases: 7 },
  { name: "Will", cases: 3 },
  { name: "Chloe", cases: 3 },
  { name: "Sharry", cases: 5 },
  { name: "James", cases: 1 },
];

const staffActivity = [
  { name: "Jane Doe", activity: "Accomodation Arrangement", tasks: 12, hours: 36 },
  { name: "Mike", activity: "Food Arrangement", tasks: 6, hours: 21 },
];

export default function StaffAnalytics() {
  return (
    <div className="bg-primary min-h-full px-5 py-5 flex flex-col gap-5">
      <h1 className="text-3xl font-bold mb-2">Staff Analytics</h1>
      {/* Top Stat Cards */}
      <div className="grid grid-cols-3 gap-5">
        {staffStats.map((stat) => (
          <Card key={stat.title} title={stat.title}>
            <div className="text-5xl font-bold text-center mt-4 mb-2">{stat.value}</div>
          </Card>
        ))}
      </div>
      {/* Middle Section: Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
        {/* Cases Per Staff (Bar Chart) */}
        <Card title="Cases Per Staff">
          <div className="flex items-end h-40 gap-3 mt-4">
            {casesPerStaff.map((s) => (
              <div key={s.name} className="flex flex-col items-center justify-end flex-1">
                <div
                  className="bg-purple-400 rounded-t w-8"
                  style={{ height: `${s.cases * 20}px`, opacity: 0.7 }}
                ></div>
                <span className="mt-2 text-sm font-semibold">{s.name}</span>
                <span className="text-xs">{s.cases}</span>
              </div>
            ))}
          </div>
        </Card>
        {/* Intervention Heatmap */}
        <Card title="Intervention Heatmap">
          <div className="grid grid-cols-9 grid-rows-5 gap-1 mt-4">
            {[...Array(45)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded bg-purple-300"
                style={{ opacity: 0.4 + 0.6 * Math.random() }}
              ></div>
            ))}
          </div>
        </Card>
        {/* Activity over time (Line Chart Placeholder) */}
        <Card title="Activity over time">
          <div className="h-40 flex items-end justify-center mt-4">
            {/* Simple SVG line chart placeholder */}
            <svg width="100%" height="100%" viewBox="0 0 200 80">
              <polyline
                fill="none"
                stroke="#a259f7"
                strokeWidth="3"
                points="0,70 30,60 60,65 90,50 120,40 150,30 180,10 200,20"
              />
              <polyline
                fill="none"
                stroke="#f7b259"
                strokeWidth="3"
                points="0,75 30,70 60,60 90,55 120,50 150,45 180,30 200,10"
              />
            </svg>
          </div>
        </Card>
      </div>
      {/* Staff Activity Table */}
      <div className="bg-secondary rounded-2xl drop-shadow-md p-5 mt-2 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-6">Staff Activity</h2>
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-neutral-300">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Current Activity</th>
              <th className="py-3 px-4">Tasks Completed</th>
              <th className="py-3 px-4">Hours Worked</th>
            </tr>
          </thead>
          <tbody>
            {staffActivity.map((s, idx) => (
              <tr key={idx} className="border-b border-neutral-300 last:border-b-0">
                <td className="py-4 px-4 font-semibold">{s.name}</td>
                <td className="py-4 px-4">{s.activity}</td>
                <td className="py-4 px-4">{s.tasks}</td>
                <td className="py-4 px-4">{s.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}