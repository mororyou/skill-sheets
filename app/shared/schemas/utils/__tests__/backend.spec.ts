import { describe, it } from 'vitest';
import { zBackends, zBackendSchema } from '../backend';

describe('zBackendSchema', () => {
  it('zBackendSchema: 正常なケース', ({ expect }) => {
    const validValues = ['php', 'Laravel', 'CakePHP', 'Express'];
    validValues.forEach((value) => {
      expect(zBackendSchema.parse(value)).toBe(value);
    });
  });

  it('zBackendSchema: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidValues = ['Python', 'Django', 'Node', ''];
    invalidValues.forEach((value) => {
      expect(() => zBackendSchema.parse(value)).toThrow();
    });
  });
});

describe('zBackendSchemas', () => {
  it('zBackends: 正常なケース', ({ expect }) => {
    const validArray = ['php', 'Laravel', 'CakePHP', 'Express'];
    expect(zBackends.parse(validArray)).toEqual(validArray);
  });

  it('zBackends: 不正なデータが含まれる時、エラーを投げる', ({ expect }) => {
    const invalidArray = ['php', 'Django', 'Express'];
    expect(() => zBackends.parse(invalidArray)).toThrow();
  });
});
