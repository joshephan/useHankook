/**
 * useFullscreen
 *
 * 요소의 전체화면 모드를 제어하는 커스텀 훅
 * 전체화면 진입/종료 및 상태 관리를 지원하며, 크로스 브라우저 호환성을 제공합니다.
 *
 * A custom hook for controlling fullscreen mode of an element
 * Supports entering/exiting fullscreen and state management with cross-browser compatibility.
 */
import { useState, useEffect, useCallback } from 'react';
function useFullscreen(elementRef, options = {}) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const { onEnter, onExit } = options;
    const enterFullscreen = useCallback(async () => {
        if (!elementRef.current)
            return;
        try {
            if (elementRef.current.requestFullscreen) {
                await elementRef.current.requestFullscreen();
            }
            else if (elementRef.current.webkitRequestFullscreen) {
                await elementRef.current.webkitRequestFullscreen();
            }
            else if (elementRef.current.mozRequestFullScreen) {
                await elementRef.current.mozRequestFullScreen();
            }
            else if (elementRef.current.msRequestFullscreen) {
                await elementRef.current.msRequestFullscreen();
            }
            setIsFullscreen(true);
            onEnter?.();
        }
        catch (error) {
            console.error('Error attempting to enable fullscreen:', error);
        }
    }, [elementRef, onEnter]);
    const exitFullscreen = useCallback(() => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        setIsFullscreen(false);
        onExit?.();
    }, [onExit]);
    const toggleFullscreen = useCallback(() => {
        isFullscreen ? exitFullscreen() : enterFullscreen();
    }, [isFullscreen, enterFullscreen, exitFullscreen]);
    useEffect(() => {
        const handleFullscreenChange = () => {
            const isFullscreenElement = !!(document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement);
            setIsFullscreen(isFullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
        };
    }, []);
    return [isFullscreen, toggleFullscreen];
}
export default useFullscreen;
