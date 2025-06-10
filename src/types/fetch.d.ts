export interface UseFetchOptions extends RequestInit {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export interface UseFetchReturn<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
  fetch: (url: string, options?: UseFetchOptions) => Promise<void>;
  reset: () => void;
} 