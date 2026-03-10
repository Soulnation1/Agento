import clsx from "clsx";
const Input = ({ className, size, placeholder, type="text", value, onChange, icon:Icon }) => {
    const style = clsx(
        " font-semibold bg-[#ffffff] border-[1px] rounded-md border-[#e0e0ec]", 
        size === "sm" &&"w-[100px] bg-[#f9f9fd] rounded-md py-2 px-3 mb-4 placeholder:text-[#adadaf] text-[14px] ",
        size === "lg" &&"w-full bg-[#f9f9fd] rounded-md py-2 px-3 mb-4 placeholder:text-[#adadaf] text-[16px] ",
        size === "md" &&"w-[200px] bg-[#f9f9fd] rounded-md border-[0.5px] py-1.5 px-3 mb-4 placeholder:text-[#adadaf] text-[16px]",
        size === "full" &&"w-full bg-[#f9f9fd] rounded-md border-[0.5px] py-2 px-3 mb-4 placeholder:text-[#adadaf] text-[18px]",
        
        className)
  return (
    <div>
        <input
          type={type}
          className={style}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          icon={Icon}
        />
    </div>
  )
}

export default Input