"use server";

import { cookies } from "next/headers";

export const getCookie = () => {
  const store = cookies();
  return store.get("code-r")?.value;
};
