export interface UseWebSocketOptions {
  onOpen?: (event: Event) => void;
  onClose?: (event: CloseEvent) => void;
  onError?: (event: Event) => void;
  onMessage?: (event: MessageEvent) => void;
  reconnect?: boolean;
  reconnectAttempts?: number;
  reconnectInterval?: number;
}

export interface UseWebSocketResult {
  send: (data: string | ArrayBufferLike | Blob | ArrayBufferView) => void;
  close: () => void;
  lastMessage: MessageEvent | null;
  readyState: number;
  error: Event | null;
} 