import { z } from 'zod';

export const zBackendSchema = z
  .union([z.literal('php'), z.literal('Laravel'), z.literal('CakePHP'), z.literal('Express')])
  .readonly();

export const zBackends = z.array(zBackendSchema);

export type Backend = z.infer<typeof zBackendSchema>;

export type Backends = z.infer<typeof zBackends>;
