interface UseWorkerOptions {
    onMessage?: (event: MessageEvent) => void;
    onError?: (error: ErrorEvent) => void;
}
declare function useWorker(workerUrl: string, options?: UseWorkerOptions): {
    postMessage: (message: any) => void;
    terminate: () => void;
};
export default useWorker;
