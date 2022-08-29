import { QueryKey } from '@tanstack/query-core';

/* eslint-disable import/prefer-default-export */
export function isQueryKey(value: unknown): value is QueryKey {
  return typeof value === 'string' || Array.isArray(value);
}
