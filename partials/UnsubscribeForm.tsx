"use client";

import axios from "@/utils/axios";
import { faTrash, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const getNewsletters = async (token: string) => {
    try {
        const response = await axios(`/api/recipient/${token}`);
        return response.data;
    } catch (error) {
        console.error(error);

        return undefined;
    }
};

const NewsletterItem = ({ newsletter, selected, onChange }: any) => {
    return (
        <div className="flex flex-col gap-2 p-4 sm:gap-6 sm:flex-row sm:items-center rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {newsletter.name}
            </h3>

            <input
                type="checkbox"
                defaultChecked={selected}
                onChange={() => onChange(!selected)}
                className="ml-auto w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            />
        </div>
    );
};

export default function UnsubscribeForm({ token }: any) {
    const router = useRouter();
    const [newsletters, setNewsletters] = useState<any>();
    const [selectedNewsletters, setSelectedNewsletters] = useState<any>([]);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
        getNewsletters(token).then((newsletters) => {
            setNewsletters(newsletters);
            setSelectedNewsletters(
                newsletters.map((newsletter: any) => newsletter.id)
            );
        });
    }, [token]);

    const deleteRecipient = async () => {
        setIsDeleting(true);

        try {
            await axios.delete(`/api/recipient/${token}`);

            notifications.show({
                id: "unsubscribe",
                title: "Unsubscribed",
                message: "You have successfully unsubscribed.",
                icon: <FontAwesomeIcon icon={faTrash} />,
                color: "green",
                autoClose: 1500,
                onClose: () => {
                    router.push("/");
                },
            });
        } catch (error) {
            console.error(error);

            notifications.show({
                id: "unsubscribe-error",
                withCloseButton: true,
                autoClose: 1500,
                title: "Error",
                message: "Something went wrong. Please try again.",
                icon: <FontAwesomeIcon icon={faWarning} />,
                color: "red",
            });
        } finally {
            setIsDeleting(false);
        }
    };

    const unsubscribe = async () => {
        setIsDeleting(true);

        try {
            await axios.patch(`/api/recipient/${token}`, {
                newsletters: selectedNewsletters,
            });

            notifications.show({
                id: "unsubscribe",
                title: "Unsubscribed",
                message: "You have successfully unsubscribed.",
                icon: <FontAwesomeIcon icon={faTrash} />,
                color: "green",
                autoClose: 1500,
                onClose: () => {
                    router.push("/");
                },
            })
        }
        catch (error) {
            console.error(error);

            notifications.show({
                id: "unsubscribe-error",
                withCloseButton: true,
                autoClose: 1500,
                title: "Error",
                message: "Something went wrong. Please try again.",
                icon: <FontAwesomeIcon icon={faWarning} />,
                color: "red",
            })
        }
        finally {
            setIsDeleting(false);
        }
    }

    if (!newsletters) {
        return null;
    }

    return (
        <section className="bg-white dark:bg-gray-900 antialiased min-h-screen">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                        Unsubscribe
                    </h2>
                </div>

                <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                    <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700 space-y-4 py-4">
                        {newsletters?.length === 0 && (
                            <p className="text-gray-500 dark:text-gray-400">
                                No newsletters found
                            </p>
                        )}

                        {newsletters?.map((newsletter: any) => (
                            <NewsletterItem
                                key={newsletter.id}
                                newsletter={newsletter}
                                selected={selectedNewsletters?.includes(
                                    newsletter.id
                                )}
                                onChange={(value: boolean) =>
                                    setSelectedNewsletters(
                                        value
                                            ? [
                                                  ...selectedNewsletters,
                                                  newsletter.id,
                                              ]
                                            : selectedNewsletters.filter(
                                                  (id: any) =>
                                                      id !== newsletter.id
                                              )
                                    )
                                }
                            />
                        ))}
                    </div>

                    {newsletters?.length && <div className="mt-4 flex justify-end gap-4">
                        <button
                            className="flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 disabled:opacity-75"
                            onClick={deleteRecipient}
                            disabled={isDeleting}
                        >
                            Unsubscribe from all
                        </button>

                        <button
                            className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 disabled:opacity-75"
                            disabled={!selectedNewsletters.length || isDeleting}
                            onClick={unsubscribe}
                        >
                            Unsubscribe from {selectedNewsletters.length}
                        </button>
                    </div>}
                </div>
            </div>
        </section>
    );
}
