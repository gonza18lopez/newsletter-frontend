"use client";

import DragAndDrop from "@/components/DragAndDrop";
import { NewsletterFormData } from "@/types/newsletter";
import { MultiSelect } from "@mantine/core";
import { useForm, Controller } from "react-hook-form";
import { notifications } from "@mantine/notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faWarning } from "@fortawesome/free-solid-svg-icons";
import axios from "@/utils/axios";
import { useNewsletters } from "@/hooks/newsletter";
import { useRouter } from "next/navigation";
import { DateTimePicker } from "@mantine/dates";

type NewsletterFormProps = {
    defaultValues?: NewsletterFormData;
    editing?: boolean;
};

export default function NewsletterForm({
    defaultValues,
    editing = false,
}: NewsletterFormProps) {
    const router = useRouter();
    const { mutate: updateNewslettersTable } = useNewsletters();
    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<NewsletterFormData>({
        defaultValues,
    });

    const submit = async (data: NewsletterFormData) => {
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("recipients", JSON.stringify(data.recipients));
        formData.append("body", data.body);
        formData.append("sendAt", data.sendAt);
        formData.append("attachment", data.attachment);

        try {
            const request = await axios.post(
                "/api/newsletter/create",
                formData
            );

            updateNewslettersTable();
            router.back();
        } catch (error) {
            console.error(error);

            notifications.show({
                id: "newsletter-form-error",
                withCloseButton: true,
                autoClose: 1500,
                title: "Error",
                message: "Something went wrong. Please try again.",
                icon: <FontAwesomeIcon icon={faWarning} />,
                color: "red",
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(submit)}
            autoComplete="off"
            encType="multipart/form-data"
        >
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type newsletter name"
                        {...register("name", {
                            required: "This field is required.",
                            min: 4,
                            max: 32,
                        })}
                    />
                </div>
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Send at
                    </label>
                    <Controller
                        control={control}
                        name="sendAt"
                        render={({ field: { onChange, value } }) => (
                            <DateTimePicker
                                classNames={{
                                    input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                                }}
                                placeholder="Pick date"
                                onChange={onChange}
                                defaultValue={value ? new Date(value) : null}
                            />
                        )}
                    />
                </div>
                <div className="sm:col-span-2">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Emails
                    </label>
                    <Controller
                        control={control}
                        name="recipients"
                        render={({ field }) => (
                            <MultiSelect
                                data={["a@a.com", "b@b.com"]}
                                classNames={{
                                    input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                                }}
                                searchable
                                {...field}
                            />
                        )}
                    />
                </div>
                <div className="sm:col-span-2">
                    <label
                        htmlFor="body"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Description
                    </label>
                    <textarea
                        id="body"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write newsletter content here"
                        {...register("body", {
                            required: "This field is required.",
                            min: 4,
                        })}
                    ></textarea>
                </div>
                <div className="sm:col-span-2">
                    <label
                        htmlFor="body"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Attachment
                    </label>
                    <Controller
                        name="attachment"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <DragAndDrop onChange={onChange} />
                        )}
                    />
                </div>
            </div>
            <button
                type="submit"
                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                disabled={isSubmitting}
            >
                <svg
                    className="mr-1 -ml-1 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                    ></path>
                </svg>

                {!isSubmitting ? (
                    editing ? (
                        "Save newsletter"
                    ) : (
                        "Add newsletter"
                    )
                ) : (
                    <FontAwesomeIcon icon={faSpinner} spin />
                )}
            </button>
        </form>
    );
}
