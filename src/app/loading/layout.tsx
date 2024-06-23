import { getTopCategories } from "@/data/category";
import { Metadata } from "next";
import { TabGroup } from "@/components/ui/tab-group";
import { ClickCounter } from "@/components/ui/click-counter";

export const metadata: Metadata = {
    title: "레벨업 Next.js 로딩 UI"
}

export default async function Layout({
    children
}: {
    children: React.ReactNode
}){
    const categories = getTopCategories();

    return (
        <div className="space-y-9">
            <div className="flex justify-between">
                <TabGroup
                    path="/loading"
                    items={[
                        {
                            text: '홈',
                        },
                        ...categories.map((x) => ({
                            text: x.name,
                            slug: x.slug
                        }))
                    ]}
                />
                <div className="self-start">
                    <ClickCounter />
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}