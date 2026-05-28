import { useEffect, useState, useCallback } from "react";

import {
  Search,
  Eye,
  ShieldCheck,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import api from "../api/axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] =
    useState(true);

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);

      const res = await api.get(
        "/api/admin/users"
      );

      console.log(res.data);

      setUsers(res.data?.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700";

      case "rejected":
        return "bg-red-100 text-red-700";

      case "reviewing":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F7FB]">
      <Sidebar />

      <div className="flex-1 p-5">
        {/* TOP */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-2xl font-bold text-[#101828]">
              Users Management
            </h1>

            <p className="text-sm text-[#667085] mt-1">
              Manage and monitor all users.
            </p>
          </div>

          <button className="h-[40px] px-4 rounded-xl bg-[#155EEF] text-white text-sm font-medium">
            + Add User
          </button>
        </div>

        {/* SEARCH */}
        <div className="bg-white border border-[#EAECF0] rounded-2xl p-4 mb-5">
          <div className="relative w-[300px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search users..."
              className="w-full h-[42px] border border-[#D0D5DD] rounded-xl pl-11 pr-4 outline-none text-sm"
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white border border-[#EAECF0] rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-[#EAECF0] flex items-center justify-between">
            <h2 className="text-lg font-bold">
              All Users
            </h2>

            <div className="text-sm text-[#667085]">
              Total: {users.length}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F9FAFB]">
                <tr>
                  <th className="text-left p-4 text-xs font-semibold text-[#667085]">
                    USER
                  </th>

                  <th className="text-left p-4 text-xs font-semibold text-[#667085]">
                    NATIONALITY
                  </th>

                  <th className="text-left p-4 text-xs font-semibold text-[#667085]">
                    PASSPORT
                  </th>

                  <th className="text-left p-4 text-xs font-semibold text-[#667085]">
                    ROLE
                  </th>

                  <th className="text-left p-4 text-xs font-semibold text-[#667085]">
                    STATUS
                  </th>

                  <th className="text-left p-4 text-xs font-semibold text-[#667085]">
                    VERIFIED
                  </th>

                  <th className="text-left p-4 text-xs font-semibold text-[#667085]">
                    ACTION
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="p-10 text-center text-gray-500"
                    >
                      Loading users...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="p-10 text-center text-gray-500"
                    >
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr
                      key={user._id}
                      className="border-t border-[#EAECF0] hover:bg-[#F9FAFB] transition"
                    >
                      {/* USER */}
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center font-semibold text-sm text-blue-700">
                            {user?.fullName
                              ?.charAt(0)
                              ?.toUpperCase()}
                          </div>

                          <div>
                            <h3 className="font-semibold text-sm text-[#101828]">
                              {user?.fullName}
                            </h3>

                            <p className="text-xs text-[#667085]">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* NATIONALITY */}
                      <td className="p-4 text-sm text-[#101828]">
                        {user?.nationality}
                      </td>

                      {/* PASSPORT */}
                      <td className="p-4 text-sm text-[#101828]">
                        {user?.passportNumber}
                      </td>

                      {/* ROLE */}
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            user?.role ===
                            "admin"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {user?.role}
                        </span>
                      </td>

                      {/* KYC STATUS */}
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                            user?.kycStatus
                          )}`}
                        >
                          {user?.kycStatus}
                        </span>
                      </td>

                      {/* VERIFIED */}
                      <td className="p-4">
                        {user?.isVerified ? (
                          <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <ShieldCheck
                              size={16}
                            />
                            Verified
                          </div>
                        ) : (
                          <span className="text-red-500 text-sm">
                            Not Verified
                          </span>
                        )}
                      </td>

                      {/* ACTION */}
                      <td className="p-4">
                        <button className="w-9 h-9 rounded-lg border border-[#D0D5DD] flex items-center justify-center hover:bg-gray-50">
                          <Eye size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}