import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateToken } from "./request-manager";

export async function middleware(request: NextRequest, response: NextResponse) {
  const token = request.cookies.get("code-a")?.value as string;
  //const serviceRes = { isValid: true };
  const serviceRes = await validateToken(token);

  const pathname = request.nextUrl.pathname;

  if (pathname.includes("/dashboard")) {
    if (!serviceRes?.isValid) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  const loginPath = pathname.startsWith("/auth");
  if (loginPath || pathname.includes("/auth")) {
    if (serviceRes?.isValid) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  //   if (serviceRes.isValid) {
  //     request.cookies.set("code-r", serviceRes.data.refreshToken);
  //     request.cookies.set("code-a", serviceRes.data.accessToken);
  //   }
}
export const config = {
  matcher: ["/auth", "/dashboard/:path*"],
};
