import { describe, it } from 'vitest';
import { zCmss, zCmsSchema } from '../cms';
describe('zCmsSchema', () => {
  it('zCmsSchema: 正常なケース', ({ expect }) => {
    const validValues = ['WordPress', 'microCMS', 'Contentful'];
    validValues.forEach((value) => {
      expect(zCmsSchema.parse(value)).toBe(value);
    });
  });
  it('zCmsSchema: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidValues = ['WordPresse', 'microCMSs', 'Node', ''];
    invalidValues.forEach((value) => {
      expect(() => zCmsSchema.parse(value)).toThrow();
    });
  });
});

describe('zCmss', () => {
  it('zCmss: 正常なケース', ({ expect }) => {
    const validArray = ['WordPress', 'microCMS', 'Contentful'];
    expect(zCmss.parse(validArray)).toEqual(validArray);
  });
  it('zCmss: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidArray = ['WordPress', 'microCMS', 'Contentful', 'Node'];
    expect(() => zCmss.parse(invalidArray)).toThrow();
  });
});
