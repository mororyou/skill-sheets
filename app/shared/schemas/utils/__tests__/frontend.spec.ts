import { describe, it } from 'vitest';
import { zFrontendSchema, zFrontends } from '../frontend';

describe('zFrontend', () => {
  it('zFrontend: 正常なケース', ({ expect }) => {
    const validValues = ['React', 'Vue', 'Vite', 'Next.js'];
    validValues.forEach((value) => {
      expect(zFrontendSchema.parse(value)).toBe(value);
    });
  });

  it('zFrontend: 不正なデータの時エラーを投げる', ({ expect }) => {
    const invalidValues = ['Svelte', 'Nuxt.js', 'Node'];
    invalidValues.forEach((value) => {
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
