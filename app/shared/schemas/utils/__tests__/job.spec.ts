import { describe, it } from 'vitest';
import { zJobs, zJobSchema } from '../job';

describe('zJobSchema', () => {
  it('zJobSchema: 正常なケース', ({ expect }) => {
    const validValues = ['バックエンド', 'フロントエンド', 'インフラ', 'アプリ開発', 'その他'];
    validValues.map((value) => {
      expect(zJobSchema.parse(value)).toBe(value);
    });
  });

  it('zJobSchema: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidValues = ['Frontend', 'Backend', 'CMS', 'Etc', 'Node'];
    invalidValues.map((value) => {
      expect(() => zJobSchema.parse(value)).toThrow();
    });
  });
});

describe('zJobs', () => {
  it('zJobs: 正常なケース', ({ expect }) => {
    const validArray = ['バックエンド', 'フロントエンド', 'インフラ', 'アプリ開発', 'その他'];
    expect(zJobs.parse(validArray)).toEqual(validArray);
  });

  it('zJobs: 不正なデータが含まれる時、エラーを投げる', ({ expect }) => {
    const invalidArray = ['バックエンド', 'フロントエンド', 'インフラ', 'アプリ開発', 'その他', '無効なデータ'];
    expect(() => zJobs.parse(invalidArray)).toThrow();
  });
});
