export interface UseTabNotificationOptions {
  title?: string;
  icon?: string;
  body?: string;
  tag?: string;
  requireInteraction?: boolean;
  silent?: boolean;
  vibrate?: number[];
  timestamp?: number;
  renotify?: boolean;
  actions?: NotificationAction[];
}

export interface UseTabNotificationReturn {
  show: (options?: UseTabNotificationOptions) => Promise<void>;
  close: () => void;
  permission: NotificationPermission;
  requestPermission: () => Promise<NotificationPermission>;
} 