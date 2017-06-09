

export interface UIState {

    userId: number;
    currentThreadId: number;
}

export const INITIAL_UI_STATE: UIState = {
  userId: undefined,
  currentThreadId: undefined
};
