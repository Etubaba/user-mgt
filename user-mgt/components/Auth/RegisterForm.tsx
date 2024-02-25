"use client";

import { BASE_URL } from "@/constant";
import { useUserStore } from "@/store";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { register as signup } from "@/request-manager";
import Link from "next/link";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

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
      nachname: data["nachname"],
      vorname: data["vorname"],
      gebracht_von_lvl1: data["gebracht_von"],
      supervisor: data["supervisor"],
      street: data["street"],
      location_city: data["city"],
      IBAN: data["iban"],
      super_commission_permitted: data["check"],
    };

    const resData = await signup(formdata);

    if (resData && !resData.error) {
      setErrorMsg("");
      router.push("/auth/login");
    }

    if (resData.error) {
      setErrorMsg(resData.message);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white my-16 border animate__fadeIn animate__animated rounded-md w-full md:w-auto p-7">
      <p className="text-center text-lg text-[#1e202a] font-semibold">
        Create An Account
      </p>
      <p className="text-center text-sm text-[#7c7f8a] mb-5">
        Provide your details
      </p>

      {errorMsg !== "" && (
        <div className="w-full flex justify-center ">
          <div className=" px-6 rounded-lg py-1.5 border border-red-400 bg-red-200">
            <p className="text-sm  text-red-600 text-center">{errorMsg}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(auth)}>
        <div className=" grid gap-2 grid-cols-1 md:grid-cols-2 w-full mb-4   ">
          <div className="">
            <label
              htmlFor="nachname"
              className="text-xs text-textColor/70 mb-1.5"
            >
              Nachname
            </label>
            <input
              id="nachname"
              {...register("nachname", { required: "This field is requid" })}
              type={"text"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
            {errors.nachname !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>
          <div className="">
            <label
              htmlFor="vorname"
              className="text-xs text-textColor/70 mb-1.5"
            >
              Vorname
            </label>
            <input
              id="vorname"
              {...register("vorname", { required: "This field is requid" })}
              type={"text"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
            {errors.vorname !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>
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
          <div className="">
            <label
              htmlFor="gebracht_von"
              className="text-xs text-textColor/70 mb-1.5"
            >
              Gebracht Von (Level 1)
            </label>

            <input
              id="gebracht_von"
              {...register("gebracht_von")}
              type={"text"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
          </div>
          <div className="">
            <label
              htmlFor="supervisor"
              className="text-xs text-textColor/70 mb-1.5"
            >
              Supervisor
            </label>
            <input
              id="supervisor"
              {...register("supervisor")}
              type={"text"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
          </div>
          <div className="">
            <label
              htmlFor="street"
              className="text-xs text-textColor/70 mb-1.5"
            >
              Street
            </label>
            <input
              id="street"
              {...register("street", {
                required: "This field is requid",
              })}
              type={"street"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
            {errors.street !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>{" "}
          <div className="">
            <label htmlFor="city" className="text-xs text-textColor/70 mb-1.5">
              City
            </label>
            <input
              id="city"
              {...register("city", {
                required: "This field is requid",
              })}
              type={"text"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
            {errors.city !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>
          <div className="">
            <label htmlFor="iban" className="text-xs text-textColor/70 mb-1.5">
              International Bank Account Number
            </label>
            <input
              id="iban"
              {...register("iban", {
                required: "This field is requid",
              })}
              type={"text"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
            {errors.iban !== undefined && (
              <p className="text-red-600 text-xs py-2">Enter valid IBAN</p>
            )}
          </div>
        </div>

        <div className="flex justify-start">
          <div className="flex space-x-1 items-center">
            <div>
              <input
                id="check"
                {...register("check", {
                  required: "This field is requid",
                })}
                type={"checkbox"}
                className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
              />
              {errors.iban !== undefined && (
                <p className="text-red-600 text-xs py-2">Required *</p>
              )}
            </div>
            <p className="text-xs text-textColor/70 ">Commission Permitted</p>
          </div>
        </div>

        <div className="mt-7 flex  justify-center">
          <div className="w-[14rem]">
            <Button loading={loading} type="submit" text={"Register"} />
          </div>
        </div>

        <p className="text-center text-xs text-textColor/70 mt-5">
          Do you have an account?{" "}
          <Link href={"/auth/login"}>
            <b className="text-primary underline"> Login</b>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
