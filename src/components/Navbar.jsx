import { Bell, Clock3 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-[80px] bg-white border-b flex items-center justify-between px-6">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-[320px] h-[45px] border rounded-xl px-4 outline-none"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell className="cursor-pointer" />
        <Clock3 className="cursor-pointer" />

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
}