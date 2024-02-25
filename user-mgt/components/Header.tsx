"use client";
import { AiOutlineDown, AiOutlineLogin } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import { useUserStore } from "@/store";
import Link from "next/link";
import { User } from "@/types";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [logout, setLogout] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();

  const user = useUserStore((state) => state.user) as User | null;
  const logUserOut = useUserStore((state) => state.authenticateUser);

  const date = new Date();
  const time = date.getHours();
  const greetings =
    time < 12
      ? "Good Morning"
      : time >= 12 && time < 16
      ? "Good Afternoon"
      : "Good Evening";

  const handleLogout = () => {
    localStorage.removeItem("_user");
    router.push("/auth/login");
    logUserOut(null);
  };

  if (currentPath === "/auth/login" || currentPath === "/auth/register")
    return null;
  return (
    <div className=" px-8 py-4 z-50 hidden font-sans  lg:flex shadow-sm  bg-white sticky top-0 justify-between items-center">
      <Link href={"/"}>
        <h2 className="text-title logo  font-semibold">
          <b className="text-primary">𝕿𝖗𝖊𝖓𝖉𝖘</b>
        </h2>
      </Link>

      {currentPath.includes("/dashboard") ? (
        <div className="flex space-x-3 items-center">
          {/* <DarkToggle /> */}
          <div className="flex item-center">
            <p className="text-sm mr-1 text-textcolor ">{greetings},</p>
            <p className="text-sm mr-1 text-textcolor ">{user?.vorname}</p>
          </div>

          <AiOutlineDown
            className="text-sm text-textcolor cursor-pointer"
            onClick={() => setLogout(!logout)}
          />
          {logout && (
            <div className="absolute right-2 mt-20 ">
              <button
                onClick={handleLogout}
                className="flex hover:bg-primary/60 flex-row items-center bg-primary text-white px-2 py-1 space-x-1 text-sm rounded-md"
              >
                <AiOutlineLogin />

                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-row items-center space-x-2">
          <Link href={"/auth/register"}>
            <button className="flex hover:bg-slate-100 flex-row items-center bg-white border border-gray-400 px-2 py-1 space-x-1 text-sm rounded-md">
              <BsPerson />

              <span>Register</span>
            </button>
          </Link>
          <Link href={"/auth/login"}>
            <button className="flex hover:bg-primary/50 flex-row items-center bg-primary text-white px-2 py-1 space-x-1 text-sm rounded-md">
              <AiOutlineLogin />

              <span>Login</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
