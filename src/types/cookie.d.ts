export interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: Date | number;
  maxAge?: number;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

export interface UseCookieOptions extends CookieOptions {
  defaultValue?: string;
}

export interface UseCookieReturn {
  value: string;
  setValue: (value: string, options?: CookieOptions) => void;
  remove: () => void;
} 