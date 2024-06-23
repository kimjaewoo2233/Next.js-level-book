

export type Item = {
    name: string;
    slug: string;
};

export const menus: { name: string; items: Item[] }[] = [
    {
        name: "Next.js를 위한 리액트 개요",
        items: [
            {name: "바닐라 자바스크립트", slug: "html/vanilla.html"},
            {name: "리액트 변환", slug: "html/react.html"},
        ]
    }
]