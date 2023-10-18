"use client";

import { useNewsletters } from "@/hooks/newsletter";
import NewsletterItem from "./NewsletterItem";
import Skeleton from "./Skeleton";

export default function NewsletterTable() {
    const { newsletters, isLoading } = useNewsletters();

    if (!isLoading && !newsletters.length) {
        return (
            <div className="flex items-center justify-center py-6">
                <p className="text-gray-500">No newsletters found</p>
            </div>
        );
    }

    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-4 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                        Recipients
                    </th>
                    <th scope="col" className="px-4 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-4 py-3">
                        Send at
                    </th>
                    <th scope="col" className="px-4 py-3 text-right">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {isLoading && <Skeleton />}

                {newsletters?.map((newsletter: any) => (
                    <NewsletterItem
                        key={newsletter.id}
                        id={newsletter.id}
                        name={newsletter.name}
                        sendAt={newsletter.sendAt}
                        recipients={newsletter.recipients}
                    />
                ))}
            </tbody>
        </table>
    );
}
