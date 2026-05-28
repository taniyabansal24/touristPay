import {
  Bell,
  Clock3,
  ShieldCheck,
  Users,
  BadgeAlert,
  BadgeCheck,
} from "lucide-react";

import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const stats = [
    {
      title: "TOTAL USERS",
      value: "12,450",
      growth: "+12%",
      icon: <Users size={20} />,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "PENDING KYC",
      value: "142",
      growth: "-5%",
      icon: <BadgeAlert size={20} />,
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      title: "APPROVED USERS",
      value: "11,800",
      growth: "+8%",
      icon: <BadgeCheck size={20} />,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "REJECTED KYC",
      value: "508",
      growth: "+2%",
      icon: <ShieldCheck size={20} />,
      color: "text-red-600",
      bg: "bg-red-100",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F7FB]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <header className="h-[72px] bg-white border-b border-[#E4E7EC] px-5 flex items-center justify-between">
          <div className="w-[320px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-[42px] bg-[#F9FAFB] border border-[#D0D5DD] rounded-xl px-4 outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center">
              <Bell size={20} />
            </button>

            <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center">
              <Clock3 size={20} />
            </button>

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">
              BK
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-5">
          {/* TOP SECTION */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h1 className="text-[24px] font-bold text-[#101828]">
                Dashboard Overview
              </h1>

              <p className="text-[#667085] mt-1 text-sm">
                Platform metrics and recent activity.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="h-[40px] px-4 border border-[#D0D5DD] rounded-xl bg-white font-medium text-sm">
                Export
              </button>

              <button className="h-[40px] px-4 rounded-xl bg-[#155EEF] text-white font-medium text-sm">
                + New Report
              </button>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#EAECF0] rounded-2xl p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-[#667085]">
                      {item.title}
                    </p>

                    <h2 className="text-[32px] font-bold mt-3 text-[#101828]">
                      {item.value}
                    </h2>
                  </div>

                  <div className="text-[#667085]">
                    {item.icon}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${item.bg} ${item.color}`}
                  >
                    {item.growth}
                  </div>

                  <p className="text-[#667085] text-xs">
                    vs last month
                  </p>
                </div>

                {/* mini graph */}
                <div className="mt-4 flex items-end gap-1 h-[40px]">
                  <div className="w-full h-2 bg-blue-200 rounded-full" />
                  <div className="w-full h-4 bg-blue-300 rounded-full" />
                  <div className="w-full h-3 bg-blue-200 rounded-full" />
                  <div className="w-full h-6 bg-blue-400 rounded-full" />
                  <div className="w-full h-5 bg-blue-300 rounded-full" />
                  <div className="w-full h-8 bg-blue-500 rounded-full" />
                </div>
              </div>
            ))}
          </div>

          {/* CHART + ACTIVITY */}
          <div className="grid grid-cols-[1fr_300px] gap-4 mt-5">
            {/* CHART */}
            <div className="bg-white border border-[#EAECF0] rounded-2xl p-4">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold">
                  KYC Approval & Registrations
                </h2>

                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg border text-sm">
                    7D
                  </button>

                  <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm">
                    30D
                  </button>

                  <button className="px-3 py-1.5 rounded-lg border text-sm">
                    1Y
                  </button>
                </div>
              </div>

              {/* chart */}
              <div className="h-[240px] flex items-end gap-3 px-3">
                <div className="w-full bg-blue-100 rounded-t-xl h-[70px]" />
                <div className="w-full bg-blue-200 rounded-t-xl h-[110px]" />
                <div className="w-full bg-blue-300 rounded-t-xl h-[90px]" />
                <div className="w-full bg-blue-400 rounded-t-xl h-[170px]" />
                <div className="w-full bg-blue-500 rounded-t-xl h-[150px]" />
                <div className="w-full bg-blue-600 rounded-t-xl h-[220px]" />
                <div className="w-full bg-blue-700 rounded-t-xl h-[240px]" />
              </div>
            </div>

            {/* ACTIVITY */}
            <div className="bg-white border border-[#EAECF0] rounded-2xl p-4">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold">
                  Admin Activity
                </h2>

                <button className="text-blue-600 font-medium text-sm">
                  View All
                </button>
              </div>

              <div className="space-y-5">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#EEF2FF] flex items-center justify-center">
                      <ShieldCheck
                        size={16}
                        className="text-blue-600"
                      />
                    </div>

                    <div>
                      <p className="font-medium text-sm text-[#101828] leading-6">
                        Sarah approved KYC for
                        John Doe.
                      </p>

                      <span className="text-xs text-[#667085]">
                        10 mins ago
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white border border-[#EAECF0] rounded-2xl mt-5 overflow-hidden">
            <div className="p-4 border-b border-[#EAECF0] flex items-center justify-between">
              <h2 className="text-lg font-bold">
                Recent Registrations
              </h2>

              <button className="px-4 py-2 border rounded-xl text-sm">
                See All Users
              </button>
            </div>

            <table className="w-full">
              <thead className="bg-[#F9FAFB]">
                <tr>
                  <th className="text-left p-3 text-xs text-[#667085]">
                    USER
                  </th>

                  <th className="text-left p-3 text-xs text-[#667085]">
                    NATIONALITY
                  </th>

                  <th className="text-left p-3 text-xs text-[#667085]">
                    STATUS
                  </th>

                  <th className="text-left p-3 text-xs text-[#667085]">
                    TIME
                  </th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3].map((item) => (
                  <tr
                    key={item}
                    className="border-t border-[#EAECF0]"
                  >
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center font-semibold text-sm">
                          JD
                        </div>

                        <div>
                          <h3 className="font-semibold text-sm">
                            John Doe
                          </h3>

                          <p className="text-xs text-[#667085]">
                            john@example.com
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-3 text-sm">
                      🇺🇸 USA
                    </td>

                    <td className="p-3">
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        Approved
                      </span>
                    </td>

                    <td className="p-3 text-xs text-[#667085]">
                      2 mins ago
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}