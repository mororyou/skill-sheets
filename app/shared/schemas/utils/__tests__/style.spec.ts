import { describe, it } from 'vitest';
import { zStyles, zStyleSchema } from '../style';

describe('zStyleSchema', () => {
  it('zStyleSchema: 正常なケース', ({ expect }) => {
    const validValues = ['TailwindCSS', 'SCSS', 'Bootstrap', 'CSS'];
    validValues.map((value) => {
      expect(zStyleSchema.parse(value)).toBe(value);
    });
  });

  it('zStyleSchema: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidValues = ['無効なデータ', '無効な企画'];
    invalidValues.map((value) => {
      expect(() => zStyleSchema.parse(value)).toThrow();
    });
  });
});

describe('zStyles', () => {
  it('zStyles: 正常なケース', ({ expect }) => {
    const validValues = ['TailwindCSS', 'SCSS', 'Bootstrap', 'CSS'];
    expect(zStyles.parse(validValues)).toEqual(validValues);
  });

  it('zStyles: 不正なデータが含まれる時、エラーを投げる', ({ expect }) => {
    const invalidValues = ['TailwindCSS', '無効なデータ'];
    expect(() => zStyles.parse(invalidValues)).toThrow();
  });
});
