import LoginForm from "@/components/Auth/LoginForm";
import { BASE_URL } from "@/constant";
import React from "react";

const page = () => {
  return (
    <div className="bg-[url('/slider3.jpg')] px-4 bg-cover  bg-left-top flex justify-center items-center w-full h-screen">
      <LoginForm />
    </div>
  );
};

export default page;
