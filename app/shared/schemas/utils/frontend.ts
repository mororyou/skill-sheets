import { z } from 'zod';

export const zFrontendSchema = z
  .union([
    z.literal('TypeScript'),
    z.literal('JavaScript'),
    z.literal('React'),
    z.literal('Vue'),
    z.literal('Vite'),
    z.literal('Next.js'),
    z.literal('Remix.js'),
    z.literal('tRPC'),
    z.literal('Auth.js'),
    z.literal('jQuery'),
  ])
  .readonly();

export const zFrontends = z.array(zFrontendSchema);

export type Frontend = z.infer<typeof zFrontendSchema>;

export type Frontends = z.infer<typeof zFrontends>;
