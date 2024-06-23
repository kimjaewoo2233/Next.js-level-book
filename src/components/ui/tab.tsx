"use client"

import { Item } from "./tab-nav-item";
import Link from "next/link";
import clsx from "clsx";
import { useParams, usePathname, useSelectedLayoutSegment } from "next/navigation";

export const Tab = ({
    path,
    parallelRoutesKey,
    item,
}: {
    path: string;
    parallelRoutesKey?: string;
    item: Item;
}) => {
    // const segment = useSelectedLayoutSegment();
    const pathname = usePathname();
    const segment = pathname.split("/")[2];
    const href = item.slug ? path + '/' + item.slug : path;
    const isActive = 
        (!item.slug && segment === null) ||
        segment === item.segment ||
        segment === item.slug;

    return (
        <Link
            href={href}
            className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
                'bg-gray-50 text-gray-400 hover:bg-gray-500 hover:text-white':
                !isActive,
                'bg-vercel-blue text-gray-800': isActive,
            })}
        >
      {item.text}
        </Link>
    )
}