interface UseLocalizationOptions {
    defaultLocale?: string;
    fallbackLocale?: string;
}
declare function useLocalization(options?: UseLocalizationOptions): {
    locale: string;
    changeLocale: (newLocale: string) => void;
    formatNumber: (number: number, options?: Intl.NumberFormatOptions) => string;
    formatDate: (date: Date, options?: Intl.DateTimeFormatOptions) => string;
    formatCurrency: (amount: number, currency: string, options?: Intl.NumberFormatOptions) => string;
};
export default useLocalization;
