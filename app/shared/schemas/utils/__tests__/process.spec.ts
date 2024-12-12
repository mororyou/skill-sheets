import { describe, it } from 'vitest';
import { zProcesses, zProcessSchema } from '../proccess';

describe('zProcessSchema', () => {
  it('zProcessSchema: 正常なケース', ({ expect }) => {
    const validValues = ['企画', '要件定義', '設計', 'コーディング', 'テスト', '運用/保守', 'その他'];
    validValues.map((value) => {
      expect(zProcessSchema.parse(value)).toBe(value);
    });
  });

  it('zProcessSchema: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidValues = ['無効なデータ', '無効な企画'];
    invalidValues.map((value) => {
      expect(() => zProcessSchema.parse(value)).toThrow();
    });
  });
});

describe('zProcesses', () => {
  it('zProcesses: 正常なケース', ({ expect }) => {
    const validValues = ['企画', '要件定義', '設計', 'コーディング', 'テスト', '運用/保守', 'その他'];
    expect(zProcesses.parse(validValues)).toEqual(validValues);
  });

  it('zProcesses: 不正なデータが含まれる時、エラーを投げる', ({ expect }) => {
    const invalidValues = ['企画', '無効なデータ'];
    expect(() => zProcesses.parse(invalidValues)).toThrow();
  });
});
