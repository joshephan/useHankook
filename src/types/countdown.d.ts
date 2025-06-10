export interface UseCountdownOptions {
  interval?: number;
  onEnd?: () => void;
}

export interface UseCountdownReturn {
  count: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
  isRunning: boolean;
} 