"use client";
import { useUserStore } from "@/store";
import React from "react";

const ProfileHeader = () => {
  const user = useUserStore((state) => state.user);

  console.log(user);

  const copyToClipboard = async () => {
    navigator.clipboard.writeText(user?._id!);
  };

  return (
    <div className="w-full justify-between items-center flex">
      <p className="text-[#1F2937] font-semibold md:text-xl text-base">
        {" "}
        Profile
      </p>

      <p className="text-text text-sm">
        User ID:{" "}
        <b onClick={copyToClipboard} className="underline cursor-pointer">
          {user?._id}
        </b>
      </p>
    </div>
  );
};

export default ProfileHeader;
