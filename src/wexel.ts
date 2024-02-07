import { useState, useEffect } from "preact/hooks";

export type StateObject = Record<string | number | symbol, any> | null;

export type SetState = (partial: StateObject | Function, replace?: boolean) => boolean;

export type GetState = () => StateObject;

export type GetInitialState = () => StateObject;

export type Listener = (state: StateObject, previousState: StateObject) => void;

export type Unsubscribe = () => void;

export type Subscribe = (listener: Listener) => Unsubscribe;

export type CreateState = (set: SetState, get: GetState, api: StateApi) => StateObject;

export type Use = () => StateObject;

export type Commit = (partial?: StateObject) => void;

export interface StateApi {
  setState: SetState;
  getState: GetState;
  getInitialState: GetInitialState;
  subscribe: Subscribe;
  use: Use;
  commit: Commit;
}

const objectStore: WeakMap<StateObject, StateApi> = new WeakMap();

/**
 * 
 * @returns {StateApi}
 */
export const createState = (createState: CreateState): StateApi => {
  let state: StateObject;

  const listeners: Set<Listener> = new Set();

  const setState: SetState = (partial, replace = false) => {
    const nextState: StateObject = typeof partial === "function" 
      ? partial(state) 
      : partial;
    
    if (!Object.is(nextState, state)) {
      const previousState = state;

      if (replace ||
        typeof nextState !== "object" || 
        nextState === null
      ) {
        state = nextState;
      } else {
        state = Object.assign({}, state, nextState);
      }

      listeners.forEach((listener) => listener(state, previousState));

      return true;
    }

    return false;
  };

  const getState: GetState = () => state;
  
  const getInitialState: GetInitialState = () => initialState;
  
  const subscribe = (listener: Listener): Unsubscribe => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  };

  const use = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const unsubscribe = api.subscribe(() => {
        setCount(count + 1);
      });
      
      return () => {
        unsubscribe();
      };
    }, [state]);

    return state;
  }

  /**
   * commit the partial to the initialState
   */
  const commit = (partial: StateObject = state) => {
    Object.assign(initialState, partial);

    setState(partial)
  }

  const api: StateApi = { setState, getState, getInitialState, subscribe, use, commit };
  const initialState = state = createState(setState, getState, api);
  
  return api;
};

export function useGlobal(
  objectToUse: StateObject, 
  onChangeCallback: (changedObject: StateObject) => void
): [StateObject, (objectToSet: StateObject) => boolean] {
  const store = getObjectStore(objectToUse);
  const current = store.use();

  const set = (objectToSet: StateObject) => {
    if (store.setState(objectToSet)) {
      onChangeCallback?.(objectToSet)
    
      return true;
    }

    return false;
  };

  return [
    current, 
    set,
  ];
};

export function getObjectStore(stateObject: StateObject) {
  let store = objectStore.get(stateObject);

  if (!store) {
    store = createState(
      () => stateObject,
    );

    objectStore.set(stateObject, store);
  }

  return store;
} 