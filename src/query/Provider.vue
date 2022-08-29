<template>
  <span>
    <slot />
  </span>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import { QueryClient } from '@tanstack/query-core';
import QueryContants from './constants';
import Client from './client';

@Component
export default class QueryClientProvider extends Vue {
  @Provide(QueryContants.DEFAULT_CLIENT_KEY)
  client: QueryClient = Client
}
</script>
