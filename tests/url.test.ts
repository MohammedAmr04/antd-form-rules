import { url } from '../src/rules/url';
import type { RuleObject } from 'antd/es/form';

describe('url rule', () => {
  it("should return type 'url'", () => {
    const rule = url() as RuleObject;
    expect(rule.type).toBe('url');
  });

  it('should return default message when not provided', () => {
    const rule = url() as RuleObject;
    expect(rule.message).toBe('Please enter a valid url');
  });

  it('should use custom message when provided', () => {
    const rule = url('Custom error') as RuleObject;
    expect(rule.message).toBe('Custom error');
  });
});
