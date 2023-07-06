import { toast, Zoom } from 'react-toastify';

const timeout = 3000;

export const success = (msg:string) => {
    toast.dismiss();
    toast.success(msg, {
        transition: Zoom,
        position: "bottom-right",
        autoClose: timeout,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false
    });
}

export const mobileSuccess = (msg:string) => {
    toast.dismiss();
    toast.success(msg, {
        transition: Zoom,
        position: "top-right",
        autoClose: timeout,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false
    });
}

export const error = (msg:string) => {
    toast.dismiss();
    toast.error(msg, {
        transition: Zoom,
        position: "bottom-right",
        autoClose: timeout,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false
    });
}

export const mobileError = (msg:string) => {
    toast.dismiss();
    toast.error(msg, {
        transition: Zoom,
        position: "top-right",
        autoClose: timeout,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false
    });
}

export const warn = (msg:string) => {
    toast.warn(msg, {
        transition: Zoom,
        position: "bottom-right",
        autoClose: timeout,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false
    });
}