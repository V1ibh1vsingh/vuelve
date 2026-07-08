/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable valid-typeof */

import { PropType } from 'vue'

type Data = Record<string, unknown>

type DefaultFactory<T> = (props: Data) => T | null | undefined

interface PropOptions<T = any, D = T> {
  type?: PropType<T> | true
  required?: boolean
  default?: D | DefaultFactory<D> | null | undefined | object
  validator?(value: unknown, props: Data): boolean
}

export const isFunction = (val: unknown): val is Function => { throw new Error("STUB"); }

export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)

export function isPropOptions(value: any): value is PropOptions {
    throw new Error("STUB");
}
