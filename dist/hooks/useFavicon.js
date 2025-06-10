/**
 * useFavicon
 *
 * 웹사이트의 파비콘을 동적으로 변경하는 커스텀 훅
 * 파비콘의 URL, 타입, rel 속성을 설정할 수 있습니다.
 *
 * A custom hook for dynamically changing website favicon
 * Allows setting favicon URL, type, and rel attributes.
 */
import { useEffect } from 'react';
function useFavicon(href, options = {}) {
    const { rel = 'icon', type = 'image/x-icon' } = options;
    useEffect(() => {
        if (typeof document === 'undefined')
            return;
        const links = document.querySelectorAll("link[rel*='icon']");
        links.forEach(link => link.remove());
        const link = document.createElement('link');
        link.rel = rel;
        link.type = type;
        link.href = href;
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, [href, rel, type]);
}
export default useFavicon;
