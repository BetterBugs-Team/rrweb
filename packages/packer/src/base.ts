import type { eventWithTime } from '@betterbugs/types';

export type eventWithTimeAndPacker = eventWithTime & {
  v: string;
};

export const MARK = 'v1';
