interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}
interface FetchOptions extends RequestInit {
    skip?: boolean;
}
declare function useFetch<T>(url: string, options?: FetchOptions): FetchState<T>;
export default useFetch;
