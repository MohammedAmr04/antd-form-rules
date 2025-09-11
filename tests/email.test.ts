import { email } from '../src/rules/email';
import type { RuleObject } from 'antd/es/form';

describe('email rule', () => {
  it("should return type 'email'", () => {
    const rule = email() as RuleObject;
    expect(rule.type).toBe('email');
  });

  it('should return default message when not provided', () => {
    const rule = email() as RuleObject;
    expect(rule.message).toBe('Please enter a valid email');
  });

  it('should use custom message when provided', () => {
    const rule = email('Custom error') as RuleObject;
    expect(rule.message).toBe('Custom error');
  });
});
