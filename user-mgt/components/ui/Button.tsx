"use client";

import React from "react";
import { ButtonType } from "@/types/components";
import Loader from "./Loader";
import { IoMdAdd } from "react-icons/io";

const Button = ({
  text,
  onClick,
  loading,
  disable,
  type,
  outline,
  icon,
}: ButtonType): JSX.Element => {
  if (outline)
    return (
      <button
        className=" rounded-md text-primary px-3 py-2 cursor-pointer border border-primary"
        onClick={onClick}
      >
        {text}
      </button>
    );

  return (
    <button
      type="submit"
      disabled={disable}
      onClick={onClick}
      className={`text-center cursor-pointer text-sm px-3 text-white py-2 ${
        disable ? "bg-primary/25" : "bg-primary  hover:bg-primary/60"
      }  ${type === "custom" ? "min-w-[50px]" : "w-full"} rounded-md `}
    >
      {loading ? (
        <div className="justify-center  flex items-center">
          <Loader />
        </div>
      ) : icon ? (
        <span className="flex space-x-2">
          <IoMdAdd className="text-xl" />
          <p>{text}</p>
        </span>
      ) : (
        <p>{text}</p>
      )}
    </button>
  );
};

export default Button;
