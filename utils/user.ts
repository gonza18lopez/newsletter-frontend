import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const getCurrentUser = async (access_token: string) => {
    const request = await fetch(`${process.env.API_URL}/api/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${access_token}`,
            accept: "application/json",
        },
    });

    if (request.status === 401) {
        throw new Error("Unauthorized");
    }

    const body = await request.json();

    return body;
};
