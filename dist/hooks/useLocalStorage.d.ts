interface UseLocalStorageOptions<T> {
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
}
declare function useLocalStorage<T>(key: string, initialValue: T, options?: UseLocalStorageOptions<T>): readonly [T, import("react").Dispatch<import("react").SetStateAction<T>>];
export default useLocalStorage;
