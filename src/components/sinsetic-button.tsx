import clsx from "clsx";


/**
 * @note 맞춤형 방식 kind 라는 속성을 통해 여러 상황에 맞는 스타일 변경이 가능
 */

export default function Button({
    kind = "default",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    kind?: 'default' | 'important' | 'reference';
}) {
    return (
        <button
            className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
                'bg-gray-500 text-white hover:bg-gray-700': kind === "default",
                'bg-red-500 text-white hover:bg-red-700': kind === "important",
                'bg-blue-500 text-white hover:bg-blue-700': kind === "reference"
            })}
            {...props}
        ></button>
    )
}