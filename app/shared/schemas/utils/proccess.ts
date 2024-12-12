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

export type Process = z.infer<typeof zProcessSchema>;
