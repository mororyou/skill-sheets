import { z } from 'zod';

export const zTestingSchema = z
  .union([z.literal('Jest'), z.literal('Vitest'), z.literal('React Testing Library'), z.literal('Storybook')])
  .readonly();

export const zTestings = z.array(zTestingSchema);

export type Testing = z.infer<typeof zTestingSchema>;

export type Testings = z.infer<typeof zTestings>;
