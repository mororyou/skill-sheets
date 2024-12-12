import { z } from 'zod';

export const zCmsSchema = z.union([z.literal('WordPress'), z.literal('microCMS'), z.literal('Contentful')]).readonly();

export const zCmss = z.array(zCmsSchema);

export type Cms = z.infer<typeof zCmsSchema>;

export type Cmss = z.infer<typeof zCmss>;
