import  clsx from "clsx";
const SearchInput = ({type,placeholder,className,size}) => {
    const style = clsx(
        "py-[5px] w-[300px] font-semibold bg-[#ffffff] border-[1px] rounded-md border-[#8b8b8b]", 
        size === "common" &&"w-full bg-[#f9f9fd] border-[#e0e0ec] rounded-md py-3 px-3 mb-4 placeholder:text-[#757575] text-[16px]",
        size === "medium" &&"w-[200px] bg-[#f9f9fd] rounded-md border-[0.5px] py-3 px-3 mb-4 placeholder:text-[#757575] text-[16px]",
        className)
  return (
    <div>
        <input 
    
        type="text" 
        placeholder="Search..." 
        className="bg-gray-100 text-gray-500 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  )
}

export default SearchInput