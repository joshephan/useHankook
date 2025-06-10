interface MediaDevicesState {
    devices: MediaDeviceInfo[];
    error: Error | null;
}
declare function useMediaDevices(): MediaDevicesState;
export default useMediaDevices;
