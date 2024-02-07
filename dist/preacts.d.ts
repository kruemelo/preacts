export { AnyComponent, Attributes, ClassAttributes, Component, ComponentChild, ComponentChildren, ComponentClass, ComponentConstructor, ComponentFactory, ComponentProps, ComponentType, Consumer, ContainerNode, Context, ContextType, ErrorInfo, Fragment, FunctionComponent, FunctionalComponent, JSX, Key, Options, PreactConsumer, PreactContext, PreactDOMAttributes, PreactProvider, Provider, Ref, RefCallback, RefObject, RenderableProps, VNode, cloneElement, createContext, createElement, createRef, h, hydrate, isValidElement, options, render, toChildArray } from "preact";
export { CreateHandle, Dispatch, EffectCallback, Inputs, MutableRef, Reducer, StateUpdater, useCallback, useContext, useDebugValue, useEffect, useErrorBoundary, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState, } from "preact/hooks";
export * as htm from "htm";
export { ReadonlySignal, Signal, batch, computed, effect, signal, untracked, useComputed, useSignal, useSignalEffect, } from "@preact/signals";
export { html, } from "htm/preact";
import * as CSS from "./css";
declare const css: {
    (strings: TemplateStringsArray, ...values: any): string;
    render(rules: string): void;
    classNames(someClassNames: CSS.ClassNames): string;
};
export { css, CSS, };
export * as register from 'preact-custom-element';
import * as _wouter from "wouter-preact";
import * as _wouterMemoryLocation from "wouter-preact/memory-location";
import * as _wouterBrowserLocation from "wouter-preact/use-browser-location";
import * as _wouterHashLocation from "wouter-preact/use-hash-location";
export declare const wouter: {
    Route<T extends _wouter.DefaultParams = undefined, RoutePath extends string = string>(props: _wouter.RouteProps<T, RoutePath>): import("preact").VNode<any>;
    Redirect<H extends _wouter.BaseLocationHook = _wouterBrowserLocation.BrowserLocationHook>(props: _wouter.RedirectProps<H>, context?: any): null;
    Link<H_1 extends _wouter.BaseLocationHook = _wouterBrowserLocation.BrowserLocationHook>(props: _wouter.LinkProps<H_1>, context?: any): import("preact").VNode<any>;
    useRouter(): _wouter.RouterObject;
    useRoute<T_1 extends _wouter.DefaultParams = undefined, RoutePath_1 extends string = string>(pattern: RoutePath_1): _wouter.Match<T_1 extends _wouter.DefaultParams ? T_1 : import("regexparam").RouteParams<RoutePath_1>>;
    useLocation<H_2 extends _wouter.BaseLocationHook = _wouterBrowserLocation.BrowserLocationHook>(): ReturnType<H_2>;
    useSearch<H_3 extends _wouter.BaseSearchHook = _wouterBrowserLocation.BrowserSearchHook>(): ReturnType<H_3>;
    useParams<T_2 = undefined>(): T_2 extends string ? import("regexparam").RouteParams<T_2> : T_2 extends undefined ? _wouter.DefaultParams : T_2;
    Switch: import("preact").FunctionComponent<_wouter.SwitchProps>;
    Router: import("preact").FunctionComponent<_wouter.RouterProps>;
    navigate<S = any>(to: string, options?: {
        state: S;
    }): void;
    useHashLocation(options?: {
        ssrPath?: string;
    }): [string, typeof _wouterHashLocation.navigate];
    useLocationProperty: <S_1 extends _wouterBrowserLocation.Primitive>(fn: () => S_1, ssrFn?: () => S_1) => S_1;
    usePathname: (options?: {
        ssrPath?: string;
    }) => string;
    useHistoryState: <T_3 = any>() => T_3;
    useBrowserLocation: _wouterBrowserLocation.BrowserLocationHook;
    memoryLocation(options?: {
        path?: string;
        static?: boolean;
        record?: false;
    }): _wouterMemoryLocation.HookReturnValue;
    memoryLocation(options?: {
        path?: string;
        static?: boolean;
        record: true;
    }): _wouterMemoryLocation.HookReturnValue & _wouterMemoryLocation.StubHistory;
};
import * as _wexel from "./wexel";
export declare const wexel: {
    useGlobal(objectToUse: Record<string | number | symbol, any>, onChangeCallback?: (changedObject: Record<string | number | symbol, any>) => void): [Record<string | number | symbol, any>, (objectToSet: Record<string | number | symbol, any>) => boolean];
    getObjectStore(stateObject: Record<string | number | symbol, any>): _wexel.StateApi;
    createState: (createState: _wexel.CreateState) => _wexel.StateApi;
};
