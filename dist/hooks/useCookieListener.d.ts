interface CookieChangeEvent extends Event {
    detail: {
        name: string;
        value: string;
        oldValue: string;
    };
}
declare function useCookieListener(callback: (event: CookieChangeEvent) => void, cookieName?: string): void;
export default useCookieListener;
