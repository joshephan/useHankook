/**
 * usePermissions
 *
 * 브라우저 권한 상태를 관리하는 커스텀 훅
 * Permissions API를 사용하여 특정 권한(카메라, 위치 등)의 상태를 추적합니다.
 *
 * A custom hook for managing browser permission states
 * Uses Permissions API to track the state of specific permissions (camera, location, etc.).
 */
import { useState, useEffect } from 'react';
function usePermissions(permissionName) {
    const [state, setState] = useState({
        state: 'prompt',
        error: null
    });
    useEffect(() => {
        if (!navigator.permissions) {
            setState({
                state: 'prompt',
                error: new Error('Permissions API is not supported')
            });
            return;
        }
        const queryPermission = async () => {
            try {
                const result = await navigator.permissions.query({ name: permissionName });
                setState({
                    state: result.state,
                    error: null
                });
                result.addEventListener('change', () => {
                    setState({
                        state: result.state,
                        error: null
                    });
                });
            }
            catch (error) {
                setState({
                    state: 'prompt',
                    error: error
                });
            }
        };
        queryPermission();
    }, [permissionName]);
    return state;
}
export default usePermissions;
