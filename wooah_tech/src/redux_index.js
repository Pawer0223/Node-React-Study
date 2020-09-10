import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "./selfRedux"

const INCREMENT = "increment";
const RESET = "reset";


function reducer(state = {}, action) { // 초기에 count 속성이 없기 때문에 기본 state를 초기화 state = {}로 
  if (action.type === "increment") {
    return {
      ...state, // 기존상태 복사
      count: state.count ? state.count + 1 : 1
    }
  } else if (action.type === RESET) {
    return {
      ...state,
      count: action.resetCount
    }
  }
  return state;
}

// 이 함수가 호출되면 redux의 상태가 변경됬다는 뜻이다.
function update() {
  console.log(store.getState());
}

// 저장소가 될 객체 생성하면서, 상태를 변경하는 함수를 인자로 전달.
const store = createStore(reducer);

// 상태 변경을 알려주는 함수를 subscribe
store.subscribe(update);

// dispatch에 type이 지정된 object를 넘기면서, 내부적으로 reducer가 호출 됨.
store.dispatch({ type: "increment" }); // 1
store.dispatch({ type: "increment" }); // 2

// 아.. 매번 type : "increment" 귀찮아.. 상수화 하자..
store.dispatch({ type: INCREMENT }); // 3
store.dispatch({ type: INCREMENT }); // 4

// 아.. 매번 객체생성해서 type속성 넣는것 조차도 귀찮아.. 함수로 만들자..
function actionCreator(type, data) {
  return {
    ...data, // 기존객체를 번저 펼치고
    type: type // 뒤에껀 overwrite 되도록
  };
}
store.dispatch(actionCreator(INCREMENT)); // 5
store.dispatch(actionCreator(INCREMENT)); // 6

// 아.. 맨날 store에 있는 dispatch를 쓰는것조차 귀찮아.. 함수로 만들자..
function increment() {
  store.dispatch(actionCreator(INCREMENT));
}

increment(); // 7
increment(); // 8

function reset() {
  store.dispatch(actionCreator(RESET, {resetCount : 10}));
}

reset(); // 10
increment(); // 11

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
