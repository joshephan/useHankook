interface Stack<T> {
    items: T[];
    push: (item: T) => void;
    pop: () => T | undefined;
    peek: () => T | undefined;
    clear: () => void;
    size: number;
}
declare function useStack<T>(initialState?: T[]): Stack<T>;
export default useStack;
