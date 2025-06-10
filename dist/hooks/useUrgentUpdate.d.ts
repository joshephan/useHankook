declare function useUrgentUpdate(): {
    setUpdate: (update: () => void) => void;
    triggerUpdate: () => void;
};
export default useUrgentUpdate;
