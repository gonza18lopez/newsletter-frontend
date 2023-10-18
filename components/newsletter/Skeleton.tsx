"use client";

import { Skeleton as Placeholder } from "@mantine/core";

export default function Skeleton() {
    return (
        <tr className="border-b dark:border-gray-700 dark:hover:bg-gray-900 hover:bg-gray-100">
            <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                <Placeholder width={80} height={20} radius="md" />
            </th>
            <td className="px-4 py-3">
                <Placeholder width={40} height={20} radius="md" />
            </td>
            <td className="px-4 py-3">
                <Placeholder width={30} height={20} radius="md" />
            </td>
            <td className="pr-4 py-3 flex gap-2 items-center justify-end">
                <Placeholder height={32} width={65} radius="md" />

                <Placeholder height={32} width={65} radius="md" />

                <Placeholder height={32} width={65} radius="md" />
            </td>
        </tr>
    );
}
