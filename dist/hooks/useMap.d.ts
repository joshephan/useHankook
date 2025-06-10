type MapOrEntries<K, V> = Map<K, V> | [K, V][];
interface UseMapActions<K, V> {
    set: (key: K, value: V) => void;
    setAll: (entries: MapOrEntries<K, V>) => void;
    remove: (key: K) => void;
    reset: () => void;
    get: (key: K) => V | undefined;
    has: (key: K) => boolean;
    clear: () => void;
}
declare function useMap<K, V>(initialState?: MapOrEntries<K, V>): [Map<K, V>, UseMapActions<K, V>];
export default useMap;
