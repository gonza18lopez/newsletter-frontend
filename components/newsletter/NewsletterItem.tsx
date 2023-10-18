"use client";

import axios from "@/utils/axios";
import {
    faPaperPlane,
    faSpinner,
    faTrash,
    faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import dayjs from "dayjs";
import DeleteModal from "../DeleteModal";
import { useNewsletters } from "@/hooks/newsletter";

export default function NewsletterItem({ id, name, recipients, sendAt, isSent }: any) {
    const { mutate: updateNewslettersTable } = useNewsletters();
    const [isSending, setIsSending] = useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const handleDelete = async () => {
        setIsDeleting(true);

        try {
            await axios.delete(`/api/newsletter/${id}`);

            notifications.show({
                id: "newsletter-delete",
                title: "Newsletter deleted",
                message: "The newsletter has been deleted.",
                icon: <FontAwesomeIcon icon={faTrash} />,
                color: "green",
                autoClose: 1500,
            });

            updateNewslettersTable();
        }
        catch (error) {
            console.error(error);

            notifications.show({
                id: "newsletter-delete-error",
                withCloseButton: true,
                autoClose: 1500,
                title: "Error",
                message: "Something went wrong. Please try again.",
                icon: <FontAwesomeIcon icon={faWarning} />,
                color: "red",
            });
        }
        finally {
            setIsDeleting(false);
            setShowDeleteModal(false);
        }
    }

    const send = async () => {
        setIsSending(true);

        try {
            const response = await axios.post(`/api/newsletter/${id}/send`);

            notifications.show({
                id: "newsletter-sent",
                title: "Newsletter sent",
                message: response.data.message,
                icon: <FontAwesomeIcon icon={faPaperPlane} />,
                color: "green",
                autoClose: 1500,
            });
        } catch (error) {
            console.log(error);

            notifications.show({
                id: "newsletter-sent-error",
                withCloseButton: true,
                autoClose: 1500,
                title: "Error",
                message: "Something went wrong. Please try again.",
                icon: <FontAwesomeIcon icon={faWarning} />,
                color: "red",
            })
        }
        finally {
            setIsSending(false);
        }
    };

    return (
        <tr className="border-b dark:border-gray-700 dark:hover:bg-gray-900 hover:bg-gray-100">
            <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                {name}
            </th>
            <td className="px-4 py-3">{recipients.length}</td>
            <td className="px-4 py-3">
                {isSent ? (
                    <span className="text-green-500">Sent</span>
                ) : (
                    <span>Pending</span>
                )}
            </td>
            <td className="px-4 py-3">
                <span>{dayjs(sendAt).format("DD/MM/YYYY HH:mm")}</span>
            </td>
            <td className="pr-4 py-3 flex gap-2 items-center justify-end">
                <button
                    className="inline-flex items-center justify-center gap-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs p-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                    type="button"
                    disabled={isSending}
                    onClick={send}
                >
                    <FontAwesomeIcon
                        icon={isSending ? faSpinner : faPaperPlane}
                        spin={isSending}
                        className="w-3 h-3"
                    />
                    <span>{isSending ? "Sending" : "Send"}</span>
                </button>

                <button
                    className="inline-flex items-center justify-center gap-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs p-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                    type="button"
                    onClick={() => setShowDeleteModal(true)}
                >
                    <FontAwesomeIcon icon={faTrash} className="w-3 h-3" />
                    <span>Delete</span>
                </button>
            </td>

            <DeleteModal
                show={showDeleteModal}
                loading={isDeleting}
                onCancel={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
            />
        </tr>
    );
}
