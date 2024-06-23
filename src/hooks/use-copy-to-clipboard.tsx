"use client"

import React from "react";

export interface useCopyToClipboardProps {
    timeout?: number;
}


/**
 * @note 텍스트를 클립보드에 복사하고 그 복사 성공 여부를 추적하는 것이 목적이다. 
 */
export function useCopyToClipboard({
    timeout = 2000
}: useCopyToClipboardProps) {

    const [isCopied, setIsCopied] = React.useState<boolean>(false);

    const copyToClipboard = (value: string) => {
        if(typeof window === "undefined" || !navigator.clipboard?.writeText) {
            return;
        }

        if(!value) {
            return;
        }

        navigator.clipboard.writeText(value).then(() => {
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, timeout);
        })
    }

    return { isCopied, copyToClipboard }
}