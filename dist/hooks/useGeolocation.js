/**
 * useGeolocation
 *
 * 사용자의 위치 정보를 가져오는 커스텀 훅
 * 위도, 경도, 고도, 속도 등 상세한 위치 정보를 제공합니다.
 *
 * A custom hook for retrieving user's geolocation
 * Provides detailed location information including latitude, longitude, altitude, and speed.
 */
import { useState, useEffect } from 'react';
function useGeolocation(options = {}) {
    const [state, setState] = useState({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: null,
        error: null,
    });
    useEffect(() => {
        if (!navigator.geolocation) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: new GeolocationPositionError(),
            }));
            return;
        }
        const onSuccess = (position) => {
            setState({
                loading: false,
                accuracy: position.coords.accuracy,
                altitude: position.coords.altitude,
                altitudeAccuracy: position.coords.altitudeAccuracy,
                heading: position.coords.heading,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                speed: position.coords.speed,
                timestamp: position.timestamp,
                error: null,
            });
        };
        const onError = (error) => {
            setState(prev => ({
                ...prev,
                loading: false,
                error,
            }));
        };
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
        const watchId = navigator.geolocation.watchPosition(onSuccess, onError, options);
        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, [JSON.stringify(options)]);
    return state;
}
export default useGeolocation;
