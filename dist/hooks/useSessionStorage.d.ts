interface UseSessionStorageOptions<T> {
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
}
declare function useSessionStorage<T>(key: string, initialValue: T, options?: UseSessionStorageOptions<T>): readonly [T, import("react").Dispatch<import("react").SetStateAction<T>>];
export default useSessionStorage;
