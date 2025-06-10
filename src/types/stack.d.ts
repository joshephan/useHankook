export interface UseStackReturn<T> {
  push: (item: T) => void;
  pop: () => T | undefined;
  peek: () => T | undefined;
  clear: () => void;
  size: number;
  isEmpty: boolean;
  items: T[];
} 