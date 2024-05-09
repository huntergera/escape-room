interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
  ...props
}) => {
  return (
    <button type={type} className={`py-4 px-7 text-18 font-medium rounded-3xl uppercase text-white ${className}`} { ...props}>
      {children}
    </button>
  )
}

export default Button;