export type StorageType = 'localStorage' | 'sessionStorage';

export interface StorageOptions {
  type?: StorageType;
  serializer?: {
    parse: (value: string) => any;
    stringify: (value: any) => string;
  };
}

export interface UseStorageReturn<T> {
  value: T | null;
  setValue: (value: T) => void;
  remove: () => void;
  clear: () => void;
} 