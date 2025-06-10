export interface UseFullscreenOptions {
  onEnter?: () => void;
  onExit?: () => void;
}

export interface UseFullscreenReturn {
  isFullscreen: boolean;
  enter: () => Promise<void>;
  exit: () => Promise<void>;
  toggle: () => Promise<void>;
  element: HTMLElement | null;
} 