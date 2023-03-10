//Define return-type for actions that receive payload
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};
