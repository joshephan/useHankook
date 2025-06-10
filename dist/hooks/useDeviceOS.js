/**
 * useDeviceOS
 *
 * 사용자의 운영체제를 감지하는 커스텀 훅
 * iOS, Android, Windows, MacOS, Linux 등 주요 운영체제를 식별합니다.
 *
 * A custom hook for detecting user's operating system
 * Identifies major operating systems including iOS, Android, Windows, MacOS, and Linux.
 */
import { useState, useEffect } from 'react';
function useDeviceOS() {
    const [os, setOS] = useState('Unknown');
    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(userAgent)) {
            setOS('iOS');
        }
        else if (/android/.test(userAgent)) {
            setOS('Android');
        }
        else if (/windows/.test(userAgent)) {
            setOS('Windows');
        }
        else if (/macintosh|mac os x/.test(userAgent)) {
            setOS('MacOS');
        }
        else if (/linux/.test(userAgent)) {
            setOS('Linux');
        }
        else {
            setOS('Unknown');
        }
    }, []);
    return os;
}
export default useDeviceOS;
