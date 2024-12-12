import { describe, it } from 'vitest';
import { zTestings, zTestingSchema } from '../testing';

describe('zTestingSchema', () => {
  it('zTestingSchema: 正常なケース', ({ expect }) => {
    const validValues = ['Jest', 'Vitest', 'React Testing Library', 'Storybook'];
    validValues.map((value) => {
      expect(zTestingSchema.parse(value)).toBe(value);
    });
  });

  it('zProjectTypeSchema: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidValues = ['無効なデータ', '無効な企画'];
    invalidValues.map((value) => {
      expect(() => zTestingSchema.parse(value)).toThrow();
    });
  });
});

describe('zTestings', () => {
  it('zTestings: 正常なケース', ({ expect }) => {
    const validValues = ['Jest', 'Vitest', 'React Testing Library', 'Storybook'];
    expect(zTestings.parse(validValues)).toEqual(validValues);
  });

  it('zTestings: 不正なデータが含まれる時、エラーを投げる', ({ expect }) => {
    const invalidValues = ['Jest', '無効なデータ'];
    expect(() => zTestings.parse(invalidValues)).toThrow();
  });
});
