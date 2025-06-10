type StorageType = 'local' | 'session';
interface UseStorageOptions<T> {
    type?: StorageType;
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
}
declare function useStorage<T>(key: string, initialValue: T, options?: UseStorageOptions<T>): readonly [T, import("react").Dispatch<import("react").SetStateAction<T>>];
export default useStorage;
