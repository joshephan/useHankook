interface Queue<T> {
    items: T[];
    add: (item: T) => void;
    remove: () => T | undefined;
    clear: () => void;
    first: T | undefined;
    last: T | undefined;
    size: number;
}
declare function useQueue<T>(initialState?: T[]): Queue<T>;
export default useQueue;
