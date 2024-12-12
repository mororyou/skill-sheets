import { z } from 'zod';

export const zTeamSchema = z
  .object({
    fieldId: z.literal('teams'),
    director: z.number().nullish(),
    engineer: z.number().nullish(),
    designer: z.number().nullish(),
    programmer: z.number().nullish(),
  })
  .readonly();

export type Team = z.infer<typeof zTeamSchema>;
