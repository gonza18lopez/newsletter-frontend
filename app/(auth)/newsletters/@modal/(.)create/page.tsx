import { Metadata } from "next";

import Modal from "@/components/Modal";
import NewsletterForm from "@/partials/newsletter/NewsletterForm";

export const metadata: Metadata = {
    title: "Create newsletter - Newsletter App",
};

export default function CreateNewsletterPage() {
    return (
        <Modal title="Create newsletter">
            <NewsletterForm />
        </Modal>
    );
}
