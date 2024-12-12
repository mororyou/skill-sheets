import { z } from 'zod';

export const zEffortSchema = z.object({
  title: z.string(),
  issue: z.string().nullish(),
  devise: z.string().nullish(),
  results: z.string().nullish(),
});

export const zEfforts = z.array(zEffortSchema);

export type Effort = z.infer<typeof zEffortSchema>;

export type Efforts = z.infer<typeof zEfforts>;
