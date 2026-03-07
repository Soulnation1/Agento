import clsx from "clsx";
const Button = ({title, type="danger",size="md", onClick}) => {
  
    const style =clsx (
         "bg-[#7a6dfe] text-[#ffffff] p-4 rounded",
         type === "danger" && "bg-red-500 hover:bg-red-100 text-white",
        type === "success" && "bg-green-500 hover:bg-green-600 text-white",
        type === "warning" && "bg-yellow-500 hover:bg-yellow-600 text-white",
        type === "regular" && "bg-[#7a6dfe] hover:bg-purple-600 text-[#ffffff] border border-gray-300",
        size === "sm" && "p-2",
        size === "md" && "p-4 ",
        size === "lg" && "p-6 ",
        size === "regular" && "w-full px-16 py-2",
    
    )
  return (
    <div>
<button className={style} onClick={onClick}>
      {title}
    </button>
    </div>
  )
}


// color
// red-danger
// green-succes
// white-regular
// yellow-warning

// size
// small-sm
// medium-md
// large-lg

export default Button