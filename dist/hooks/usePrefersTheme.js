/**
 * usePrefersTheme
 *
 * 시스템 테마 설정을 감지하는 커스텀 훅
 * 사용자의 시스템 다크모드/라이트모드 설정을 실시간으로 추적합니다.
 *
 * A custom hook for detecting system theme preference
 * Tracks user's system dark/light mode preference in real-time.
 */
import { useState, useEffect } from 'react';
function usePrefersTheme() {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined')
            return 'light';
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => {
            setTheme(event.matches ? 'dark' : 'light');
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);
    return theme;
}
export default usePrefersTheme;
