export default function UserTable({ users }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-[#F8FAFC]">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Nationality</th>
            <th className="p-4 text-left">Passport</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user) => (
            <tr
              key={user?._id}
              className="border-t"
            >
              <td className="p-4">
                {user?.fullName}
              </td>

              <td className="p-4">
                {user?.email}
              </td>

              <td className="p-4">
                {user?.nationality}
              </td>

              <td className="p-4">
                {user?.passportNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}