"use client";

import { BASE_URL } from "@/constant";
import { useUserStore } from "@/store";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { login } from "@/request-manager";
import Link from "next/link";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const handleUserProps = useUserStore((state) => state.authenticateUser);
  //   const loggedinState = useUserStore((state) => state.handleAuthState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const auth = async (data: any) => {
    setLoading(true);
    const formdata = {
      email: data["email"],
      password: data["password"],
    };
    const resData = await login(formdata);

    if (resData && !resData.error) {
      handleUserProps(resData.user);
      setCookie("code-a", resData.accessToken, { maxAge: 60 * 60 * 60 * 2 });
      setCookie("code-r", resData.refreshToken, {
        maxAge: 60 * 60 * 60 * 31,
      });
      setErrorMsg("");
      router.push("/dashboard");
    }

    if (resData.error) {
      setErrorMsg(resData.message);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white shadow-lg animate__fadeIn animate__animated rounded-md w-full md:w-[500px] p-7">
      <p className="text-center text-lg text-[#1e202a] font-semibold">
        Login to your account
      </p>
      <p className="text-center text-sm text-[#7c7f8a] mb-5">
        Provide your credentials
      </p>

      {errorMsg !== "" && (
        <div className="w-full flex justify-center ">
          <div className=" px-6 rounded-lg py-1.5 border border-red-400 bg-red-200">
            <p className="text-sm  text-red-600 text-center">{errorMsg}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(auth)}>
        <div className=" grid gap-2 grid-cols-1 w-full mb-4   ">
          <div className="">
            <label htmlFor="email" className="text-xs text-textColor/70 mb-1.5">
              Email
            </label>
            <input
              id="email"
              {...register("email", { required: "This field is requid" })}
              type={"email"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
            {errors.email !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>

          <div className="">
            <label
              htmlFor="password"
              className="text-xs text-textColor/70 mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              {...register("password", {
                required: "THis field is required",
              })}
              type={"password"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
              // placeholder={"First Name"}
            />
            {errors.password !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div className="mt-7">
          <Button loading={loading} type="submit" text={"Login"} />
        </div>

        <p className="text-center text-xs text-textColor/70 mt-5">
          Do not have an account?{" "}
          <Link href={"/auth/register"}>
            <b className="text-primary underline"> Register</b>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
