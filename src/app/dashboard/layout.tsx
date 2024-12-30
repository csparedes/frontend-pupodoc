import NavbarUI from "../ui/NavbarUI";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <main className="">
      <NavbarUI>{children}</NavbarUI>
    </main>
  );
}
