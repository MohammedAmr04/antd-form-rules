import { numberRange } from '../src/rules/numberRange';
import type { RuleObject } from 'antd/es/form';

describe('numberRange rule', () => {
  it('should set correct min and max', () => {
    const rule = numberRange(1, 10) as RuleObject;
    expect(rule.min).toBe(1);
    expect(rule.max).toBe(10);
  });

  it("should set type to 'number'", () => {
    const rule = numberRange(1, 10) as RuleObject;
    expect(rule.type).toBe('number');
  });

  it('should return default message when not provided', () => {
    const rule = numberRange(1, 10) as RuleObject;
    expect(rule.message).toBe('Value must be between 1 and 10');
  });

  it('should use custom message when provided', () => {
    const rule = numberRange(1, 10, 'Custom error') as RuleObject;
    expect(rule.message).toBe('Custom error');
  });

  it('should handle edge cases (min=max)', () => {
    const rule = numberRange(5, 5) as RuleObject;
    expect(rule.min).toBe(5);
    expect(rule.max).toBe(5);
  });
});
