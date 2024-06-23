import { ExternalLink } from "@/components/ui/external-link";
import { SkeletonCard } from "@/components/ui/skeleton-card";
import { getCategory } from "@/data/category";

export default function Page({
  params,
}: {
  params: { categorySlug: string }
}) {
  const category = getCategory(params.categorySlug);
  return (
    <div className="prose-sm prose max-w-none">
      <h1 className="text-xl font-bold">동적 라우팅</h1>
      <ul>
        <li>
          모든 {category.name}
        </li>
      </ul>

      <div className="flex gap-2">
        {/* <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts">
          문서
        </ExternalLink> */}
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i}/>
        ))}
      </div>
    </div>
  );
}
