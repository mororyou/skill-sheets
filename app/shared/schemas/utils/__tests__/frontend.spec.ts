import { describe, it } from 'vitest';
import { zFrontendSchema, zFrontends } from '../frontend';

describe('zFrontend', () => {
  it('zFrontend: 正常なケース', ({ expect }) => {
    const validValues = [
      'TypeScript',
      'JavaScript',
      'React',
      'Vue',
      'Vite',
      'Next.js',
      'Remix.js',
      'tRPC',
      'Auth.js',
      'jQuery',
    ];
    validValues.map((value) => {
      expect(zFrontendSchema.parse(value)).toBe(value);
    });
  });

  it('zFrontend: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidValues = ['不正なデータ', ''];
    invalidValues.map((value) => {
      expect(() => zFrontendSchema.parse(value)).toThrow();
    });
  });
});

describe('zFrontends', () => {
  it('zFrontends: 正常なケース', ({ expect }) => {
    const validArray = ['React', 'Next.js', 'Vite', 'Vue', 'tRPC', 'Remix.js'];
    expect(zFrontends.parse(validArray)).toEqual(validArray);
  });
  it('zFrontends: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidArray = ['React', 'Node'];
    expect(() => zFrontends.parse(invalidArray)).toThrow();
  });
});
