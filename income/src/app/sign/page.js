"use client";
import { Vector } from "../../assets/Vector";
import { Name } from "../../assets/Name";
import Link from "next/link";
import { Btn } from "../../components/btn";
import { useAuth } from "../../providers/AuthProvider";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function Sign() {
  const { signUp } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();
  return (
    <div className="w-full flex h-screen ">
      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="flex flex-col justify-start items-center gap-10">
          <div className="p-[5px] justify-start items-center gap-[10px] flex">
            <Vector />
            <Name />
          </div>
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">
              Create Geld account
            </div>
            <div className="text-slate-700 text-base font-normal font-['Roboto'] leading-normal">
              Sign up below to create your Wallet account
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <input
              placeholder="Name"
              className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              placeholder="Email"
              value={email}
              className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="w-full relative">
              <input
                placeholder="password"
                label="Нууц үг"
                name="password"
                value={password}
                type={showPassword ? "text" : "password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300  justify-start items-center flex"
              />
              <div
                onClick={togglePasswordVisibility}
                className="ml-2 p-2 rounded-md items-center flex absolute inset-y-0 right-0"
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>
            <div className="w-full relative">
              <input
                placeholder="password"
                label="Нууц үг"
                name="password"
                type={showPassword ? "text" : "password"}
                value={rePassword}
                onChange={(e) => {
                  setRePassword(e.target.value);
                }}
                className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300  justify-start items-center flex"
              />
              <div
                onClick={togglePasswordVisibility}
                className="ml-2 p-2 rounded-md items-center flex absolute inset-y-0 right-0"
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>
            <div
              onClick={() => {
                signUp(name, email, password);
                // toast.success("signed up successfully"),
              }}
            >
              <Btn value="Sign up" />
            </div>
          </div>
          <div className="justify-start items-baseline inline-flex">
            <div className="text-slate-900 text-base font-normal font-['Roboto'] leading-normal">
              Already have account?
            </div>
            <div className="w-[77px] px-3 rounded-[20px] justify-center items-center gap-1 flex">
              <Link href="/login">
                <div className="text-blue-600 text-base font-normal font-['Roboto'] leading-normal">
                  Login
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-600"></div>
    </div>
  );
}
