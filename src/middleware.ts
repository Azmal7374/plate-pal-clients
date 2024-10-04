/* eslint-disable import/order */
/* eslint-disable prettier/prettier */

import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";


export async function middleware(request: NextRequest) {
  const user = await getCurrentUser();

// Protected Paths Definition:
  const protectedPaths = [
    "/dashboard",
    "/recipe",
    "/recipe/:page*",
    "/dashboard/:page*",
  ];
  const redirectPaths = ["/login", "/register"];

// Admin and User Path Definitions:
  const adminProtectedPaths = [
    "/dashboard/manage-admins",
    "/dashboard/manage-users",
    "/dashboard/manage-recipies",
  ];

  const userProtectedPaths = [
    "/dashboard/create-recipe",
    "/recipe",
    "/recipe/:page*",
  ];


//  Admin and User Role Checking:
  const isAdminPath = adminProtectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  const isUserPath = userProtectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isAdminPath) {
    if (!user || user.role !== "admin") {
      const homeUrl = new URL("/login", request.url);

      return NextResponse.redirect(homeUrl);
    }
  }

  if (isUserPath) {
    if (!user || user.role !== "user") {
      const homeUrl = new URL("/login", request.url);

      return NextResponse.redirect(homeUrl);
    }
  }

//   General Authentication Check for Protected Paths:
  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  const isRedirectPath = redirectPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath && !user) {
    const loginUrl = new URL("/login", request.url);

    return NextResponse.redirect(loginUrl);
  }

  if (isRedirectPath && user) {
    const homeUrl = new URL("/", request.url);

    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

// Middleware Configuration (Matcher):
export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:page*",
    "/recipe",
    "/recipe/:page*",
    "/login",
    "/register",
  ],
};