import { useCallback, useContext, useDebugValue, useEffect, useErrorBoundary, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
import htm from "htm";
import { Signal, batch, computed, effect, signal, untracked, useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { Component, h, html, render } from "htm/preact";
import { css } from "./css";
import register from 'preact-custom-element';
import * as _wouter from "wouter-preact";
import makeMatcher from "wouter-preact/matcher";
declare const wouter: {
    Route<T extends _wouter.DefaultParams = undefined, RoutePath extends string = string>(props: _wouter.RouteProps<T, RoutePath>): import("preact").VNode<any>;
    Redirect<H extends _wouter.BaseLocationHook = _wouter.LocationHook>(props: _wouter.RedirectProps<H>, context?: any): import("preact").VNode<any>;
    Link<H_1 extends _wouter.BaseLocationHook = _wouter.LocationHook>(props: _wouter.LinkProps<H_1>, context?: any): import("preact").VNode<any>;
    useRouter(): _wouter.RouterObject;
    useRoute<T_1 extends _wouter.DefaultParams = undefined, RoutePath_1 extends string = string>(pattern: RoutePath_1): _wouter.Match<T_1 extends _wouter.DefaultParams ? T_1 : _wouter.ExtractRouteParams<RoutePath_1>>;
    useLocation<H_2 extends _wouter.BaseLocationHook = _wouter.LocationHook>(): ReturnType<H_2>;
    useParams<T_2 extends _wouter.DefaultParams = _wouter.DefaultParams>(): T_2;
    Switch: import("preact").FunctionComponent<_wouter.SwitchProps>;
    Router: import("preact").FunctionComponent<_wouter.RouterProps>;
    useLocationProperty: <S extends string | number | bigint | boolean | symbol>(fn: () => S, ssrFn?: () => S) => S;
    useSearch: () => string;
    usePathname: (options?: {
        ssrPath?: string;
    }) => string;
    navigate: (to: string | URL, options?: {
        replace?: boolean;
    }) => void;
    default: _wouter.LocationHook;
    makeMatcher: typeof makeMatcher;
};
export { htm, useCallback, useContext, useDebugValue, useEffect, useErrorBoundary, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState, Signal, batch, computed, effect, signal, untracked, useComputed, useSignal, useSignalEffect, Component, h, html, render, register, css, wouter, };
