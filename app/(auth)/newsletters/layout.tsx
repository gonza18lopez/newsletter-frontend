import "@/assets/stylesheets/app.css";
import Sidenav from "@/partials/Sidenav";
export default async function Layout({
    children,
    modal
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <>
            {children}
            {modal}
        </>
    );
}
