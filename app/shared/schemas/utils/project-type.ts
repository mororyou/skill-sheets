import { z } from 'zod';

export const zProjectTypeSchema = z
  .union([
    z.literal('Webサービス'),
    z.literal('アプリ開発'),
    z.literal('自社開発'),
    z.literal('受託開発'),
    z.literal('業務システム'),
  ])
  .readonly();

export const zProjectTypes = z.array(zProjectTypeSchema);

export type ProjectType = z.infer<typeof zProjectTypeSchema>;

export type ProjectTypes = z.infer<typeof zProjectTypes>;
