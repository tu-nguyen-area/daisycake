interface ButtonProps extends React.ButtonHTMLAttributes<> {
  children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button>
      {children}
    </button>
  );
}
