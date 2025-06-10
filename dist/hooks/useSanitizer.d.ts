interface SanitizeOptions {
    allowedTags?: string[];
    allowedAttributes?: Record<string, string[]>;
    allowedSchemes?: string[];
}
declare function useSanitizer(options?: SanitizeOptions): (html: string) => string;
export default useSanitizer;
