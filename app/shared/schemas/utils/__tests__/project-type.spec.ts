import { describe, it } from 'vitest';
import { zProjectTypes, zProjectTypeSchema } from '../project-type';

describe('zProjectTypeSchema', () => {
  it('zProjectTypeSchema: 正常なケース', ({ expect }) => {
    const validValues = ['Webサービス', 'アプリ開発', '自社開発', '受託開発', '業務システム'];
    validValues.map((value) => {
      expect(zProjectTypeSchema.parse(value)).toBe(value);
    });
  });

  it('zProjectTypeSchema: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidValues = ['無効なデータ', '無効な企画'];
    invalidValues.map((value) => {
      expect(() => zProjectTypeSchema.parse(value)).toThrow();
    });
  });
});

describe('zProjectTypes', () => {
  it('zProjectTypes: 正常なケース', ({ expect }) => {
    const validValues = ['Webサービス', 'アプリ開発', '自社開発', '受託開発', '業務システム'];
    expect(zProjectTypes.parse(validValues)).toEqual(validValues);
  });

  it('zProjectTypes: 不正なデータが含まれる時、エラーを投げる', ({ expect }) => {
    const invalidValues = ['Webサービス', '無効なデータ'];
    expect(() => zProjectTypes.parse(invalidValues)).toThrow();
  });
});
