"use client";
import { Vector } from "../../assets/Vector";
import { Name } from "../../assets/Name";
import { Btn } from "../../components/btn";
import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import {} from "@mui/material";
import Link from "next/link";
import { useAuth } from "../../providers/AuthProvider";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      router.push("/dashboard");
      setEmail(e.target.value);
      setPassword(e.target.value);
    },
  });
  const router = useRouter();

  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex h-screen ">
      <div className="w-1/2 flex justify-center items-center bg-white ">
        <div className="flex  flex-col justify-start items-center gap-10 ">
          <div className="p-[5px] justify-start items-center gap-[10px] flex">
            <Vector />
            <Name />
          </div>
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">
              Welcome Back
            </div>
            <div className="text-slate-700 text-base font-normal font-['Roboto'] leading-normal">
              Welcome back, Please enter your details
            </div>
          </div>
          <form className="flex-col justify-start items-start gap-4 flex">
            <input
              placeholder="email"
              label="Имэйл"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300   justify-start items-center flex"
            />
            <div className="w-full relative">
              <input
                placeholder="password"
                label="Нууц үг"
                name="password"
                type={showPassword ? "text" : "password"}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
                className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300  justify-start items-center flex"
              />
              <div
                onClick={togglePasswordVisibility}
                className="ml-2 p-2 rounded-md items-center flex absolute inset-y-0 right-0"
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>
            <Btn
              onClick={() => {
                signIn(email, password);
                formik.handleSubmit();
              }}
              value="Log in"
            />
          </form>
          <div className="justify-start  flex">
            <div className="text-slate-900 text-base font-normal font-['Roboto'] leading-normal">
              Don&apos;t have account?
            </div>
            <div className="w-[77px] px-3 rounded-[20px] justify-center items-center gap-1 flex">
              <Link href="/sign">
                <div className="text-blue-600 text-base font-normal font-['Roboto'] leading-normal">
                  Sign up
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
