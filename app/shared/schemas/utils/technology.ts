import { z } from 'zod';
import { zBackends } from './backend';
import { zCmss } from './cms';
import { zEtcs } from './etc';
import { zFrontends } from './frontend';
import { zStyles } from './style';
import { zTestings } from './testing';
import { zUis } from './ui';

export const zTechnologySchema = z.object({
  fieldId: z.literal('frameworks'),
  frontend: zFrontends,
  backend: zBackends,
  ui: zUis,
  styles: zStyles,
  testing: zTestings,
  cms: zCmss,
  etc: zEtcs,
});
