export interface UseMediaDevicesOptions {
  video?: boolean | MediaTrackConstraints;
  audio?: boolean | MediaTrackConstraints;
}

export interface UseMediaDevicesReturn {
  stream: MediaStream | null;
  error: Error | null;
  start: () => Promise<void>;
  stop: () => void;
  devices: MediaDeviceInfo[];
} 