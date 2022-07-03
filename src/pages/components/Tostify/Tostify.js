import { toast } from "react-toastify";

// Login component tostify start from here.

export const emptyField = () =>
  toast.error("Please fill this field.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const successfullyLogin = () =>
  toast.success("Successfully login.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const emptyEmail = () =>
  toast.error("Please Enter Your Email", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const errorPassword = () =>
  toast.error("Enter a valid password.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const wrongPassword = (message) =>
  toast.error((message), {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const errorMessage = (message) =>
  toast.error((message), {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true, 
    progress: undefined,
  });

// Login component tostify End from here.

export const successfullyQuerySend = () =>
  toast.success("Successfully Send.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const QueryErrorInformation = () =>
  toast.error("Please Fill This Field.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const emptyQueryWebsite = () =>
  toast.error("Please Enter Your Website url", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

// sign up
export const emptyName = () =>
  toast.error("Please Enter Your Name.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const createPassword = () =>
  toast.error("Please create a secure password.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const shortPassword = () =>
  toast.error("Password can't less than 6 character.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const reTypePassword = () =>
  toast.error("Please re-type your password.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const doNotMatchPassword = () =>
  toast.error("Your password doesn't match.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const createUserSuccessfully = () =>
  toast.success("Successfully Sign-Up.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

// export let promise = () => {
//   const resolveAfter3sec = new promise((resolve, reject) => {
//     setTimeout(resolve, 3000);
//   })
//   toast.promise(resolveAfter3sec, {
//     pending: "pending",
//     success: "success",
//     error: "error",
//   });
// };

// contact page
export const messageSend = () =>
  toast.success("Successfully send your message.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const emptyDescription = () =>
  toast.error("Write anything you want...", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
