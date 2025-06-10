declare function useTimeout(callback: () => void, delay: number | null): {
    set: () => void;
    clear: () => void;
};
export default useTimeout;
