import { describe, it } from 'vitest';
import { zTeamSchema } from '../team';

describe('zTeamSchema', () => {
  it('zTeamSchema: 正常なケース', ({ expect }) => {
    const validTeam = {
      fieldId: 'teams',
      director: 1,
      enginner: 2,
      designer: 3,
      programmer: 4,
    };
    expect(zTeamSchema.parse(validTeam)).toEqual(validTeam);
  });

  it('zTeamSchema: 不正なデータがあった場合エラーを投げる', ({ expect }) => {
    const invalidTeam = {
      fieldId: 'teams',
      director: 'not a number',
      enginner: 2,
      designer: 3,
      programmer: 4,
    };
    expect(() => zTeamSchema.parse(invalidTeam)).toThrow();
  });

  it('zTeamSchema: nullも正常にパースされる', ({ expect }) => {
    const nullableTeam = {
      fieldId: 'teams',
      director: null,
      enginner: null,
      designer: null,
      programmer: null,
    };
    expect(zTeamSchema.parse(nullableTeam)).toEqual(nullableTeam);
  });

  it('zTeamSchema: undefinedも正常にパースされる', ({ expect }) => {
    const undefinedTeam = {
      fieldId: 'teams',
      director: undefined,
      enginner: undefined,
      designer: undefined,
      programmer: undefined,
    };
    expect(zTeamSchema.parse(undefinedTeam)).toEqual(undefinedTeam);
  });
});
