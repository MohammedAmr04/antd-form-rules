import { minLength } from '../src/rules/minLength';
import type { RuleObject } from 'antd/es/form';

describe('minLength rule', () => {
  it('should create a rule with the correct min length', () => {
    const rule = minLength(5) as RuleObject;
    expect(rule.min).toBe(5);
  });

  it('should use default message if no custom message is provided', () => {
    const rule = minLength(3) as RuleObject;
    expect(rule.message).toBe('Minimum 3 characters required');
  });

  it('should use custom message if provided', () => {
    const rule = minLength(4, 'Custom error message') as RuleObject;
    expect(rule.message).toBe('Custom error message');
  });
});
