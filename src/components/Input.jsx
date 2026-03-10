import clsx from "clsx";
const Input = ({ className, size, placeholder, type="text", value, onChange }) => {
    const style = clsx(
        " font-semibold bg-[#ffffff] border-[1px] rounded-md border-[#8b8b8b]", 
        size === "common" &&"w-full bg-[#f9f9fd] border-[#e0e0ec] rounded-md py-2 px-3 mb-4 placeholder:text-[#adadaf] text-[16px] ",
        size === "medium" &&"w-[200px] bg-[#f9f9fd] rounded-md border-[0.5px] py-3 px-3 mb-4 placeholder:text-[#adadaf] text-[16px]",
        
        className)
  return (
    <div>
        <input
          type={type}
          className={style}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
    </div>
  )
}

export default Input