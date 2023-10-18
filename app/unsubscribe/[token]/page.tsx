import { Metadata } from "next";

import UnsubscribeForm from "@/partials/UnsubscribeForm";

export const metadata: Metadata = {
    title: "Unsubscribe - Newsletter App",
};

export default async function Unsubscribe({
    params: { token },
}: {
    params: { token: string };
}) {
    return <UnsubscribeForm token={token} />;
}
