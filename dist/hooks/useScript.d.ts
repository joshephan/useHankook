interface UseScriptOptions {
    async?: boolean;
    defer?: boolean;
    crossOrigin?: string;
    integrity?: string;
}
interface UseScriptState {
    loading: boolean;
    error: Error | null;
}
declare function useScript(src: string, options?: UseScriptOptions): UseScriptState;
export default useScript;
