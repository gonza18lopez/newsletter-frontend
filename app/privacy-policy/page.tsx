import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <section className="bg-white min-h-screen flex items-center dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Frequently asked questions
                </h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg
                                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Information We Collect
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                When you use the Application, we may collect the
                                following information:
                            </p>
                            <ul className="list-decimal list-inside text-gray-500 dark:text-gray-400 mt-4">
                                <li>
                                    <strong>Registration Information:</strong>
                                    <p className="pl-[19px]">
                                        When you register with the Application,
                                        we may ask you to provide your name,
                                        email address, and other contact
                                        information.
                                    </p>
                                </li>
                                <li>
                                    <strong>Content:</strong>
                                    <p className="pl-[19px]">
                                        The Application may allow you to create,
                                        edit, and share content such as
                                        newsletters, articles, or comments.
                                    </p>
                                </li>
                                <li>
                                    <strong>Usage Information:</strong>
                                    <p className="pl-[19px]">
                                        We collect information about how you use
                                        the Application, including your
                                        interactions, activity, and preferences.
                                    </p>
                                </li>
                                <li>
                                    <strong>Browsing Data:</strong>
                                    <p className="pl-[19px]">
                                        We may collect browsing data, such as IP
                                        addresses and cookies, to enhance the
                                        functionality and security of the
                                        Application.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg
                                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                How We Use Your Information
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We use the collected information for the
                                following purposes:
                            </p>
                            <ul className="list-decimal list-inside text-gray-500 dark:text-gray-400 mt-4">
                                <li>
                                    <strong>Sending Newsletters:</strong>
                                    <p className="pl-[19px]">
                                        We use your email address to send you
                                        newsletters and other communications
                                        related to the Application.
                                    </p>
                                </li>
                                <li>
                                    <strong>Improving the Application:</strong>
                                    <p className="pl-[19px]">
                                        We use usage information to enhance the
                                        functionality and user experience.
                                    </p>
                                </li>
                                <li>
                                    <strong>Security:</strong>
                                    <p className="pl-[19px]">
                                        Browsing data is used to protect the
                                        security of the Application and prevent
                                        fraudulent activities.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg
                                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Sharing Your Information
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We will not share your personal information with
                                third parties without your consent, except under
                                the following circumstances:
                            </p>
                            <ul className="list-decimal list-inside text-gray-500 dark:text-gray-400 mt-4">
                                <li>
                                    <strong>Service Providers:</strong>
                                    <p className="pl-[19px]">
                                        We may share information with service
                                        providers who assist us in operating and
                                        improving the Application.
                                    </p>
                                </li>
                                <li>
                                    <strong>Legal Requirements:</strong>
                                    <p className="pl-[19px]">
                                        We may disclose information if required
                                        by law or if we believe it is necessary
                                        to protect our legal rights.
                                    </p>
                                </li>
                                <li>
                                    <strong>Security:</strong>
                                    <p className="pl-[19px]">
                                        Browsing data is used to protect the
                                        security of the Application and prevent
                                        fraudulent activities.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg
                                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Information Security
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We take measures to protect your information and
                                ensure its security, but we cannot guarantee
                                absolute security. You also have a role in data
                                security by using strong passwords and
                                maintaining the confidentiality of your login
                                information.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg
                                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Your Rights and Choices
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                You have certain rights regarding your personal
                                data, including access, rectification, and
                                deletion. You can exercise these rights by
                                contacting us at{" "}
                                <Link
                                    href="mailto:admin@newsletterchallenge.example"
                                    className="text-primary-600 hover:underline"
                                >
                                    admin@newsletterchallenge.example
                                </Link>
                                .
                            </p>
                        </div>

                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg
                                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Changes to this Policy
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We may update this Privacy Policy from time to
                                time to reflect changes in our practices. We
                                will notify you of significant changes to the
                                Privacy Policy through the Application or other
                                means.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg
                                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Contact
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                If you have any questions or concerns about our
                                Privacy Policy, please contact us at{" "}
                                <Link
                                    href="mailto:admin@newsletterchallenge.example"
                                    className="text-primary-600 hover:underline"
                                >
                                    admin@newsletterchallenge.example
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
