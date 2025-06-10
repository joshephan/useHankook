export interface UseSpeechOptions {
  lang?: string;
  pitch?: number;
  rate?: number;
  volume?: number;
  voice?: SpeechSynthesisVoice;
}

export interface UseSpeechReturn {
  speak: (text: string) => void;
  stop: () => void;
  pause: () => void;
  resume: () => void;
  speaking: boolean;
  supported: boolean;
  voices: SpeechSynthesisVoice[];
} 