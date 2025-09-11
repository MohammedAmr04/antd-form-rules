import { pattern } from '../src/rules/pattern';
import type { RuleObject } from 'antd/es/form';

describe('pattern rule', () => {
  it('should set correct pattern', () => {
    const regex = /abc/;
    const rule = pattern(regex, 'Pattern error') as RuleObject;
    expect(rule.pattern).toBe(regex);
  });

  it('should use provided message', () => {
    const regex = /abc/;
    const rule = pattern(regex, 'Custom error') as RuleObject;
    expect(rule.message).toBe('Custom error');
  });

  it('should handle edge cases (empty pattern)', () => {
    const regex = /.*/;
    const rule = pattern(regex, 'Any string') as RuleObject;
    expect(rule.pattern).toBe(regex);
  });
});
