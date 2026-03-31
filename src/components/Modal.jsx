import React from "react";
import Button from "./Button";

const Modal = ({ isOpen, title, message, type, onClose }) => {
  if (!isOpen) return null;

  const typeColors = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  m-2 text-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div
        className={`relative p-6 rounded-lg shadow-lg w-11/12 max-w-md ${
          typeColors[type] || typeColors.info
        }`}
      >
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{message}</p>
       <Button
       type={"common"}
       size={"lg"}
       title={type === "success" ? "Go to Dashboard" : "Try again"}
       onClick={onClose}
       />
      </div>
    </div>
  );
};

export default Modal;