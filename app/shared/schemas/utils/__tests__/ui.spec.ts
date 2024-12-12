import { describe, it } from 'vitest';
import { zUis, zUiSchema } from '../ui';

describe('zUiSchema', () => {
  it('zUiSchema: 正常なケース', ({ expect }) => {
    const validValues = ['shadcn/ui', 'MUI', 'Chakra UI', 'Mantine'];
    validValues.map((value) => {
      expect(zUiSchema.parse(value)).toBe(value);
    });
  });

  it('zUiSchema: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidValues = ['無効なデータ', '無効な企画'];
    invalidValues.map((value) => {
      expect(() => zUiSchema.parse(value)).toThrow();
    });
  });
});

describe('zUis', () => {
  it('zUis: 正常なケース', ({ expect }) => {
    const validValues = ['shadcn/ui', 'MUI', 'Chakra UI', 'Mantine'];
    expect(zUis.parse(validValues)).toEqual(validValues);
  });

  it('zUis: 不正なデータが含まれる時、エラーを投げる', ({ expect }) => {
    const invalidValues = ['shadcn/ui', '無効なデータ'];
    expect(() => zUis.parse(invalidValues)).toThrow();
  });
});
