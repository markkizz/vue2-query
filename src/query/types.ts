import type {
  QueryKey,
  QueryObserverOptions,
  InfiniteQueryObserverOptions,
} from '@tanstack/query-core';

// export type MaybeRef<T> = Ref<T> | T;
// export type MaybeRefDeep<T> = T extends Function
//   ? T
//   : MaybeRef<
//       T extends object
//         ? {
//             [Property in keyof T]: MaybeRefDeep<T[Property]>;
//           }
//         : T
//     >;

export type WithQueryClientKey<T> = T & { queryClientKey?: string };

// A Vue version of QueriesObserverOptions from "react-query/types/core"
// Accept refs as options
// export type VueQueryObserverOptions<
//   TQueryFnData = unknown,
//   TError = unknown,
//   TData = TQueryFnData,
//   TQueryData = TQueryFnData,
//   TQueryKey extends QueryKey = QueryKey
// > = {
//   [Property in keyof QueryObserverOptions<
//     TQueryFnData,
//     TError,
//     TData,
//     TQueryData,
//     TQueryKey
//   >]: Property extends 'queryFn'
//     ? QueryObserverOptions<
//         TQueryFnData,
//         TError,
//         TData,
//         TQueryData,
//         UnwrapRef<TQueryKey>
//       >[Property]
//     : MaybeRef<
//         QueryObserverOptions<
//           TQueryFnData,
//           TError,
//           TData,
//           TQueryData,
//           TQueryKey
//         >[Property]
//       >;
// };
