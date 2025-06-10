/**
 * useSpeech
 *
 * 웹 스피치 API를 사용하는 커스텀 훅
 * 텍스트를 음성으로 변환하고 재생 상태를 관리합니다.
 *
 * A custom hook for using Web Speech API
 * Converts text to speech and manages playback state.
 */
import { useState, useCallback } from 'react';
function useSpeech(text, options = {}) {
    const [state, setState] = useState({
        speaking: false,
        supported: 'speechSynthesis' in window,
        error: null
    });
    const speak = useCallback(() => {
        if (!state.supported) {
            setState(prev => ({
                ...prev,
                error: new Error('Speech synthesis is not supported')
            }));
            return;
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = options.lang ?? 'en-US';
        utterance.pitch = options.pitch ?? 1;
        utterance.rate = options.rate ?? 1;
        utterance.volume = options.volume ?? 1;
        if (options.voice)
            utterance.voice = options.voice;
        utterance.onstart = () => {
            setState(prev => ({
                ...prev,
                speaking: true,
                error: null
            }));
        };
        utterance.onend = () => {
            setState(prev => ({
                ...prev,
                speaking: false
            }));
        };
        utterance.onerror = (event) => {
            setState(prev => ({
                ...prev,
                speaking: false,
                error: new Error(`Speech synthesis error: ${event.error}`)
            }));
        };
        window.speechSynthesis.speak(utterance);
    }, [text, options, state.supported]);
    const stop = useCallback(() => {
        if (!state.supported)
            return;
        window.speechSynthesis.cancel();
        setState(prev => ({
            ...prev,
            speaking: false
        }));
    }, [state.supported]);
    return [state, speak, stop];
}
export default useSpeech;
