# javascript-p2-airbnb

## 주차별 기능 요약

### Week 1

`메인 화면`

- layout 및 style 구성
- 검색 바 클릭 시 검색 바 아이템 그림자 효과 부여
- 검색 바 클릭 시 알맞은 드롭박스 펼치기
- calendar layout 구성
- 가격 범위 설정 layout 구성
- 인원 체크 layout 구성
- 체크인, 체크아웃 날짜가 선택되지 않은 상황에서 가격 선택 x

`조건별 검색(날짜/요금/인원)`

- 숙소 데이터 수집
- DB 스키마 설계
- 리소스 별 REST API 구현
- 페이지 라우팅

`차트`

- 가격 범위 설정 레인지 슬라이더 구현

## 구현 목록

Day 1. Webpack 및 babel 설정

- webpack config 파일을 작성하여 css, js, img를 번들링 할 수 있도록 구성
- babel을 이용하여 하위 브라우저에서도 지원되도록 설정

Day 2. 폴더 구조 개선 및 메인 화면 layout 및 style 구성

- 함수를 이용한 view 구성 및 이벤트 핸들링
- 메인 화면 css 구성 및 util css 구성

Day 3. 메인 화면 FE 리팩토링

- 컴포넌트 별로 구분하여 view 클래스 작성
- event emitter 사용하여 이벤트 핸들링