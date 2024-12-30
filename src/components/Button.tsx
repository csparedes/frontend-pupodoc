interface Props extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined
}

export default function ButtonUI({ children, onClick, type = 'button', ...props }: Props) {
  return (
    <button
      type={type}
      className="rounded-full border border-solid hover:bg-gray-100 text-sm w-full p-4"
      {...props}
    >
      {children}
    </button>
  );
}
