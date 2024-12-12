import { z } from 'zod';

export const zStyleSchema = z
  .union([z.literal('TailwindCSS'), z.literal('SCSS'), z.literal('Bootstrap'), z.literal('CSS')])
  .readonly();

export const zStyles = z.array(zStyleSchema);

export type Style = z.infer<typeof zStyleSchema>;

export type Styles = z.infer<typeof zStyles>;
