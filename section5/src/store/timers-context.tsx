import { ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
  name: string;
  duration: string;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

export const TimersContext = createContext<TimersContextValue | null>(null);

export const useTimersContext = () => {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error("TimersContext is null - that should not be the case");
  }

  return timersCtx;
};

type TimersContextProviderProps = {
  children: ReactNode;
};

type StartTimerAction = {
  type: "START_TIMER";
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type EndTimerAction = {
  type: "END_TIMER";
};

type Action = StartTimerAction | AddTimerAction | EndTimerAction;

const timersReducer = (state: TimersState, action: Action): TimersState => {
  if (action.type === "START_TIMER") {
    return { ...state, isRunning: true };
  }
  if (action.type === "END_TIMER") {
    return { ...state, isRunning: false };
  }
  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [
        ...state.timers,
        { name: action.payload.name, duration: action.payload.duration },
      ],
    };
  }

  return state;
};

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,

    addTimer(timerData) {
      dispatch({
        type: "ADD_TIMER",
        payload: timerData,
      });
    },
    startTimers() {
      dispatch({ type: "START_TIMER" });
    },
    stopTimers() {
      dispatch({ type: "END_TIMER" });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimersContextProvider;
