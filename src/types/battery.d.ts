export interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  addEventListener(type: 'chargingchange' | 'levelchange' | 'chargingtimechange' | 'dischargingtimechange', listener: EventListener): void;
  removeEventListener(type: 'chargingchange' | 'levelchange' | 'chargingtimechange' | 'dischargingtimechange', listener: EventListener): void;
}

export interface BatteryStatus {
  charging: boolean;
  level: number;
  chargingTime: number;
  dischargingTime: number;
  supported: boolean;
}

declare global {
  interface Navigator {
    getBattery(): Promise<BatteryManager>;
  }
} 