import { Bounce, toast } from 'react-toastify';

export const showError = message =>
  toast.error(message, {
    toastId: 'warning',
    position: 'top-right',
    closeOnClick: true,
    transition: Bounce,
    autoClose: 3000,
  });

export const showSuccess = message =>
  toast.success(message, {
    toastId: 'success',
    position: "top-right",
    closeOnClick: true,
    transition: Bounce,
    autoClose: 3000,
  });