import Vue, { ComponentOptions } from 'vue';
import { DEFAULT_CLIENT_KEY } from './constants';
import { isQueryKey } from './utils';

const queryMixin: ComponentOptions<Vue> = {
  inject: {
    queryClient: {
      from: DEFAULT_CLIENT_KEY,
    },
  },
  data() {
    return {
      result: null,
    };
  },
  methods: {
    getQueryUnreffedOptions() {
      // let options;
      // if (!isQueryKey(arg1)) {
      //   // `useQuery(optionsObj)`
      //   options = arg1;
      // } else if (typeof arg2 === "function") {
      //   // `useQuery(queryKey, queryFn, optionsObj?)`
      //   options = { ...arg3, queryKey: arg1, queryFn: arg2 };
      // } else {
      //   // `useQuery(queryKey, optionsObj?)`
      //   options = { ...arg2, queryKey: arg1 };
      // }
      // return options as WithQueryClientKey<
      //   QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>
      // >;
    },
  },
};

export default queryMixin;
