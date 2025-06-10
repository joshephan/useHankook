interface GeolocationState {
    loading: boolean;
    accuracy: number | null;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    timestamp: number | null;
    error: GeolocationPositionError | null;
}
interface GeolocationOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
}
declare function useGeolocation(options?: GeolocationOptions): GeolocationState;
export default useGeolocation;
