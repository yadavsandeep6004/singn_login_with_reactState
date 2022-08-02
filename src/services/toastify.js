import { toast } from "react-toastify";

export const successful = (msg) => {
  toast.success(msg, { position: "top-center", autoClose: 3000 });
};

export const unsuccess = (msg) => {
  toast.error(msg, { position: "top-center" });
};
