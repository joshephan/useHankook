/**
 * useDarkMode
 *
 * 다크 모드를 관리하는 커스텀 훅
 * 시스템 설정과 사용자 선호도를 기반으로 테마를 전환하고 저장합니다.
 *
 * A custom hook for managing dark mode
 * Switches and persists theme based on system settings and user preferences.
 */
import { useState, useEffect } from 'react';
function useDarkMode() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return savedTheme || (prefersDark ? 'dark' : 'light');
        }
        return 'light';
    });
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    return [theme, toggleTheme];
}
export default useDarkMode;
