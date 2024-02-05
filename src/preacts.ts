export * from "preact";
export { 
  CreateHandle,
  Dispatch,
  EffectCallback,
  Inputs,
  MutableRef,
  Reducer,
  Ref,
  StateUpdater,
  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useErrorBoundary,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "preact/hooks";

export * as htm from "htm";

export * from "@preact/signals";

export {
  Component,
  h,
  html,
  render,
} from "htm/preact";

import * as CSS from "./css";
const css = CSS.css;

export {
  css,
  CSS,
};

export * as register from 'preact-custom-element';

// https://github.com/molefrog/wouter
import * as _wouter from "wouter-preact";

import * as _wouterMemoryLocation from "wouter-preact/memory-location";
import * as _wouterBrowserLocation from "wouter-preact/use-browser-location";
import * as _wouterHashLocation from "wouter-preact/use-hash-location";

export const wouter = {
  ..._wouterMemoryLocation,
  ..._wouterBrowserLocation,
  ..._wouterHashLocation,
  ..._wouter,
};
