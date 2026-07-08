/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import {
  ref,
  watch,
  computed,
  watchEffect,
  WatchCallback,
  WatchEffect,
  ComputedRef,
  MethodOptions,
  ComputedOptions,
  ComponentObjectPropsOptions,
  Ref,
  reactive,
} from 'vue'
import cloneDeep from 'lodash.clonedeep'
import { isArray, isFunction, isPropOptions } from './utils.ts'
import {
  ComposableArrayProps,
  ComposableContext,
  ComposableObjectProps,
  ComposableReturn,
  ComposableWithoutProps,
  DeepApplyThisType,
} from './types-handling.ts'
import { vue3LifecycleHooks } from './lifecycle.ts'

type Composable<
  PropNames extends string,
  Props = {},
  Data = {},
  Computed extends ComputedOptions = ComputedOptions,
  Methods extends MethodOptions = MethodOptions,
  Args extends Record<string, any> = Record<string, any>
> =
  | DeepApplyThisType<
      ComposableWithoutProps<Props, Data, Computed, Methods>,
      ComposableContext<Props, Data, Computed, Methods, Args>
    >
  | DeepApplyThisType<
      ComposableArrayProps<PropNames, Data, Computed, Methods>,
      ComposableContext<Props, Data, Computed, Methods, Args>
    >
  | DeepApplyThisType<
      ComposableObjectProps<Props, Data, Computed, Methods>,
      ComposableContext<Props, Data, Computed, Methods, Args>
    >
function vuelve<
  Props = {},
  Data = {},
  Computed extends ComputedOptions = {},
  Methods extends MethodOptions = {},
  Args extends Record<string, any> = Record<string, any>
>(
  composable: DeepApplyThisType<
    ComposableWithoutProps<Props, Data, Computed, Methods>,
    ComposableContext<Props, Data, Computed, Methods, Args>
  >
): (args?: Args) => ComposableReturn<Data, Computed, Methods, Args>

function vuelve<
  Props extends string,
  Data,
  Computed extends ComputedOptions,
  Methods extends MethodOptions,
  Args extends Record<string, any> = Record<string, any>
>(
  composable: DeepApplyThisType<
    ComposableArrayProps<Props, Data, Computed, Methods>,
    ComposableContext<Props, Data, Computed, Methods, Args>
  >
): (args?: Args) => ComposableReturn<Data, Computed, Methods, Args>

function vuelve<
  Props extends ComponentObjectPropsOptions = {},
  Data = {},
  Computed extends ComputedOptions = {},
  Methods extends MethodOptions = {},
  Args extends Record<string, any> = Record<string, any>
>(
  composable: DeepApplyThisType<
    ComposableObjectProps<Props, Data, Computed, Methods>,
    ComposableContext<Props, Data, Computed, Methods, Args>
  >
): (args?: Args) => ComposableReturn<Data, Computed, Methods, Args>

function vuelve<
  PropNames extends string = string,
  Props = {},
  Data = {},
  Computed extends ComputedOptions = {},
  Methods extends MethodOptions = {},
  Args extends Record<string, any> = Record<string, any>
>(composable: Composable<PropNames, Props, Data, Computed, Methods, Args>) {
    throw new Error("STUB");
}

export default vuelve
