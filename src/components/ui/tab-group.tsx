"use client"

import { Tab } from "./tab";
import { Item } from "./tab-nav-item";


export const TabGroup = ({
    path,
    parallelRoutesKey,
    items,
}: {
    path: string;
    parallelRoutesKey?: string;
    items: Item[];
}) => {
    console.log(items);
    return (
        <div className="flex flex-wrap items-center gap-2">
            {items.map((item) => (
                <Tab
                    key={path + item.slug}
                    item={item}
                    path={path}
                    parallelRoutesKey={parallelRoutesKey}
                />
            ))}
        </div>
    )
}