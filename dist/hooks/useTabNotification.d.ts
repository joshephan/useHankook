interface UseTabNotificationOptions {
    title?: string;
    icon?: string;
    body?: string;
    tag?: string;
    requireInteraction?: boolean;
}
declare function useTabNotification(options?: UseTabNotificationOptions): {
    permission: NotificationPermission;
    requestPermission: () => Promise<NotificationPermission>;
    show: (options?: UseTabNotificationOptions) => Promise<Notification>;
    close: () => void;
    notification: Notification | null;
};
export default useTabNotification;
