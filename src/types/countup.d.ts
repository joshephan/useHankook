export interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  onComplete?: () => void;
}