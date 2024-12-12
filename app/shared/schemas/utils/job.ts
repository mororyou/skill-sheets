import { z } from 'zod';

export const zJobSchema = z
  .union([
    z.literal('バックエンド'),
    z.literal('フロントエンド'),
    z.literal('インフラ'),
    z.literal('アプリ開発'),
    z.literal('その他'),
  ])
  .readonly();

export type Job = z.infer<typeof zJobSchema>;
