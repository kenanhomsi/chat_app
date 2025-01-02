import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
export interface LoginProps {
  username: string;
  password: string;
}
const useLogin = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setloading] = useState(false);
  const login = async ({ username, password }: LoginProps) => {
    if (!username || !password) {
      toast.error("please fill all the fields");
      return;
    }
    setloading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
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
        toast.error("Unknown error");
      }
    } finally {
      setloading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
