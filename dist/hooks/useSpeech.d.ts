interface UseSpeechOptions {
    lang?: string;
    pitch?: number;
    rate?: number;
    volume?: number;
    voice?: SpeechSynthesisVoice;
}
interface UseSpeechState {
    speaking: boolean;
    supported: boolean;
    error: Error | null;
}
declare function useSpeech(text: string, options?: UseSpeechOptions): [UseSpeechState, () => void, () => void];
export default useSpeech;
