/// <reference types="vite/client" />
type Gender = "male" | "female" | "";
interface InputFields {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: Gender; // 初始状态为空字符串
}
interface GenderCheckboxProps {
  onCheckboxChange: (gender: Gender) => void;
  selectedGender: Gender;
}
