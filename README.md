# Node & React 사용하여 기본적인 웹 페이지 구현하기.

- 실습 참조 강의 [(링크)](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EB%B3%B8/dashboard)

- 정리한 내용 참조 사이트 
   - [velopert](https://velopert.com/)
   - [Captain Pangyo](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
## React.js
- React.js 개념공부 -> [(링크)](https://velopert.com/3612)
- 프론트엔드 라이브러리.
- 데이터가 바뀔 때, update가 아닌 delete -> create를 Virtual DOM을 사용하여 빠르게 가능하도록 해준다.
- 여러 컴포넌트를 정의한 후, 렌더링하여 브라우저에 나타낸다
- 컴포넌트 만드는 방법
    - 함수형 컴포넌트와 클래스형 컴포넌트의 주요 차이점은, state와 LifeCycle이 빠져있다는 점이다. ( 성능적으로는 큰 차이는 없음. )
    
    - Component클래스를 상속
      - 반드시 render() 함수가 있어야 함.
      - 내부에서 [JSX](https://velopert.com/3626)를 return 해주어야 함.
      - export를 해주어야, 다른 곳에서 불러와서 사용할 수 있음.
      
    - 함수형 컴포넌트
      - 단순히 props만 받아와서 보여주기만 하는 컴포넌트의 경우에 함수형 컴포넌트로 더 간단하게 작성할 수 있다.
      - b...
  - 브라우저 상에서 리액트 컴포넌트를 보여주기 위해서 react-dom의 render함수를 사용.
      - 첫번째 파라미터는 렌더링 할 결과물, 두번째 파라미터는 컴포넌트를 어떤 DOM에 그릴지
- 리액트 컴포넌트에서 다루는 데이터 2가지
    - props
      - 부모 컴포넌트가 자식 컴포넌트에게 주는 값
      - 자식 컴포넌트에서는 props를 받아오기만하고, 받아온 props를 직접 수정 할 수는 없다.
    - state
      - 동적인 데이터를 다룰 때 사용.
      - state는 컴포넌트 내부에서 선언하며, 내부에서 값을 변경 할 수 있다.
      - state를 정의할 대는 class fields 문법을 사용해서 정의한다.
      - state에 있는 값을 바꾸기 위해서는, this.setState를 무조건 거쳐야 한다. 리액트에서는, 이 함수가 호출되면 컴포넌트가 <b>리렌더링</b> 되도록 설계되어있다.
- [LifeCycle API ?](https://velopert.com/3631)
   - 컴포넌트가 브라우저에서 나타기 전,후 또는 변화를 감지하고 불필요한 cpu사용을 방지하거나, 컴포넌트를 제거 등의 컴포넌트를 관리하기 위해 호출되는 함수들 !
- [Immutable.js ?](https://velopert.com/3486)
   - React에서 state의 불변함(Immutability)를 지키면서 상태관리 하는 것을 편리하게 해주는 라이브러리 !
     - 리엑트 컴포넌트의 state를 변경할 때, 무조건 setState를 통해 업데이트 해아하며, 기존 객체의 값을 직접적으로 수정하면 안된다.
     - 왜? -> 기존 객체의 값을 수정하게 된다면, 렌더 함수가 무분별하게 호출되어 cpu의 낭비가 발생할 수 있다.
        - ex) {a: 1, b: 2}의 값을가진 state에 {c: 3}을 추가하고싶을 때, 기존의 json에서 push로 추가하게 되면, input의 onChange가 수행될 때마다 state가 변경되어 렌더링이 수행 된다.
        - 그렇기 때문에, 기존의 state와 render링 수행될 때 전달 받은 props의 state를 비교하여 다른 경우에만 렌더링하도록 한다. ( shouldComponentUpdate메서드 정의하여서.. )
        - 즉, 전달받은 props의 state를 기준으로 현재상태와 다른경우와 비교하여 렌더링 수행 됨.
     - 이러한 이유로 state를 불변함을 유지하기위해서는, [ 기존의 데이터 복사 ] + [ 변경 내역을 첨부 ]하여 하위 컴포넌트로 전달해주어야 하는데, 기존 데이터 복사하는게 엄청 귀찮다.
        - state에서 관리되는 json이 엄청 복잡하게 있을수도있고, 규모가 커질수록 더욱 불편한다.
        - 이러한 작업을 편리하게 해줄 수 있는 라이브러리가 Immutable.js이다.
     - Immutable을 사용할 때 Record를 쓰면 좀 더 편하게 쓸 수 있다. (이거 링크의 예제보면 이해가 쏙쏙 된다 ㅎ)
        - state안의 요소를 가져올 때, [ data.get('id') ]를 data.id와 같이 쉽게 가져올 수 있다.
        - 객체화 비슷하게 Record를 만들어서 좀 더 가독성이 좋게 사용 할 수 있다.
- 리덕스(Redux)?
    - [Context API란?](https://velopert.com/3606)
    - [미들웨어 이해하기](https://velopert.com/3401)
      - redux-thunk는 미들웨어 이다.
      - 비동기 작업을 다루며, 특정 작업을 나중에 하도록 미루기 위해 함수형태로 감싼것이다.
    - [리덕스 ?](https://velopert.com/3528)
      - JavaScript 어플리케이션에서 데이터 교류 및 state관리를 쉽고 효율적으로 하게 해주는 도구 !
      - store: React.js 프로젝트에서 사용하는 모든 동적 데이터들을 담아두는 곳 입니다.
      - action: 어떤 변화가 일어나야 할 지 나타내는 객체입니다.
      - reducer: action 객체를 받았을 때, 데이터를 어떻게 바꿀지 처리할지 정의하는 객체입니다.
- [비동기 통신](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
    - 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성
- 콜백 함수
    - 비동기 통신이 끝난 후에 수행되어야 하는 코드를, Callback함수에 정의한다.
    - Callback함수가 연속해서 사용되다보면, 가독성도 떨어지고 변경도 어려워진다.., 콜백 지옥이 발생한다.
- 콜백 지옥을 해결하는 2가지 방법
    - [Promise](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
        - 프로미스는 3가지 상태를 가지며 처리된다.
          - Pending(대기): 비동기 처리 로직이 완료되지 않은 상태 
            - new Promise()를 호출하면 대기(Pending)상태가 된다.
            - new Promise()메서드를 호출할 때, 콜백 함수를 선언할 수 있다.
            - 콜백 함수의 인자는 resolve, reject이다.
          - Fullfilled(이행 또는 완료) : 비동기 처리가 완료되어 Promise가 결과 값을 반환해준 상태
            - 콜백 함수의 인자 resolve()를 실행하면 이행(Fullfilled)상태가 된다.
            - 이행 상태가 되면 then()을 이용하여 처리 결과 값을 받을 수 있다.
            - then()메서드를 호출하고 나면 새로운 프로미스 객체가 반환된다. ( 따라서 여러 개의 프로미스를 연결하여 사용할 수 있다. )
          - Rejected(실패)
            - 콜백 함수의 2번째 인자 reject()를 호출하면 실패(Rejected)상태가 된다.
            - 실패 상태가 되면 실패한 이유를 catch()로 받을 수 있다.
            - 실패처리를 then()의 두 번째 인자로 error처리 함수를 정의하여 처리할 수도 있다. 하지만 이 경우 Fullfilled상태의 error처리가 정상적으로 수행되지 않는 경우가 존재하기 때문에 catch사용을 권장.
                    
    - [Async](https://joshua1988.github.io/web-development/javascript/js-async-await/)
      - 콜백 함수와 프로미스의 단점을 보완하여, 가독성을 높인 코드를 작성할 수 있게 도와준다.
      - ``` 
        async function 함수명() {
            await 비동기_처리_메서드_명();
        }
        ```
        과 같이 사용한다.
      - 예외 처리방법은 try catch이다.

 - [자바스크립트 비 구조화 할당 ??](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    
- Hook ? [참조](https://ko.reactjs.org/docs/hooks-intro.html)
## Node.js
- Node.js 개념공부 -> [(링크)](https://velopert.com/133)
- 구글 Chrome의 자바스크립트 엔진(V8 Engine)에 기반하여 만들어진 ServerSide플랫폼.
- 웹서버가 아니다. HTTP 서버를 직접 작성해야 함.
- Node.js는 그저 코드를 실행할 수 있는 하나의 방법에 불과한 JavaScript런타임일 뿐.
