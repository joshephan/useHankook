import { useState, useCallback } from 'react';
function useLocalization(options = {}) {
    const { defaultLocale = 'en', fallbackLocale = 'en' } = options;
    const [locale, setLocale] = useState(defaultLocale);
    const changeLocale = useCallback((newLocale) => {
        setLocale(newLocale);
    }, []);
    const formatNumber = useCallback((number, options) => {
        try {
            return new Intl.NumberFormat(locale, options).format(number);
        }
        catch {
            return new Intl.NumberFormat(fallbackLocale, options).format(number);
        }
    }, [locale, fallbackLocale]);
    const formatDate = useCallback((date, options) => {
        try {
            return new Intl.DateTimeFormat(locale, options).format(date);
        }
        catch {
            return new Intl.DateTimeFormat(fallbackLocale, options).format(date);
        }
    }, [locale, fallbackLocale]);
    const formatCurrency = useCallback((amount, currency, options) => {
        try {
            return new Intl.NumberFormat(locale, {
                style: 'currency',
                currency,
                ...options
            }).format(amount);
        }
        catch {
            return new Intl.NumberFormat(fallbackLocale, {
                style: 'currency',
                currency,
                ...options
            }).format(amount);
        }
    }, [locale, fallbackLocale]);
    return {
        locale,
        changeLocale,
        formatNumber,
        formatDate,
        formatCurrency
    };
}
export default useLocalization;
