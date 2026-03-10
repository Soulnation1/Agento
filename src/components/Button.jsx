import clsx from "clsx";
const Button = ({ title, type, size, onClick, className }) => {
  const style = clsx(
    " text-[#ffffff] py-3 rounded",
    type === "danger" &&
      "bg-[#fff0f0] hover:bg-red-100 text-[#e04040] border border-[#f8d8d8] rounded-md ",
    type === "success" && "bg-green-500 hover:bg-green-600 text-white",
    type === "warning" && "bg-yellow-500 hover:bg-yellow-600 text-white",
    type === "common" &&
      "bg-[#9680fb] rounded-xl text-[#ffffff] hover:bg-[#7f63ff] hover:scale-105 transition font-semibold  ",
    type === "compose" &&
      "bg-[#f0f0fc] text-[#6c65ff] border border-[#ddddf8]  rounded-xl  hover:scale-105 transition ",
      size === "x-small" && "px-8 py-3  ",
    size === "sm" && "px-2 py-2  ",
    size === "md" && "px-10 py-2 ",
    size === "lg" && "px-12 py-2 ",
    size === "full" && "w-full py-2",
    className,
  );
  return (
    <div>
      <button className={style} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};



export default Button;
