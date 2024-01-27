import {
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
} from "preact/hooks"

import htm from "htm";

import {
  Signal,
  batch,
  computed,
  effect,
  signal,
  untracked,
  useComputed,
  useSignal,
  useSignalEffect,
} from "@preact/signals";

// const html = htm.bind(h);
// import { html } from "htm/preact";
import {
  Component,
  h,
  html,
  render,
  // useCallback,
  // useContext,
  // useDebugValue,
  // useEffect,
  // useErrorBoundary,
  // useId,
  // useImperativeHandle,
  // useLayoutEffect,
  // useMemo,
  // useReducer,
  // useRef,
  // useState,
} from "htm/preact";

import {
  css,
} from "../css.js";

import register from 'preact-custom-element';

export {
  htm,
  // preact/hooks
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
  // @preact/signals
  Signal,
  batch,
  computed,
  effect,
  signal,
  untracked,
  useComputed,
  useSignal,
  useSignalEffect,
  // htm/preact
  Component,
  h,
  html,
  render,
  // preact-custom-element
  register,
  // css render
  css,
};