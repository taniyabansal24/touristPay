import {
  useEffect,
  useState,
  useCallback,
} from "react";

import {
  Check,
  X,
  Search,
  ShieldAlert,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import api from "../api/axios";

export default function PendingKyc() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const baseURL =
    "http://13.233.173.248:5000";

  const getPendingUsers = useCallback(
    async () => {
      try {
        setLoading(true);

        const res = await api.get(
          "/api/admin/kyc/pending"
        );

        const data = res.data?.data || [];

        setUsers(data);

        if (data.length > 0) {
          setSelectedUser(data[0]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getPendingUsers();
  }, [getPendingUsers]);

  const approveKyc = async (id) => {
    try {
      await api.put(
        `/api/admin/kyc/${id}/approve`
      );

      getPendingUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectKyc = async (id) => {
    try {
      await api.put(
        `/api/admin/kyc/${id}/reject`
      );

      getPendingUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F7FB]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <div className="h-[72px] bg-white border-b border-[#EAECF0] px-5 flex items-center justify-between">
          <div className="relative w-[320px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-full h-[42px] border border-[#D0D5DD] rounded-xl pl-11 pr-4 outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">
              TB
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1">
          {/* LEFT QUEUE */}
          <div className="w-[380px] border-r border-[#EAECF0] bg-[#F8FAFC]">
            <div className="p-5 border-b border-[#EAECF0]">
              <h1 className="text-[30px] font-bold text-[#101828]">
                Queue
              </h1>

              <p className="text-sm text-[#667085] mt-1">
                {users.length} Pending Reviews
              </p>
            </div>

            <div className="p-4 space-y-4">
              {loading ? (
                <div className="text-center py-10 text-gray-500">
                  Loading...
                </div>
              ) : (
                users.map((user) => (
                  <div
                    key={user._id}
                    onClick={() =>
                      setSelectedUser(user)
                    }
                    className={`bg-white border rounded-2xl p-4 cursor-pointer transition ${
                      selectedUser?._id ===
                      user._id
                        ? "border-blue-500"
                        : "border-[#EAECF0]"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-sm text-blue-700">
                          {user?.fullName
                            ?.charAt(0)
                            ?.toUpperCase()}
                        </div>

                        <div>
                          <h2 className="font-semibold text-[#101828]">
                            {user?.fullName}
                          </h2>

                          <p className="text-sm text-[#667085]">
                            {user?.nationality}
                          </p>
                        </div>
                      </div>

                      <div className="px-3 py-1 rounded-lg bg-yellow-100 text-yellow-700 text-xs font-semibold">
                        Review
                      </div>
                    </div>

                    <p className="text-sm text-[#667085] mt-4">
                      Submitted recently
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 p-6">
            {selectedUser ? (
              <>
                {/* USER INFO */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h1 className="text-[42px] font-bold leading-[48px] text-[#101828]">
                      {selectedUser?.fullName}
                    </h1>

                    <p className="text-[#667085] mt-3 text-lg">
                      {selectedUser?.email}
                    </p>
                  </div>

                  <div className="bg-white border border-[#EAECF0] rounded-2xl px-6 py-5 flex items-center gap-8">
                    <div>
                      <p className="text-xs font-semibold text-[#667085] uppercase">
                        Risk
                      </p>

                      <div className="flex items-center gap-2 mt-2 text-green-600 font-semibold">
                        <ShieldAlert
                          size={18}
                        />

                        Low Risk
                      </div>
                    </div>

                    <div className="w-[1px] h-[60px] bg-[#EAECF0]" />

                    <div>
                      <p className="text-xs font-semibold text-[#667085] uppercase">
                        Confidence
                      </p>

                      <h2 className="text-[36px] font-bold text-[#101828] mt-1">
                        98%
                      </h2>
                    </div>
                  </div>
                </div>

                {/* DOCUMENTS */}
                <div className="grid grid-cols-2 gap-6">
                  {/* PASSPORT */}
                  <div className="bg-white border border-[#EAECF0] rounded-3xl overflow-hidden">
                    <div className="p-5 border-b border-[#EAECF0]">
                      <h2 className="font-semibold text-lg">
                        Passport Document
                      </h2>
                    </div>

                    <div className="p-5">
                      <div className="h-[300px] bg-[#F9FAFB] rounded-2xl flex items-center justify-center border">
                        {selectedUser?.passportDocument ? (
                          <iframe
                            src={`${baseURL}${selectedUser?.passportDocument}`}
                            className="w-full h-full rounded-2xl"
                            title="passport"
                          />
                        ) : (
                          <p className="text-gray-400">
                            No Document
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-5">
                        <div className="border rounded-xl p-4">
                          <p className="text-xs text-[#667085]">
                            Passport No.
                          </p>

                          <h3 className="font-semibold mt-1">
                            {
                              selectedUser?.passportNumber
                            }
                          </h3>
                        </div>

                        <div className="border rounded-xl p-4">
                          <p className="text-xs text-[#667085]">
                            Nationality
                          </p>

                          <h3 className="font-semibold mt-1">
                            {
                              selectedUser?.nationality
                            }
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SELFIE */}
                  <div className="bg-white border border-[#EAECF0] rounded-3xl overflow-hidden">
                    <div className="p-5 border-b border-[#EAECF0]">
                      <h2 className="font-semibold text-lg">
                        Selfie Verification
                      </h2>
                    </div>

                    <div className="p-5">
                      <div className="h-[300px] bg-[#F9FAFB] rounded-2xl border overflow-hidden flex items-center justify-center">
                        {selectedUser?.selfieImage ? (
                          <img
                            src={`${baseURL}${selectedUser?.selfieImage}`}
                            alt="selfie"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <p className="text-gray-400">
                            No Selfie
                          </p>
                        )}
                      </div>

                      <div className="mt-5 border rounded-2xl p-5">
                        <p className="text-sm text-[#667085]">
                          Face Match Result
                        </p>

                        <div className="flex items-center justify-between mt-2">
                          <span className="font-semibold">
                            Confidence Score
                          </span>

                          <span className="text-[32px] font-bold text-green-600">
                            99.2%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex items-center justify-end gap-4 mt-8">
                  <button
                    onClick={() =>
                      rejectKyc(
                        selectedUser?._id
                      )
                    }
                    className="h-[52px] px-8 rounded-2xl bg-red-600 text-white font-semibold flex items-center gap-2"
                  >
                    <X size={18} />
                    Reject
                  </button>

                  <button
                    onClick={() =>
                      approveKyc(
                        selectedUser?._id
                      )
                    }
                    className="h-[52px] px-8 rounded-2xl bg-green-600 text-white font-semibold flex items-center gap-2"
                  >
                    <Check size={18} />
                    Approve
                  </button>
                </div>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                No User Selected
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}