export interface UseLocalizationOptions {
  defaultLocale?: string;
  fallbackLocale?: string;
}

export interface UseLocalizationReturn {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string, params?: Record<string, string>) => string;
  formatDate: (date: Date, options?: Intl.DateTimeFormatOptions) => string;
  formatNumber: (number: number, options?: Intl.NumberFormatOptions) => string;
} 