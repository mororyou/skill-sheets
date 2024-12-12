import { z } from 'zod';

export const zUiSchema = z
  .union([z.literal('shadcn/ui'), z.literal('MUI'), z.literal('Chakra UI'), z.literal('Mantine')])
  .readonly();

export const zUis = z.array(zUiSchema);

export type Ui = z.infer<typeof zUiSchema>;

export type Uis = z.infer<typeof zUis>;
