import clsx from "clsx";
const Button = ({title, type,size, onClick}) => {
  
    const style =clsx (
         " text-[#ffffff] py-3 rounded",
         type === "danger" && "bg-red-500 hover:bg-red-100 text-white",
        type === "success" && "bg-green-500 hover:bg-green-600 text-white",
        type === "warning" && "bg-yellow-500 hover:bg-yellow-600 text-white", 
        type === "regular" && "bg-[#9680fb] w-full py-2 rounded-md  text-[#ffffff] hover:bg-[#7f63ff] hover:scale-105 transition ",
        type === "compose" && "bg-[#f0f0fc] text-[#8b85ff] ",
        size === "sm" && "px-2 py-1 ",
        size === "md" && "px-8 py-2 ",
        size === "lg" && "px-6 py-3 ",
        size === "regular" && "w-full px-16 py-3",
    
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