import { describe, expect, it } from 'vitest';
import { cn } from '../utils';

describe('cn', () => {
  it('should merge class names correctly', () => {
    const result = cn('class1', 'class2');
    expect(result).toBe('class1 class2');
  });

  it('should handle conditional class names', () => {
    const result = cn('class1', false && 'class2', 'class3');
    expect(result).toBe('class1 class3');
  });

  it('should handle arrays of class names', () => {
    const result = cn(['class1', 'class2'], 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('should handle objects with truthy values', () => {
    const result = cn({ class1: true, class2: false, class3: true });
    expect(result).toBe('class1 class3');
  });

  it('should handle mixed inputs', () => {
    const result = cn('class1', ['class2', { class3: true, class4: false }], 'class5');
    expect(result).toBe('class1 class2 class3 class5');
  });
});
