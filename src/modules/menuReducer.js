// 액션 타입
const HANDLE = "menu/HANDLE";

// 액션 생성함수
export const handleMenu = () => ({ type: HANDLE });

// 초기 상태
const initialState = {
  open: false,
};

// 리듀서
export default function menu(state = initialState, action) {
  switch (action.type) {
    case HANDLE:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
}
