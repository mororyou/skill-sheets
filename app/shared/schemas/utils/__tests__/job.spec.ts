import { describe, it } from 'vitest';
import { zJobSchema } from '../job';

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
