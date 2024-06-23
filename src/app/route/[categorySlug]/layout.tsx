import { ClickCounter } from "@/components/ui/click-counter";
import { TabGroup } from "@/components/ui/tab-group";
import { getTopCategories } from "@/data/category";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "레벨업 Next.js 동적라우팅"
}

export default async function Layout({
    children,
    params: { categorySlug }
}: {
    children: React.ReactNode,
    params: { categorySlug: string }
}) {
    const topCategories = getTopCategories();
    return (
        <div className="space-y-9">
            <div className="flex justify-between">
                <TabGroup
                    path="/route"
                    items={[
                        {
                          text: '홈',
                        },
                        ...topCategories.map((x) => ({
                          text: x.name,
                          slug: x.slug,
                        })),
                    ]}
                />
                <div className="self-start">
                    <ClickCounter/>
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}