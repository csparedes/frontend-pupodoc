interface Props {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: Props) {
  return (
    <main className="flex items-center justify-center align-middle h-screen">
      {children}
    </main>
  );
}
