import { z } from 'zod';

export const zEtcSchema = z
  .union([
    z.literal('Turborepo'),
    z.literal('Git'),
    z.literal('GitHub'),
    z.literal('GitLab'),
    z.literal('Vercel'),
    z.literal('Docker'),
    z.literal('GitHub Actions'),
  ])
  .readonly();

export const zEtcs = z.array(zEtcSchema);

export type Etc = z.infer<typeof zEtcSchema>;

export type Etcs = z.infer<typeof zEtcs>;
