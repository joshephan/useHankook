/**
 * useWorker
 * 
 * Web Worker를 관리하는 커스텀 훅
 * 백그라운드 스레드에서 작업을 실행하고 메시지 통신을 처리합니다.
 * 
 * A custom hook for managing Web Workers
 * Executes tasks in background threads and handles message communication.
 */
import { useEffect, useRef, useCallback } from 'react';

interface UseWorkerOptions {
  onMessage?: (event: MessageEvent) => void;
  onError?: (error: ErrorEvent) => void;
}

function useWorker(workerUrl: string, options: UseWorkerOptions = {}) {
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const worker = new Worker(workerUrl);
    workerRef.current = worker;

    if (options.onMessage) {
      worker.addEventListener('message', options.onMessage);
    }

    if (options.onError) {
      worker.addEventListener('error', options.onError);
    }

    return () => {
      if (options.onMessage) {
        worker.removeEventListener('message', options.onMessage);
      }
      if (options.onError) {
        worker.removeEventListener('error', options.onError);
      }
      worker.terminate();
    };
  }, [workerUrl, options.onMessage, options.onError]);

  const postMessage = useCallback((message: any) => {
    workerRef.current?.postMessage(message);
  }, []);

  const terminate = useCallback(() => {
    workerRef.current?.terminate();
    workerRef.current = null;
  }, []);

  return {
    postMessage,
    terminate
  };
}

export default useWorker; 