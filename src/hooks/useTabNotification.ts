/**
 * useTabNotification
 * 
 * 브라우저 탭 알림을 관리하는 커스텀 훅
 * 웹 알림 API를 사용하여 탭 알림을 표시하고 관리합니다.
 * 
 * A custom hook for managing browser tab notifications
 * Uses Web Notifications API to display and manage tab notifications.
 */
import { useState, useEffect } from 'react';

interface UseTabNotificationOptions {
  title?: string;
  icon?: string;
  body?: string;
  tag?: string;
  requireInteraction?: boolean;
}

function useTabNotification(options: UseTabNotificationOptions = {}) {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      throw new Error('Notifications are not supported');
    }

    const result = await Notification.requestPermission();
    setPermission(result);
    return result;
  };

  const show = async (options: UseTabNotificationOptions = {}) => {
    if (!('Notification' in window)) {
      throw new Error('Notifications are not supported');
    }

    if (Notification.permission !== 'granted') {
      const permission = await requestPermission();
      if (permission !== 'granted') {
        throw new Error('Notification permission denied');
      }
    }

    const notification = new Notification(options.title ?? 'Notification', {
      icon: options.icon,
      body: options.body,
      tag: options.tag,
      requireInteraction: options.requireInteraction
    });

    setNotification(notification);

    notification.onclose = () => {
      setNotification(null);
    };

    return notification;
  };

  const close = () => {
    if (notification) {
      notification.close();
      setNotification(null);
    }
  };

  return {
    permission,
    requestPermission,
    show,
    close,
    notification
  };
}

export default useTabNotification; 