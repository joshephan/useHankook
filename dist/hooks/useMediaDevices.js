/**
 * useMediaDevices
 *
 * 미디어 장치(카메라, 마이크 등)를 관리하는 커스텀 훅
 * 사용 가능한 미디어 장치 목록을 제공하고 장치 변경을 감지합니다.
 *
 * A custom hook for managing media devices (camera, microphone, etc.)
 * Provides a list of available media devices and detects device changes.
 */
import { useState, useEffect } from 'react';
function useMediaDevices() {
    const [state, setState] = useState({
        devices: [],
        error: null
    });
    useEffect(() => {
        let mounted = true;
        const updateDevices = async () => {
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                if (mounted) {
                    setState({
                        devices,
                        error: null
                    });
                }
            }
            catch (error) {
                if (mounted) {
                    setState(prev => ({
                        ...prev,
                        error: error
                    }));
                }
            }
        };
        const handleDeviceChange = () => {
            updateDevices();
        };
        navigator.mediaDevices.addEventListener('devicechange', handleDeviceChange);
        updateDevices();
        return () => {
            mounted = false;
            navigator.mediaDevices.removeEventListener('devicechange', handleDeviceChange);
        };
    }, []);
    return state;
}
export default useMediaDevices;
