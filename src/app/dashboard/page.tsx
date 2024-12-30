import EventCalendar from "@/components/EventCalendar";
import { Ellipsis, Telescope } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row ">
      <div className="w-full md:w-2/3 ">
        <div className="bg-white w-full h-[400px] p-4 rounded-md relative">
          <div className="flex items-center justify-between ">
            <h1>Dashboard</h1>
            <Ellipsis />
          </div>
          <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col align-middle justify-center items-center">
            <Telescope className="w-28 h-28 text-gray-400" />
            <span className="text-sm font-semibold text-center">
              You can explore your assigned tasks
            </span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <EventCalendar />
      </div>
    </div>
  );
}
