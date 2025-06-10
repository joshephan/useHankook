/**
 * useCountdown
 *
 * 카운트다운 타이머를 구현하는 커스텀 훅
 * 지정된 날짜까지 남은 시간을 일, 시간, 분, 초 단위로 계산하고 관리합니다.
 * 시작, 일시정지, 리셋 기능을 제공합니다.
 *
 * A custom hook for implementing countdown timer
 * Calculates and manages remaining time in days, hours, minutes, and seconds until the target date.
 * Provides start, pause, and reset functionality.
 */
import { UseCountdownOptions } from '@/types/countdown';
declare function useCountdown(targetDate: Date | number, options?: UseCountdownOptions): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isEnded: boolean;
    start: () => void;
    pause: () => void;
    reset: () => void;
};
export default useCountdown;
