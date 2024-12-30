import { CircleUser, LayoutDashboard } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

export default function NavbarUI({ children }: Props) {
  return (
    <div className="flex w-full h-screen">
      <nav className="flex flex-col justify-between w-14 p-2 my-2 ml-2 border rounded-lg">
        <ul className="flex flex-col gap-1 items-center">
          <li className="flex flex-col items-center justify-center hover:rounded-lg hover:bg-white/10 hover:cursor-pointer">
            {/* TODO: replace to Link Router */}

            <LayoutDashboard className="text-gray-700 dark:text-gray-500 p-2" />
            <span className="text-gray-700 dark:text-gray-500 text-xs whitespace-nowrap font-thin px-1">
              menu 1
            </span>
          </li>
        </ul>
        <button className="p-1 rounded-lg ">
          <CircleUser className="text-gray-700 dark:text-gray-500" />
        </button>
      </nav>
      <div className="p-2 border rounded-lg w-full m-2 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
