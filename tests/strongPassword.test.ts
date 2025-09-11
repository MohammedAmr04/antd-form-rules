import { strongPassword } from '../src/rules/strongPassword';
import type { RuleObject } from 'antd/es/form';

describe('strongPassword rule', () => {
  it('should set correct pattern', () => {
    const rule = strongPassword() as RuleObject;
    expect(rule.pattern).toBeInstanceOf(RegExp);
    if (rule.pattern) {
      expect(rule.pattern.toString()).toContain('(?=.*[a-z])');
    }
  });

  it('should return default message when not provided', () => {
    const rule = strongPassword() as RuleObject;
    expect(rule.message).toBe(
      'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character',
    );
  });

  it('should use custom message when provided', () => {
    const rule = strongPassword('Custom error') as RuleObject;
    expect(rule.message).toBe('Custom error');
  });
});
