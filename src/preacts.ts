import * as preact from "preact";

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
} from "preact/hooks";

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

import * as CSS from "./css";
const css = CSS.css;

import register from 'preact-custom-element';

// https://github.com/molefrog/wouter
import * as _wouter from "wouter-preact";
import * as _wouterUseLocation from "wouter-preact/use-location"; 
import makeMatcher from "wouter-preact/matcher";

const wouter = {
  makeMatcher,
  ..._wouterUseLocation,
  ..._wouter,
};

export {
  preact,
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
  // css render, classNames
  css,
  CSS,
  // wouter
  wouter,
};