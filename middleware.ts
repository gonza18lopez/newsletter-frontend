import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getCurrentUser } from "./utils/user";

const onlyAuthenticatedRoutes = ["/dashboard", "/newsletters", "/users"];
const onlyGuestRoutes = ["/login", "/password-recovery"];

export async function middleware(request: NextRequest) {
    // Auth routes
    if (onlyAuthenticatedRoutes.includes(request.nextUrl.pathname)) {
        let token = request.cookies.get("access_token");

        if (!token) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        // get user data
        try {
            await getCurrentUser(token.value);

            return NextResponse.next();
        }
        catch (error) {
            console.log(error);

            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // Guest routes
    if (onlyGuestRoutes.includes(request.nextUrl.pathname)) {
        const token = request.cookies.get("access_token");

        if (!token?.value) {
            return NextResponse.next();
        }

        try {
            await getCurrentUser(token.value);

            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
        catch (error) {
            console.log(error);

            return NextResponse.next();
        }
    }
}
