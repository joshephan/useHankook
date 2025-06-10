import { CookieOptions } from '../types/cookie';
declare function useCookie(key: string, initialValue?: string): readonly [string, (newValue: string, options?: CookieOptions) => void, () => void];
export default useCookie;
