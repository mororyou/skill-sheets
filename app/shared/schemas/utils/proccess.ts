import { z } from 'zod';

export const zProcessSchema = z
  .union([
    z.literal('企画'),
    z.literal('要件定義'),
    z.literal('設計'),
    z.literal('コーディング'),
    z.literal('テスト'),
    z.literal('運用/保守'),
    z.literal('その他'),
  ])
  .readonly();

export const zProcesses = z.array(zProcessSchema);

export type Process = z.infer<typeof zProcessSchema>;

export type Processes = z.infer<typeof zProcesses>;
