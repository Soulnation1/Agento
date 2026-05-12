import { toast } from "react-toastify";

const baseOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme : "colored",
};

export const showToast = (message, type = "success") => {
  if (type === "success") {
    toast.success(message, baseOptions);
  } else if (type === "error") {
    toast.error(message, baseOptions);
  } else {
    toast(message, baseOptions);
  }
};