import { describe, it } from 'vitest';
import { zEffortSchema, zEfforts } from '../effort';

describe('zEffortSchema', () => {
  it('should validate a correct effort object', ({ expect }) => {
    const validEffort = {
      title: 'Test Effort',
      issue: 'Issue 1',
      devise: 'Devise 1',
      results: 'Results 1',
    };
    expect(() => zEffortSchema.parse(validEffort)).not.toThrow();
  });

  it('should invalidate an incorrect effort object', ({ expect }) => {
    const invalidEffort = {
      title: 123, // title should be a string
      issue: 'Issue 1',
      devise: 'Devise 1',
      results: 'Results 1',
    };
    expect(() => zEffortSchema.parse(invalidEffort)).toThrow();
  });

  it('should allow nullish values for optional fields', ({ expect }) => {
    const effortWithNulls = {
      title: 'Test Effort',
      issue: null,
      devise: null,
      results: null,
    };
    expect(() => zEffortSchema.parse(effortWithNulls)).not.toThrow();
  });
});

describe('zEfforts', () => {
  it('should validate an array of correct effort objects', ({ expect }) => {
    const validEfforts = [
      {
        title: 'Test Effort 1',
        issue: 'Issue 1',
        devise: 'Devise 1',
        results: 'Results 1',
      },
      {
        title: 'Test Effort 2',
        issue: 'Issue 2',
        devise: 'Devise 2',
        results: 'Results 2',
      },
    ];
    expect(() => zEfforts.parse(validEfforts)).not.toThrow();
  });

  it('should invalidate an array with an incorrect effort object', ({ expect }) => {
    const invalidEfforts = [
      {
        title: 'Test Effort 1',
        issue: 'Issue 1',
        devise: 'Devise 1',
        results: 'Results 1',
      },
      {
        title: 123, // title should be a string
        issue: 'Issue 2',
        devise: 'Devise 2',
        results: 'Results 2',
      },
    ];
    expect(() => zEfforts.parse(invalidEfforts)).toThrow();
  });
});
