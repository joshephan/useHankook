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

| 훅 이름 | 설명 |
|---------|------|
| useClickOutside | 요소 외부 클릭 감지 |
| useHover | 요소 호버 상태 관리 |
| useInputValue | 입력값 상태 관리 |
| useOnScreen | 요소의 화면 내 가시성 감지 |
| useScrollDirection | 스크롤 방향 감지 |
| useScrollLock | 스크롤 잠금/해제 |
| useWindowSize | 윈도우 크기 추적 |
| useCookie | 쿠키 값 관리 |
| useLocalStorage | 로컬 스토리지 값 관리 |
| useMap | Map 자료구조 관리 |
| useSet | Set 자료구조 관리 |
| useDebounce | 디바운스 처리 |
| useThrottle | 쓰로틀 처리 |
| useInterval | 주기적 실행 |
| useBatteryStatus | 배터리 상태 감지 |
| useGeolocation | 위치 정보 추적 |
| useMediaQuery | 미디어 쿼리 상태 관리 |
| useClipboard | 클립보드 관리 |
| useKeyPress | 키 입력 감지 |
| useMousePosition | 마우스 위치 추적 |
| useCountdown | 카운트다운 타이머 |
| useCountUp | 카운트업 애니메이션 |
| useFetch | 데이터 페칭 |
| useWebSocket | 웹소켓 통신 |
| useFavicon | 파비콘 변경 |
| useTitle | 페이지 제목 변경 |
| useLocalization | 다국어 지원 |
| useConfirmExit | 페이지 이탈 확인 |
| useWindowScroll | 윈도우 스크롤 위치 추적 |
| useScript | 외부 스크립트 로드 |
| useToggle | boolean 상태 토글 |
| useTimeout | 타이머 관리 |
| useTabNotification | 브라우저 탭 알림 |
| useStorage | 스토리지 통합 관리 |
| useStack | 스택 자료구조 관리 |
| useSpeech | 웹 스피치 API 관리 |
| useSize | DOM 요소 크기 추적 |
| useSessionStorage | 세션 스토리지 관리 |
| useScrollPosition | 스크롤 위치 추적 |
| useSanitizer | HTML 문자열 정제 |
| useQueue | 큐 자료구조 관리 |
| usePrevious | 이전 값 추적 |
| usePreventBodyScroll | body 스크롤 방지 |
| usePrefersTheme | 시스템 테마 감지 |
| usePermissions | 브라우저 권한 관리 |
| useOrientation | 디바이스 방향 감지 |
| useOnlineStatus | 온라인 상태 감지 |
| useNetworkStatus | 네트워크 상태 모니터링 |
| useMutationObserver | DOM 변경 감지 |
| useMediaDevices | 미디어 장치 접근 |
| useIntersectionObserver | 요소 가시성 감지 |
| useFirstRender | 첫 렌더링 감지 |
| useEventListner | 이벤트 리스너 관리 |
| useDeviceOS | 운영체제 감지 |
| useSingleEffect | 단일 실행 이펙트 |
| useWorker | 웹 워커 통신 |
| useViewportSize | 뷰포트 크기 추적 |
| useUrgentUpdate | 긴급 업데이트 트리거 |
| useUpdateEffect | 업데이트 시 실행 이펙트 |
| useUpdate | 강제 리렌더링 |
| useDarkMode | 다크 모드 관리 |
| useCookieListener | 쿠키 변경 감지 |
| useLeaveDetection | 페이지 이탈 감지 |
| useIsomorphicLayoutEffect | SSR 호환 레이아웃 이펙트 |
| useFullscreen | 전체화면 관리 |
| useIdle | 사용자 유휴 상태 감지 |
| useHold | 요소 홀드 감지 |

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

### Additional Hooks

#### useWindowScroll
```typescript
const { x, y } = useWindowScroll();
// 윈도우 스크롤 위치 추적
```

#### useScript
```typescript
const [loaded, error] = useScript('https://example.com/script.js');
// 외부 스크립트 로드 상태 관리
```

#### useToggle
```typescript
const [isOn, toggle] = useToggle(false);
// boolean 상태 토글
```

#### useTimeout
```typescript
const { clear, reset } = useTimeout(() => {
  console.log('Timeout!');
}, 1000);
// 타이머 관리
```

#### useTabNotification
```typescript
const { notify, clear } = useTabNotification('새로운 알림이 있습니다');
// 브라우저 탭 알림 관리
```

#### useStorage
```typescript
const { get, set, remove } = useStorage('local'); // or 'session'
// 로컬/세션 스토리지 통합 관리
```

#### useStack
```typescript
const [stack, { push, pop, peek, clear }] = useStack<number>();
// 스택 자료구조 관리
```

#### useSpeech
```typescript
const { speak, stop, pause, resume } = useSpeech();
// 웹 스피치 API 관리
```

#### useSize
```typescript
const { width, height } = useSize(ref);
// DOM 요소 크기 추적
```

#### useSessionStorage
```typescript
const [value, setValue] = useSessionStorage('key', 'initialValue');
// 세션 스토리지 값 관리
```

#### useScrollPosition
```typescript
const { x, y, direction } = useScrollPosition();
// 스크롤 위치 및 방향 추적
```

#### useSanitizer
```typescript
const { sanitize } = useSanitizer();
const cleanHtml = sanitize(dirtyHtml);
// HTML 문자열 정제
```

#### useQueue
```typescript
const [queue, { enqueue, dequeue, peek, clear }] = useQueue<string>();
// 큐 자료구조 관리
```

#### usePrevious
```typescript
const previousValue = usePrevious(value);
// 이전 값 추적
```

#### usePreventBodyScroll
```typescript
const { prevent, allow } = usePreventBodyScroll();
// body 스크롤 방지/허용
```

#### usePrefersTheme
```typescript
const isDark = usePrefersTheme('dark');
// 시스템 테마 선호도 감지
```

#### usePermissions
```typescript
const { state, request } = usePermissions('geolocation');
// 브라우저 권한 상태 관리
```

#### useOrientation
```typescript
const { angle, type } = useOrientation();
// 디바이스 방향 감지
```

#### useOnlineStatus
```typescript
const isOnline = useOnlineStatus();
// 온라인 상태 감지
```

#### useNetworkStatus
```typescript
const { online, effectiveType, downlink } = useNetworkStatus();
// 네트워크 상태 모니터링
```

#### useMutationObserver
```typescript
const { observe, disconnect } = useMutationObserver(ref, callback);
// DOM 변경 감지
```

#### useMediaDevices
```typescript
const { devices, requestPermission } = useMediaDevices();
// 미디어 장치 접근
```

#### useIntersectionObserver
```typescript
const isVisible = useIntersectionObserver(ref, options);
// 요소 가시성 감지
```

#### useFirstRender
```typescript
const isFirstRender = useFirstRender();
// 첫 렌더링 감지
```

#### useEventListner
```typescript
useEventListner('click', handler, element);
// 이벤트 리스너 관리
```

#### useDeviceOS
```typescript
const os = useDeviceOS();
// 운영체제 감지
```

#### useSingleEffect
```typescript
useSingleEffect(() => {
  console.log('한 번만 실행');
});
// 단일 실행 이펙트
```

#### useWorker
```typescript
const { postMessage, onMessage } = useWorker('worker.js');
// 웹 워커 통신
```

#### useViewportSize
```typescript
const { width, height } = useViewportSize();
// 뷰포트 크기 추적
```

#### useUrgentUpdate
```typescript
const update = useUrgentUpdate();
// 긴급 업데이트 트리거
```

#### useUpdateEffect
```typescript
useUpdateEffect(() => {
  console.log('업데이트 시에만 실행');
}, [dependency]);
// 업데이트 시에만 실행되는 이펙트
```

#### useUpdate
```typescript
const update = useUpdate();
// 강제 리렌더링
```

#### useDarkMode
```typescript
const { isDark, toggle } = useDarkMode();
// 다크 모드 관리
```

#### useCookieListener
```typescript
useCookieListener('cookieName', callback);
// 쿠키 변경 감지
```

#### useLeaveDetection
```typescript
const isLeaving = useLeaveDetection();
// 페이지 이탈 감지
```

#### useIsomorphicLayoutEffect
```typescript
useIsomorphicLayoutEffect(() => {
  // 서버사이드 렌더링 호환 레이아웃 이펙트
});
```

#### useFullscreen
```typescript
const { enter, exit, isFullscreen } = useFullscreen();
// 전체화면 관리
```

#### useIdle
```typescript
const isIdle = useIdle(30000); // 30초
// 사용자 유휴 상태 감지
```

#### useHold
```typescript
const { isHolding, bind } = useHold(1000); // 1초
// 요소 홀드 감지
```

