import toast from "react-hot-toast";
import { signupProps } from "../types";
export function handleValidationSignUp({
  fullname,
  username,
  password,
  confirmpassword,
  gender,
}: signupProps) {
  if (!fullname || !username || !password || !confirmpassword || !gender) {
    toast.error("please fill in all the fields");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Passwords don't match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password most be more than 6 character ");
    return false;
  }
  return true;
}
export function extractTime(dateString: string) {
  const date = new Date(dateString);
  const Hours = padZero(date.getHours());
  const Minutes = padZero(date.getMinutes());
  return `${Hours}:${Minutes}`;
}
function padZero(number: number) {
  return number.toString().padStart(2, "0");
}
