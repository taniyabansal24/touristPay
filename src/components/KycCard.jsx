export default function KycCard({
  user,
  approveKyc,
  rejectKyc,
}) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            {user?.fullName}
          </h2>

          <p className="text-gray-500">
            {user?.email}
          </p>
        </div>

        <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
          Pending
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <p>
          <span className="font-medium">
            Nationality:
          </span>{" "}
          {user?.nationality}
        </p>

        <p>
          <span className="font-medium">
            Passport:
          </span>{" "}
          {user?.passportNumber}
        </p>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() =>
            approveKyc(user?._id)
          }
          className="flex-1 bg-green-600 text-white py-3 rounded-xl"
        >
          Approve
        </button>

        <button
          onClick={() =>
            rejectKyc(user?._id)
          }
          className="flex-1 bg-red-600 text-white py-3 rounded-xl"
        >
          Reject
        </button>
      </div>
    </div>
  );
}