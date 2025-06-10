type EventTarget = Window | Document | HTMLElement;
declare function useEventListner<T extends Event>(eventName: string, handler: (event: T) => void, element?: EventTarget, options?: boolean | AddEventListenerOptions): void;
export default useEventListner;
