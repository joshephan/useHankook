/**
 * useFetch
 *
 * HTTP 요청을 처리하는 커스텀 훅
 * 데이터 로딩, 에러 처리, 요청 취소 등의 기능을 제공합니다.
 *
 * A custom hook for handling HTTP requests
 * Provides functionality for data loading, error handling, and request cancellation.
 */
import { useState, useEffect } from 'react';
function useFetch(url, options = {}) {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });
    useEffect(() => {
        if (options.skip) {
            return;
        }
        const controller = new AbortController();
        const { signal } = controller;
        const fetchData = async () => {
            try {
                setState(prev => ({ ...prev, loading: true }));
                const response = await fetch(url, { ...options, signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setState({ data, loading: false, error: null });
            }
            catch (error) {
                if (error instanceof Error) {
                    setState({ data: null, loading: false, error });
                }
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, [url, JSON.stringify(options)]);
    return state;
}
export default useFetch;
