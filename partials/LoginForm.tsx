"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

import axios from "@/utils/axios";
import { LoginForm } from "@/types/auth";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function LoginForm() {
    const router = useRouter();
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<LoginForm>();

    const login = async (data: LoginForm) => {
        try {
            const {
                data: { token },
            } = await axios.post("/api/auth/login", data);

            if (!token) {
                throw new Error("Credentials are not valid");
            }

            Cookies.set("access_token", token);

            setIsSubmitSuccessful(true);

            router.push("/dashboard");
        } catch (error) {
            alert("Credentials are not valid");

            return false;
        }
    };

    return (
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(login)}>
            <div>
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
                    })}
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    {...register("password", {
                        required: true,
                    })}
                />
            </div>
            <div className="flex items-center justify-between">
                <Link
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 ml-auto"
                >
                    Forgot password?
                </Link>
            </div>
            <button
                type="submit"
                className={`w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                    isSubmitSuccessful
                        ? "bg-green-600 hover:bg-green-700 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        : "bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                }`}
                disabled={isSubmitting || isSubmitSuccessful}
            >
                {isSubmitting ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                ) : isSubmitSuccessful ? (
                    <FontAwesomeIcon icon={faCheck} />
                ) : (
                    "Sign In"
                )}
            </button>
        </form>
    );
}
