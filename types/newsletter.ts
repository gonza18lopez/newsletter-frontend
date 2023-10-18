export type RecipientForm = {
    email: string;
}

export type NewsletterFormData = {
    name: string;
    body: string;
    sendAt: string;
    recipients: string[];
    attachment: File;
}