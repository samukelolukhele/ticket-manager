import { ChangeEvent, useReducer } from "react";

const useForm = (initialState: Record<string, unknown>) => {
  const reducer = (
    state: typeof initialState,
    payload: { field: string; value: string }
  ) => {
    return {
      ...state,
      [payload.field]: payload.value,
    };
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  return {
    state,
    bind: {
      onChange: handleChange,
    },
  };
};

export default useForm;
