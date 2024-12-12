import { z } from 'zod';

export const zRepositorySchema = z.object({
  repository: z.string().url(),
  description: z.string(),
});

export const zRepositories = z.array(zRepositorySchema);

export type Repository = z.infer<typeof zRepositorySchema>;

export type Repositories = z.infer<typeof zRepositories>;
