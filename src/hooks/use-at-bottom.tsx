"use client"

import React from "react"


/**
 * 
 * @note 사용자가 스크롤하여 페이지의 하단에 도달하는지 여부를 감지한느 것이다., 
 */
export function useAtBottom(offset = 0) {
    const [isAtBottom, setIsABottom] = React.useState(false);

    React.useEffect(() => {
        
        const handleScroll = () => {
            setIsABottom(
                window.innerHeight + window.scrollY >= document.body.offsetHeight - offset
            );
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [offset]);

    return isAtBottom;
}