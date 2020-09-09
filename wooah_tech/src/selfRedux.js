// store는 그냥 객체 , 객체를 만드는 함수
export function createStore(reducer){

    let state;

    const listeners = [];

    const getState = () => ({ ...state }); // ()는 값임을 표현.

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(fn => fn()); // listeners에 있는 알림함수를 모두 호출.
    };

    // 변경이 되었음을 밖으로 통지해주는 용도의 함수들을 redux내부에 저장한다.
    const subscribe = (fn) => {
        listeners.push(fn);
    }

    return {
        getState,
        dispatch,
        subscribe
    };
}