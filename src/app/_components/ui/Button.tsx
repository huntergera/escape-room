interface ButtonProps {
  children: React.ReactNode;
  className: string;
}

const Button: React.FC<ButtonProps> = ({children, className, ...props}) => {
  return (
    <button type='button' className={`py-4 px-7 text-18 font-medium rounded-3xl uppercase text-white ${className}`} { ...props}>
      {children}
    </button>
  )
}

export default Button;