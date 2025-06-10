export interface UseClipboardOptions {
  successDuration?: number;
}

export interface UseClipboardReturn {
  copy: (text: string) => Promise<void>;
  reset: () => void;
  error: Error | null;
  copied: boolean;
} 