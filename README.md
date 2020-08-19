# Node & React 사용하여 기본적인 웹 페이지 구현하기.

- 참조 강의 [(링크)](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EB%B3%B8/dashboard)

## React.js
- React.js 개념공부 -> [(링크)](https://velopert.com/3612)
- 프론트엔드 라이브러리.
- 데이터가 바뀔 때, update가 아닌 delete -> create를 Virtual DOM을 사용하여 빠르게 가능하도록 해준다.
- 여러 컴포넌트를 정의한 후, 렌더링하여 브라우저에 나타낸다
- 컴포넌트 만드는 방법
    - 1. Component클래스를 상속
      - 반드시 render() 함수가 있어야 함.
      - 내부에서 [JSX](https://velopert.com/3626)를 return 해주어야 함.
      - export를 해주어야, 다른 곳에서 불러와서 사용할 수 있음.
      
    - 2. 함수를 통해서 만들기
      - a...
      - b...
  - 브라우저 상에서 리액트 컴포넌트를 보여주기 위해서 react-dom의 render함수를 사용.
      - 첫번째 파라미터는 렌더링 할 결과물, 두번째 파라미터는 컴포넌트를 어떤 DOM에 그릴지
- props와 state ?
    - 1. props
      - a..
      - b..
    - 2. state
      - a..
      - b..
  
   
- 리덕스(Redux)?
    - [Context API란?](https://velopert.com/3606)
    - [미들웨어 이해하기](https://velopert.com/3401)
    - [리덕스 ?](https://velopert.com/3528)
      - JavaScript 어플리케이션에서 데이터 교류 및 state관리를 쉽고 효율적으로 하게 해주는 도구 !
      - store: React.js 프로젝트에서 사용하는 모든 동적 데이터들을 담아두는 곳 입니다.
      - action: 어떤 변화가 일어나야 할 지 나타내는 객체입니다.
      - reducer: action 객체를 받았을 때, 데이터를 어떻게 바꿀지 처리할지 정의하는 객체입니다.


- 자바스크립트 Promise란 ??
    - 비동기 처리에 사용되는 객체. [(비동기 통신?)](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
    - 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용.
    - 비동기 통신이 완료 되기 전에, 다음 코드를 실행하게 되는 문제점을 해결하기 위한 방법 중 하나.
    - [(참조)](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
    
- Hook ? [참조](https://ko.reactjs.org/docs/hooks-intro.html)
## Node.js
- Node.js 개념공부 -> [(링크)](https://velopert.com/133)
- 구글 Chrome의 자바스크립트 엔진(V8 Engine)에 기반하여 만들어진 ServerSide플랫폼.
- 웹서버가 아니다. HTTP 서버를 직접 작성해야 함.
- Node.js는 그저 코드를 실행할 수 있는 하나의 방법에 불과한 JavaScript런타임일 뿐.
