# useHankook

![태극기](https://i.namu.wiki/i/8rsMb3qGsWtCcwYPFtCGF3d9cPnG08hnxcm75xKbQYZLTVzus7iWz9l36Vuq3uWYSJcwxTQ2z7F6DMvq-W4m3NkswFU6vBLkZLk9psxywZrR3Y7aFoWmmNHMsu7KBcMPooZzCd6D-NBqA6LhmIJSuw.svg)

A collection of versatile react hooks for modern frontend programmers from [Han Sang Hoon](https://github.com/joshephan).

한국어로 작성된 React 커스텀 훅 모음집입니다. 모던 프론트엔드 개발에 필요한 다양한 기능을 제공합니다.

## 주요 특징

- 🎯 TypeScript로 작성되어 타입 안정성 보장
- 📦 Zero Dependencies - 외부 의존성 없음
- 🎨 다양한 UI/UX 관련 훅 제공
- 🔄 상태 관리 및 생명주기 관련 훅 제공
- 🌐 브라우저 API 관련 훅 제공
- 📱 반응형 디자인을 위한 유틸리티 훅 제공

## 설치

```bash
npm i usehankook
```

## Hooks

### UI & DOM

#### useClickOutside
```typescript
const ref = useRef<HTMLDivElement>(null);
useClickOutside(ref, () => {
  // 요소 외부 클릭 시 실행될 콜백
  console.log('Clicked outside!');
});
```

#### useHover
```typescript
const [isHovered, ref] = useHover();
return <div ref={ref}>{isHovered ? 'Hovered!' : 'Not hovered'}</div>;
```

#### useInputValue
```typescript
const { value, handleChange, reset } = useInputValue({
  initialValue: '',
  transformer: (value) => value.toUpperCase()
});
```

#### useOnScreen
```typescript
const ref = useRef<HTMLDivElement>(null);
const isVisible = useOnScreen(ref, { threshold: 0.5 });
return <div ref={ref}>{isVisible ? 'Visible!' : 'Not visible'}</div>;
```

#### useScrollDirection
```typescript
const direction = useScrollDirection();
// 'up' 또는 'down' 반환
```

#### useScrollLock
```typescript
const { lock, unlock } = useScrollLock();
// 스크롤 잠금/해제
```

#### useWindowSize
```typescript
const { width, height } = useWindowSize();
// 윈도우 크기 추적
```

### State Management

#### useCookie
```typescript
const [value, setValue, removeValue] = useCookie('cookieName', 'initialValue');
// 쿠키 값 설정
setValue('newValue', { expires: 7 }); // 7일 후 만료
// 쿠키 삭제
removeValue();
```

#### useLocalStorage
```typescript
const [value, setValue] = useLocalStorage('key', 'initialValue');
// 값 업데이트
setValue('newValue');
```

#### useMap
```typescript
const [map, { set, get, delete, clear }] = useMap<string, number>();
// Map 조작
set('key', 1);
const value = get('key');
```

#### useSet
```typescript
const [set, { add, remove, clear }] = useSet<string>();
// Set 조작
add('value');
remove('value');
```

### Effects & Lifecycle

#### useDebounce
```typescript
const debouncedValue = useDebounce(value, 500);
// 500ms 후에 값 업데이트
```

#### useThrottle
```typescript
const throttledValue = useThrottle(value, 500);
// 500ms 간격으로 값 업데이트
```

#### useInterval
```typescript
useInterval(() => {
  console.log('Every second!');
}, 1000);
```

### Browser & Device

#### useBatteryStatus
```typescript
const { level, charging } = useBatteryStatus();
// 배터리 레벨과 충전 상태 추적
```

#### useGeolocation
```typescript
const { latitude, longitude, error } = useGeolocation({
  enableHighAccuracy: true
});
// 위치 정보 추적
```

#### useMediaQuery
```typescript
const isMobile = useMediaQuery('(max-width: 768px)');
// 미디어 쿼리 상태 추적
```

### Events & Interactions

#### useClipboard
```typescript
const { copy, copied, error } = useClipboard();
// 텍스트 복사
copy('Hello World!');
```

#### useKeyPress
```typescript
useKeyPress('Enter', () => {
  console.log('Enter key pressed!');
});
```

#### useMousePosition
```typescript
const { x, y } = useMousePosition();
// 마우스 위치 추적
```

### Animation & Counters

#### useCountdown
```typescript
const { count, start, pause, reset } = useCountdown({
  initialTime: 60,
  onComplete: () => console.log('Done!')
});
```

#### useCountUp
```typescript
const { count, startCountUp, reset } = useCountUp({
  start: 0,
  end: 100,
  duration: 2000
});
```

### Network & Data

#### useFetch
```typescript
const { data, loading, error } = useFetch('https://api.example.com/data');
```

#### useWebSocket
```typescript
const { send, lastMessage, readyState } = useWebSocket('ws://example.com');
// 메시지 전송
send('Hello!');
```

### UI Enhancement

#### useFavicon
```typescript
useFavicon('/path/to/favicon.ico');
```

#### useTitle
```typescript
useTitle('New Page Title');
```

### Internationalization

#### useLocalization
```typescript
const { t, locale, setLocale } = useLocalization();
// 번역 사용
t('hello.world');
// 언어 변경
setLocale('ko');
```

### Navigation

#### useConfirmExit
```typescript
useConfirmExit('변경사항이 저장되지 않았습니다. 정말로 나가시겠습니까?');
```

