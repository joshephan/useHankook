import { useState, useEffect, useCallback, useRef } from 'react';
function useWebSocket(url, options = {}) {
    const { onOpen, onClose, onError, onMessage, reconnect = true, reconnectAttempts = 5, reconnectInterval = 3000 } = options;
    const [lastMessage, setLastMessage] = useState(null);
    const [readyState, setReadyState] = useState(WebSocket.CONNECTING);
    const [error, setError] = useState(null);
    const ws = useRef(null);
    const reconnectCount = useRef(0);
    const reconnectTimeout = useRef(null);
    const connect = useCallback(() => {
        ws.current = new WebSocket(url);
        ws.current.onopen = (event) => {
            setReadyState(WebSocket.OPEN);
            setError(null);
            reconnectCount.current = 0;
            onOpen?.(event);
        };
        ws.current.onclose = (event) => {
            setReadyState(WebSocket.CLOSED);
            onClose?.(event);
            if (reconnect && reconnectCount.current < reconnectAttempts) {
                reconnectTimeout.current = setTimeout(() => {
                    reconnectCount.current += 1;
                    connect();
                }, reconnectInterval);
            }
        };
        ws.current.onerror = (event) => {
            setError(event);
            onError?.(event);
        };
        ws.current.onmessage = (event) => {
            setLastMessage(event);
            onMessage?.(event);
        };
    }, [url, onOpen, onClose, onError, onMessage, reconnect, reconnectAttempts, reconnectInterval]);
    useEffect(() => {
        connect();
        return () => {
            if (reconnectTimeout.current) {
                clearTimeout(reconnectTimeout.current);
            }
            if (ws.current) {
                ws.current.close();
            }
        };
    }, [connect]);
    const send = useCallback((data) => {
        if (ws.current?.readyState === WebSocket.OPEN) {
            ws.current.send(data);
        }
    }, []);
    const close = useCallback(() => {
        if (ws.current) {
            ws.current.close();
        }
    }, []);
    return {
        send,
        close,
        lastMessage,
        readyState,
        error
    };
}
export default useWebSocket;
