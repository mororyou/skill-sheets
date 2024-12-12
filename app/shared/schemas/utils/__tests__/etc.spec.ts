import { describe, it } from 'vitest';
import { zEtcSchema, zEtcs } from '../etc';

describe('zEtcSchema', () => {
  it('zEtcSchema: 正常なケース', ({ expect }) => {
    const validValues = ['Turborepo', 'Git', 'GitHub', 'GitLab', 'Vercel', 'Docker', 'GitHub Actions'];
    validValues.map((value) => {
      expect(zEtcSchema.parse(value)).toBe(value);
    });
  });

  it('zEtcSchema: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidValues = ['不正なデータ', ''];
    invalidValues.forEach((value) => {
      expect(() => zEtcSchema.parse(value)).toThrow();
    });
  });
});

describe('zEtcs', () => {
  it('zEtcs: 正常なケース', ({ expect }) => {
    const validArray = ['Turborepo', 'Git', 'GitHub', 'GitLab', 'Vercel', 'Docker', 'GitHub Actions'];
    expect(zEtcs.parse(validArray)).toEqual(validArray);
  });

  it('zEtcs: 不正なデータが含まれる時、エラーを投げる', ({ expect }) => {
    const invalidArray = ['Turborepo', 'Git', 'GitHub', 'GitLab', 'Vercel', 'Docker', 'GitHub Actions', 'Python'];
    expect(() => zEtcs.parse(invalidArray)).toThrow();
  });
});
