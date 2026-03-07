import clsx from "clsx";
const Button = ({ onClick,title }) => {

  interface ButtonProps {
    title: string;
    onClick?: () => void;
    size?: "small" | "medium" | "large";
    type?: "primary" | "secondary";
  }

"bg-"

  return (
    <button  className="bg-white  text-blue-500 p-10" onClick={onClick}>
    {title}
    </button>
  )
}

export default Button