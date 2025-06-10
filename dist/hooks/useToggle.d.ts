type ToggleValue = boolean | ((prev: boolean) => boolean);
declare function useToggle(initialValue?: boolean): [boolean, (value?: ToggleValue) => void];
export default useToggle;
