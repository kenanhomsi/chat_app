import { useState } from "react";
import { signupProps } from "../types";
import { handleValidationSignUp } from "../utils/functions";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useSignUp = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const signup = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }: signupProps) => {
    const Issuccess = handleValidationSignUp({
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    });
    if (!Issuccess) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};
export default useSignUp;
