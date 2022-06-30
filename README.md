## 실행 방법

- 필요 패키지 설치

  > yarn

- 프로젝트 실행
  > yarn start

## 사용 기술과 선택 이유

### 1. typescript

자바스크립트의 개념에 type 만 추가된 언어이기 때문에 타입에 대해서 보다 명시적입니다. 자바스크립트를 구현하면서 예기치않은 암묵적 변환으로 props에서 오류를 겪은 경험이 있었는데 typescript를 이용해서 이 문제를 해결할 수 있었기 때문에 사용하게 되었습니다.

### 2. styled-component

props를 설정하여 재사용이 가능한 컴포넌트로 만들 수 있다는 점에서 선택하게 되었습니다. className을 적용시켜줄 때 , `class="sc-hKMtZM iffZot"`와 같이 변경해주기 때문에 중복 속성에 대해 고민하지 않아도 되어서 편리하게 사용할 수 있었습니다.

### 3. 그 외 라이브러리

- craco : CRA 을 사용하여 개발하다보니 절대 경로에 대한 커스텀이 필요하다고 생각했습니다. 오버라이딩해주는 craco 패키지를 이용하여 필요 기능은 구현하고 번거로운 설정은 덜어낼 수 있도록 했습니다.

## 결과물

![2022-06-30 20 41 08](https://user-images.githubusercontent.com/65998556/176669693-b3278b62-d1e6-4fdc-94a0-94aa738a31f9.gif)

## 고민하고, 배울 수 있었던 점

### 1. useFadeIn Custom Hook 구현

3 개의 컴포넌트에서 opacity(투명도), 위로 뜨는듯한 애니메이션을 중복으로 사용한다고 판단하여 hook 으로 구현하였습니다.

opacity=0 으로 초기 return 해주고, useEffect를 이용하여 컴포넌트가 생길 때 opacity=1 와 animation을 설정해주었습니다.

`orderNum:number`을 parameter로 받아서 몇 번째 순서로 opacity=1 이 될 지 결정했습니다.

> **DOM 요소 접근** querySelector로 요소에 접근할지, useRef를 이용하여 요소에 접근할지에 대해 고민했습니다. 전자의 방법은 className을 parameter로 전달해주는 방법으로 할 수 있었습니다. styled-component를 사용하여 className 이 바뀌기 때문에 후자의 방법을 선택하여 해결했습니다.

### 2. useCount Custom Hook 구현

`maxCountNumber:number`라는 parameter로 받았습니다. useEffect를 이용하여, 해당 parameter가 변경될 때마다 숫자가 변경될 수 있게끔 했습니다.

> **setInterval과 setTimeOut**
> 2s 동안 증가해야하기 때문에 setInterval을 사용할지 setTimeOut을 사용할지에 대한 고민이 많았습니다. setInterval 은 설정 시간을 기준으로 동작이 반복적으로 일어나고, setTimeout은 설정 시간이 지나고 동작이 한번 일어난다는 차이를 인지하고 setInterval 을 사용했습니다.

- 빨라지는 구간 / 느려지는 구간을 나누어서 구현했습니다.

빨라지는 구간에서 `setInterval`만을 사용했을 때 종료되는 시점이 달라지기 때문에 frame을 나누어 frame에 따른 수가 증가되게 끔했습니다. (빨라지는 구간에서 1씩 증가하다보니 가독성이 좋지 않고, 눈에 피로감을 주어 사용자에게 좋지 않은 영향을 준다고 생각하여 이렇게 구현했습니다.)
