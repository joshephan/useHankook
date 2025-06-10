/**
 * useBatteryStatus
 * 
 * 배터리 상태를 모니터링하는 커스텀 훅
 * 배터리의 충전 상태, 레벨, 충전/방전 시간 등의 정보를 제공합니다.
 * 
 * A custom hook for monitoring battery status
 * Provides information about battery charging state, level, charging/discharging time, etc.
 */
import { useState, useEffect } from 'react';
import { BatteryStatus, BatteryManager } from '../types/battery';

const useBatteryStatus = (): BatteryStatus => {
  const [batteryStatus, setBatteryStatus] = useState<BatteryStatus>({
    charging: false,
    level: 1,
    chargingTime: Infinity,
    dischargingTime: Infinity,
    supported: false
  });

  useEffect(() => {
    if (!navigator.getBattery) {
      console.warn('Battery Status API is not supported in this browser');
      return;
    }

    let battery: BatteryManager | null = null;

    const updateBatteryInfo = (battery: BatteryManager) => {
      setBatteryStatus({
        charging: battery.charging,
        level: battery.level,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
        supported: true
      });
    };

    const handleChargingChange = () => battery && updateBatteryInfo(battery);
    const handleLevelChange = () => battery && updateBatteryInfo(battery);
    const handleChargingTimeChange = () => battery && updateBatteryInfo(battery);
    const handleDischargingTimeChange = () => battery && updateBatteryInfo(battery);

    navigator.getBattery().then((b) => {
      battery = b;
      updateBatteryInfo(battery);

      battery.addEventListener('chargingchange', handleChargingChange);
      battery.addEventListener('levelchange', handleLevelChange);
      battery.addEventListener('chargingtimechange', handleChargingTimeChange);
      battery.addEventListener('dischargingtimechange', handleDischargingTimeChange);
    });

    return () => {
      if (battery) {
        battery.removeEventListener('chargingchange', handleChargingChange);
        battery.removeEventListener('levelchange', handleLevelChange);
        battery.removeEventListener('chargingtimechange', handleChargingTimeChange);
        battery.removeEventListener('dischargingtimechange', handleDischargingTimeChange);
      }
    };
  }, []);

  return batteryStatus;
};

export default useBatteryStatus; 