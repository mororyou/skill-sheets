import { z } from 'zod';
import { zCommonField } from './common';
import { zEfforts } from './utils/effort';
import { zProcessSchema } from './utils/proccess';
import { zProjectTypes } from './utils/project-type';
import { zRepositories } from './utils/repository';
import { zTeamSchema } from './utils/team';
import { zTechnologySchema } from './utils/technology';

export const zSkillSheetSchema = z
  .object({
    site: z.string().url().nullish(),
    repositories: zRepositories.nullish(),
    types: zProjectTypes,
    from_date: z.string(),
    to_date: z.string().nullish(),
    term: zTeamSchema,
    process: zProcessSchema,
    technology: zTechnologySchema,
    overview: z.string(),
    efforts: zEfforts.nullish(),
  })
  .merge(zCommonField);

export const zSkillSheets = z.object({
  contents: z.array(zSkillSheetSchema),
  totalCount: z.number(),
  offset: z.number(),
  limit: z.number(),
});

export type SkillSheet = z.infer<typeof zSkillSheetSchema>;
