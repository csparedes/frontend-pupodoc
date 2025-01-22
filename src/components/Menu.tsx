import { logout } from "@/app/login/actions";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/dashboard",
        visible: ["admin", "ceo", "director", "coor", "op", "developer"],
      },
      {
        icon: "/requirements.png",
        label: "Requirements",
        href: "/dashboard/requirements",
        visible: ["admin", "ceo", "director", "coor", "op", "developer"],
      },
      {
        icon: "/reports.png",
        label: "Reports",
        href: "/dashboard/reports",
        visible: ["admin", "ceo", "director", "coor", "op", "developer"],
      },
      {
        icon: "/management.png",
        label: "Management",
        href: "/dashboard/management",
        visible: ["admin", "ceo", "director", "coor", "op", "developer"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/dashboard/profile",
        visible: ["admin", "ceo", "director", "coor", "op", "developer"],
      },
      {
        icon: "/settings.png",
        label: "Settings",
        href: "/dashboard/settings",
        visible: ["admin", "ceo", "director", "coor", "op", "developer"],
      },
      // {
      //   icon: "/log-out.png",
      //   label: "Logout",
      //   href: "/dashboard/logout",
      //   visible: ["admin", "ceo", "director", "coor", "op", "developer"],
      // },
    ],
  },
];

const Menu = async () => {
  //   const user = await currentUser();
  //   const role = user?.publicMetadata.role as string;
  const role = "admin";
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
      <button
        onClick={logout}
        className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-4 md:px-2 rounded-md hover:bg-lamaSkyLight"
      >
        <Image src="/log-out.png" alt="" width={20} height={20} />
        <span className="hidden lg:block">Logout</span>
      </button>
    </div>
  );
};

export default Menu;
