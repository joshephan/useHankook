interface UseFullscreenOptions {
    onEnter?: () => void;
    onExit?: () => void;
}
declare function useFullscreen<T extends HTMLElement>(elementRef: React.RefObject<T>, options?: UseFullscreenOptions): [boolean, () => void];
export default useFullscreen;
