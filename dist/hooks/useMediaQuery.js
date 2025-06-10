/**
 * useMediaQuery
 *
 * CSS 미디어 쿼리를 React에서 사용할 수 있게 해주는 커스텀 훅
 * 미디어 쿼리 조건의 일치 여부를 실시간으로 감지합니다.
 *
 * A custom hook for using CSS media queries in React
 * Detects media query matches in real-time.
 */
import { useState, useEffect } from 'react';
function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);
        const handleChange = (event) => {
            setMatches(event.matches);
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [query]);
    return matches;
}
export default useMediaQuery;
