interface Props extends React.HTMLProps<HTMLButtonElement> {
    children?: React.ReactNode;
    onClick?: () => void;
}



export default function ButtonUI({children, onClick, ...props}: Props) {
  return (
    <button
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-white/20 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    >
        {children}
    </button>
  );
}