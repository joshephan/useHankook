type SetOrEntries<T> = Set<T> | T[];
interface UseSetActions<T> {
    add: (value: T) => void;
    remove: (value: T) => void;
    clear: () => void;
    reset: () => void;
    has: (value: T) => boolean;
}
declare function useSet<T>(initialState?: SetOrEntries<T>): [Set<T>, UseSetActions<T>];
export default useSet;
