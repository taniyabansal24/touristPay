import {
  LayoutDashboard,
  Users,
  BadgeCheck,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <aside className="w-[240px] h-screen sticky top-0 bg-white border-r border-[#EAECF0] flex flex-col justify-between overflow-y-auto">
      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="h-[72px] border-b border-[#EAECF0] flex items-center px-6">
          <div>
            <h1 className="text-[30px] font-bold text-blue-600 leading-none">
              TouristPay
            </h1>

            <p className="text-sm text-[#667085] mt-1">
              Management Portal
            </p>
          </div>
        </div>

        {/* MENU */}
        <div className="p-4 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 h-[46px] px-4 rounded-xl text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-[#344054] hover:bg-gray-100"
              }`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center gap-3 h-[46px] px-4 rounded-xl text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-[#344054] hover:bg-gray-100"
              }`
            }
          >
            <Users size={18} />
            Users
          </NavLink>

          <NavLink
            to="/pending-kyc"
            className={({ isActive }) =>
              `flex items-center gap-3 h-[46px] px-4 rounded-xl text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-[#344054] hover:bg-gray-100"
              }`
            }
          >
            <BadgeCheck size={18} />
            Pending KYC
          </NavLink>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="p-4 border-t border-[#EAECF0]">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 h-[46px] px-4 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}