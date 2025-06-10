export type PermissionName = PermissionName;

export interface PermissionState {
  state: 'granted' | 'denied' | 'prompt';
  error: Error | null;
}

export interface UsePermissionsReturn {
  state: Record<PermissionName, PermissionState>;
  request: (permission: PermissionName) => Promise<PermissionState>;
  query: (permission: PermissionName) => Promise<PermissionState>;
} 