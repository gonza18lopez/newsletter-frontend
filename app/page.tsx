import NewsletterForm from "@/partials/NewsletterForm";

export default function Home() {
    return (
        <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md sm:text-center">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
                        Sign up for our newsletter
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                        Stay up to date with the roadmap progress, announcements
                        and exclusive discounts feel free to sign up with your
                        email.
                    </p>

                    <NewsletterForm />
                </div>
            </div>
        </section>
    );
}
