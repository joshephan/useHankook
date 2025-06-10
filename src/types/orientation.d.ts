export type OrientationType = 'portrait-primary' | 'portrait-secondary' | 'landscape-primary' | 'landscape-secondary' | 'natural' | 'any';

export interface OrientationState {
  angle: number;
  type: OrientationType;
  supported: boolean;
} 