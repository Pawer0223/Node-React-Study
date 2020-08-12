import {
    LOGIN_USER,
    REGISTER_USER
} from '../_actions/types';

// action의 return을 받는다.
// (previousState, action) => nextState
// 즉, 이전상태와 action을받아서, 다음상태를 넘김
export default function (state = {}, action) { // 언제 호출 ?
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload } //...state를 spread operator라고 한단다.. 받은걸 고대로 가져온다..
        case REGISTER_USER:
            return { ...state, register: action.payload }
        default:
            return state;
    }
}