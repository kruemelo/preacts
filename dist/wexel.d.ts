export type StateObject = Record<string | number | symbol, any> | null;
export type SetState = (nextState: StateObject, replace?: boolean) => boolean;
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
/**
 *
 * @returns {StateApi}
 */
export declare const createState: (createState: CreateState) => StateApi;
export declare function useGlobal(objectToUse: StateObject, onChangeCallback?: (changedObject: StateObject) => void): [StateObject, (objectToSet: StateObject) => boolean];
export declare function getObjectStore(stateObject: StateObject): StateApi;
