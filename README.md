# javascript-p2-airbnb

## View 컴포넌트 구조

![image](https://user-images.githubusercontent.com/49841765/133251571-5998a852-9011-4e2e-8fd3-3dce98a8bcd7.png)

### 장점

-   view가 상태에 의존하기 때문에 어떠한 이벤트가 발생해도 view를 직접 찾아서 바꿔줄 필요 없이 setState 함수를 통해 상태 값만 바꿔주면 반영된다.
-   하위 컴포넌트를 생성할 때, 하위 컴포넌트 인스턴스를 멤버 변수로 갖고 있지 않기 때문에, SOLID의 의존 역전 법칙에 위배되지 않는다고 생각.

### 단점

-   store 개념이 없어 다른 컴포넌트로 데이터를 전달할 때 여러 번에 걸쳐 전파시켜야 함.
-   공유하는 상태 값을 갖게 하기 위해 데이터를 공유하는 컴포넌트의 최상위 컴포넌트에 상태 값이 위치해야하므로 데이터가 하나의 컴포넌트의 상태에 몰릴 수 있다.

## 구현 목록

-- Week 1 --

Day 1. Webpack 및 babel 설정

-   webpack config 파일을 작성하여 css, js, img를 번들링 할 수 있도록 구성
-   babel을 이용하여 하위 브라우저에서도 지원되도록 설정

Day 2. 폴더 구조 개선 및 메인 화면 layout 및 style 구성

-   함수를 이용한 view 구성 및 이벤트 핸들링
-   메인 화면 css 구성 및 util css 구성

Day 3. 메인 화면 FE 리팩토링

-   컴포넌트 별로 구분하여 view 클래스 작성
-   event emitter 사용하여 이벤트 핸들링

Day 4. 달력 드롭다운 구현 및 view가 state에 의존하도록 FE 리팩토링

-   setState 함수를 만들어 상태 변경 발생 시 view를 리렌더링 하도록 수정
-   이벤트 버블링을 통한 달력 드롭다운 기능 구현

---

-- 주말 --

-   event emitter 걷어내는 작업
-   컴포넌트 구조 재설계
-   각 컴포넌트 마다 겹치는 역할을(setState, state, render, template 등) 하나의 클래스로 구성하여 각 컴포넌트가 상속받아 사용할 수 있도록 리팩토링
-   위 세 가지를 포함한 FE 리팩토링

---

-- Week 2 --

Day 5. 달력, 금액 범위, 인원 입력 드롭다운 구현

-   기존에 구현되어 있었던 달력까지 리팩토링을 마치고 드롭다운의 나머지 기능을 구현함.
-   금액 범위 구현은 우선 input text box로 처리.

Day 6. 유효성 검사 로직 및 결과 페이지 헤더 layout 구성 및 1차 배포

-   checkin, checkout, price, number 입력에 대해 유효성 검사하는 validation 함수를 구현함.
-   결과 페이지 컴포넌트 구조를 설계하고 header 컴포넌트 클래스의 template 부분을 작성함.
-   ncloud의 micro 인스턴스를 이용하여 1차 배포 진행함.

---
