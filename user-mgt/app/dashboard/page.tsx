import ProfileHeader from "@/components/dashboard/ProfileHeader";
import UserDetails from "@/components/dashboard/UserDetails";
import React from "react";

const page = () => {
  return (
    <div className=" py-6 md:py-14 md:px-20 px-4">
      <ProfileHeader />
      <UserDetails />
    </div>
  );
};

export default page;
