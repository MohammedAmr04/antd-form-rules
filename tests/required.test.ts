import { required } from '../src/rules/required';
import type { RuleObject } from 'antd/es/form';

describe('required rule', () => {
  it('should set required to true', () => {
    const rule = required() as RuleObject;
    expect(rule.required).toBe(true);
  });

  it('should return default message when not provided', () => {
    const rule = required() as RuleObject;
    expect(rule.message).toBe('This field is required');
  });

  it('should use custom message when provided', () => {
    const rule = required('Custom error') as RuleObject;
    expect(rule.message).toBe('Custom error');
  });
});
