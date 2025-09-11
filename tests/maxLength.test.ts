import { maxLength } from '../src/rules/maxLength';
import type { RuleObject } from 'antd/es/form';

describe('maxLength rule', () => {
  it('should return correct max value', () => {
    const rule = maxLength(10) as RuleObject;
    expect(rule.max).toBe(10);
  });

  it('should return default message when not provided', () => {
    const rule = maxLength(10) as RuleObject;
    expect(rule.message).toBe('Maximum 10 characters allowed');
  });

  it('should use custom message when provided', () => {
    const rule = maxLength(10, 'Custom error') as RuleObject;
    expect(rule.message).toBe('Custom error');
  });

  it('should handle edge cases (max=0)', () => {
    const rule = maxLength(0) as RuleObject;
    expect(rule.max).toBe(0);
  });
});
