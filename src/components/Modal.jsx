import Button from "./Button";
import clsx from "clsx";
const Modal = ({ isOpen, onClose, title, type, message,className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      

      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

     
      <div
        className={clsx(
          "relative rounded-2xl p-6 w-[90%] max-w-sm shadow-xl z-10",
          type === "success" && "bg-green-100 text-green-800",
          type === "error" && "bg-red-100",
          type !== "success" && type !== "error" && "bg-white",
          className
        )}
      >
        <h2 className="text-xl font-bold mb-2">
          {title}
        </h2>

        <p
          className={clsx(
            "text-sm mb-6",
            type === "error" && "text-red-700"
          )}
        >
          {message}
        </p>

        <Button
          types="common"
          onClick={onClose}
          title="Continue"
          size="full"
        />
      </div>
    </div>
  );
};

export default Modal;