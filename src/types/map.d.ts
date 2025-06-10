export interface UseMapReturn<K, V> {
  set: (key: K, value: V) => void;
  get: (key: K) => V | undefined;
  has: (key: K) => boolean;
  delete: (key: K) => boolean;
  clear: () => void;
  size: number;
  keys: K[];
  values: V[];
  entries: [K, V][];
} 