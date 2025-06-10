type KeyFilter = string | string[] | ((event: KeyboardEvent) => boolean);
declare function useKeyPress(keyFilter: KeyFilter, options?: {
    target?: Window | Document | HTMLElement;
    event?: 'keydown' | 'keyup' | 'keypress';
}): boolean;
export default useKeyPress;
