import clsx from "clsx";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
  className,
  size,
  placeholder,
  type = "text",

  label,
  rightIcon: RightIcon,
  leftIcon: LeftIcon,
  disabled,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const style = clsx(
    "font-semibold bg-[#ffffff] border-[1px] rounded-md border-[#e0e0ec]",
    size === "sm" &&
      "w-[100px] bg-[#f9f9fd] py-2 px-3  placeholder:text-[#adadaf] text-[14px]",
    size === "lg" &&
      "w-full bg-[#f9f9fd] py-2 px-3  placeholder:text-[#adadaf] text-[16px]",
    size === "md" &&
      "w-[200px] bg-[#f9f9fd] py-1.5 px-3  placeholder:text-[#adadaf] text-[16px]",
    size === "full" &&
      "w-full bg-[#f9f9fd] py-2 px-3  placeholder:text-[#adadaf] text-[18px]",
    LeftIcon && "pl-10",
    RightIcon && "pr-10",
    isPassword && "pr-10",
    className,
  );

  return (
    <div>
      {label && (
        <label className="text-[#756080] text-xs font-semibold">{label}</label>
      )}

      <div className="relative">
        {LeftIcon && (
          <LeftIcon
            className="absolute left-3 top-3 text-[#9680fb]"
            size={20}
          />
        )}
        {isPassword ? (
          showPassword ? (
            <EyeOff
              size={20}
              className="absolute right-3 top-3 text-[#9680fb] cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Eye
              size={20}
              className="absolute right-3 top-3 text-[#9680fb] cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )
        ) : (
          RightIcon && (
            <RightIcon
              size={20}
              className="absolute right-3 top-3 text-[#9680fb]"
            />
          )
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          className={style}
          {...props}
        />
        <div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>{" "}
      </div>
    </div>
  );
};

export default Input;
