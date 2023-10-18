import NewsletterForm from "@/partials/newsletter/NewsletterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create newsletter - Newsletter App",
};

export default function CreateNewsletter() {
    return (
        <div className="mx-auto max-w-screen-xl h-screen flex flex-col justify-center px-4 lg:px-12 py-4">
            <NewsletterForm />
        </div>
    );
}
