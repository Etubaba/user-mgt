"use client";

import { BASE_URL } from "@/constant";
import { useUserStore } from "@/store";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { updateUser } from "@/request-manager";
import Link from "next/link";
import Modal from "../ui/Modal";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { getChangedValues } from "@/helper/formatDto";

const UserDetails = () => {
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const user = useUserStore((state) => state.user);
  const handleUserProps = useUserStore((state) => state.authenticateUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const auth = async (data: any) => {
    setLoading(true);
    const formdata = {
      email: data["email"],
      nachname: data["nachname"],
      vorname: data["vorname"],
      gebracht_von_lvl1: data["gebracht_von"],
      supervisor: data["supervisor"],
      street: data["street"],
      location_city: data["city"],
      IBAN: data["iban"],
      super_commission_permitted: data["check"],
    };

    const resData = await updateUser(user?._id!, formdata);

    if (resData && !resData.error) {
      setErrorMsg("");
      handleUserProps(resData.user);
      setSuccessModal(true);
    }

    if (resData.error) {
      setErrorMsg(resData.message);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white my-16 border animate__fadeIn animate__animated rounded-md w-full md:w-auto p-7">
      <div className="flex justify-between items-center">
        {" "}
        <p className="text-left text-sm my-6 text-[#1e202a] font-semibold">
          User Details
        </p>
        <div className="w-[6rem]">
          <Button onClick={() => setEdit(!edit)} text="Edit" />
        </div>
      </div>

      {/* <p className="text-center text-sm text-[#7c7f8a] mb-5">
        Provide your details
      </p> */}

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
              disabled={!edit}
              defaultValue={user?.nachname}
              {...register("nachname")}
              type={"text"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
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
              disabled={!edit}
              defaultValue={user?.vorname}
              {...register("vorname")}
              type={"text"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
          </div>
          <div className="">
            <label htmlFor="email" className="text-xs text-textColor/70 mb-1.5">
              Email
            </label>
            <input
              id="email"
              disabled={!edit}
              defaultValue={user?.email}
              {...register("email")}
              type={"email"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
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
              disabled={!edit}
              defaultValue={user?.gebracht_von_lvl1}
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
              disabled={!edit}
              defaultValue={user?.supervisor}
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
              disabled={!edit}
              defaultValue={user?.street}
              {...register("street", {
                required: "This field is requid",
              })}
              type={"street"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
          </div>{" "}
          <div className="">
            <label htmlFor="city" className="text-xs text-textColor/70 mb-1.5">
              City
            </label>
            <input
              id="city"
              disabled={!edit}
              defaultValue={user?.location_city}
              {...register("city", {
                required: "This field is requid",
              })}
              type={"text"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
          </div>
          {!edit && (
            <div className="">
              <label
                htmlFor="lvl2"
                className="text-xs text-textColor/70 mb-1.5"
              >
                Level 2
              </label>
              <input
                id="lv2"
                disabled={true}
                defaultValue={user?.level2}
                type={"text"}
                className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
              />
            </div>
          )}
          {!edit && (
            <div className="">
              <label
                htmlFor="lvl3"
                className="text-xs text-textColor/70 mb-1.5"
              >
                Level 3
              </label>
              <input
                id="lvl3"
                disabled={true}
                defaultValue={user?.level3}
                type={"text"}
                className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
              />
            </div>
          )}
          <div className="">
            <label htmlFor="iban" className="text-xs text-textColor/70 mb-1.5">
              International Bank Account Number
            </label>
            <input
              id="iban"
              disabled={!edit}
              defaultValue={user?.IBAN}
              {...register("iban", {
                required: "This field is requid",
              })}
              type={"text"}
              className="border w-full p-1 form-control rounded-md focus:border-primary focus:outline-none "
            />
          </div>
        </div>

        <div className="flex justify-start">
          {!edit ? (
            <div className="flex space-x-2 items-center">
              <p className="text-xs text-textColor/70 ">
                Commission Permitted:{" "}
              </p>
              <p className="text-xs text-textColor/70">
                {user?.super_commission_permitted ? "Yes" : "No"}
              </p>
            </div>
          ) : (
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
              </div>
              <p className="text-xs text-textColor/70 ">Commission Permitted</p>
            </div>
          )}
        </div>

        {edit && (
          <div className="mt-7 flex  justify-center">
            <div className="w-[14rem]">
              <Button loading={loading} type="submit" text={"Update"} />
            </div>
          </div>
        )}
      </form>

      <Modal onClose={() => setSuccessModal(false)} open={successModal}>
        <div className=" w-[16rem] md:w-[24rem]  h-auto">
          <div className="flex flex-col space-y-3 justify-center items-center">
            <AiOutlineCheckCircle className="text-green-600 text-5xl" />
            <p className="text-lg text-title dark:text-textwhite font-semibold mt-2">
              Details Updated .
            </p>
            <p className="text-sm text-textcolor dark:text-textwhite text-center  mt-2">
              You have successfully updated your profile.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserDetails;
