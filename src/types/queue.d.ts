export interface UseQueueReturn<T> {
  enqueue: (item: T) => void;
  dequeue: () => T | undefined;
  peek: () => T | undefined;
  clear: () => void;
  size: number;
  isEmpty: boolean;
  items: T[];
} 