// Type definitions for sp-tween.js
// Project: https://github.com/florentpoujol/tween.js/
// Origial definitions for sole's tween.js by: sunetos <https://github.com/sunetos>, jzarnikov <https://github.com/jzarnikov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "tWeen" {
  export var REVISION: string;
  export function getAll(): Tween[];
  export function removeAll(): void;
  export function add(tween:Tween): void;
  export function remove(tween:Tween): void;
  export function update(time?:number): boolean;

  export interface TweenCallback {
    ( object: Object ) => void;
  }

  export interface TweenUpdateCallback {
    ( object: Object, progression: number ) => void;
  }
  
  export class Tween {
    constructor(object?:any);
    from(object?:any): Tween;
    to(properties:any, duration?:number): Tween;
    duration(duration: number): Tween;
    start(time?:number): Tween;
    stop(): Tween;
    pause(): Tween;
    resume(): Tween;
    stopChainedTweens();
    getChainedTweens(): Array;
    removeChainedTweens(tween?: Tween): number;
    delay(amount:number): Tween;
    repeat(times: number): Tween;
    yoyo(enable: boolean): Tween;
    easing(easing: (k: number) => number): Tween;
    interpolation(interpolation: (v:number[], k:number) => number): Tween;
    chain(...tweens:Tween[]): Tween;
    onStart(callback: (object?: any) => void): Tween;
    onUpdate(callback: (object?: any) => void): Tween;
    onPause(callback: (object?: any) => void): Tween;
    onResume(callback: (object?: any) => void): Tween;
    onComplete(callback: (object?: any) => void): Tween;
    update(time: number): boolean;
  }
  export var Easing: TweenEasing;
  export var Interpolation: TweenInterpolation;
}

export interface TweenEasing {
  Linear: {
    None(k:number): number;
  };
  Quadratic: {
    In(k:number): number;
    Out(k:number): number;
    InOut(k:number): number;
  };
  Cubic: {
    In(k:number): number;
    Out(k:number): number;
    InOut(k:number): number;
  };
  Quartic: {
    In(k:number): number;
    Out(k:number): number;
    InOut(k:number): number;
  };
  Quintic: {
    In(k:number): number;
    Out(k:number): number;
    InOut(k:number): number;
  };
  Sinusoidal: {
    In(k:number): number;
    Out(k:number): number;
    InOut(k:number): number;
  };
  Exponential: {
    In(k:number): number;
    Out(k:number): number;
    InOut(k:number): number;
  };
  Circular: {
    In(k:number): number;
    Out(k:number): number;
    InOut(k:number): number;
  };
  Elastic: {
    In(k:number): number;
    Out(k:number): number;
    InOut(k:number): number;
  };
  Back: {
    In(k:number): number;
    Out(k:number): number;
    InOut(k:number): number;
  };
  Bounce: {
    In(k:number): number;
    Out(k:number): number;
    InOut(k:number): number;
  };
}

export interface TweenInterpolation {
  Linear(v:number[], k:number): number;
  Bezier(v:number[], k:number): number;
  CatmullRom(v:number[], k:number): number;

  Utils: {
    Linear(p0:number, p1:number, t:number): number;
    Bernstein(n:number, i:number): number;
    Factorial(n): number;
  };
}
