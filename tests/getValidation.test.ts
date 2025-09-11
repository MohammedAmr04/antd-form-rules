import { configValidation } from '../src/core/configValidation';
import { getValidation } from '../src/core/getValidation';
import type { RuleObject } from 'antd/es/form';
import { FieldType } from '../src/types';

enum TestFields {
  text = 'text',
  email = 'email',
  password = 'password',
  number = 'number',
  date = 'date',
}

describe('getValidation', () => {
  beforeEach(() => {
    configValidation({
      [TestFields.text]: {
        rules: [
          { required: true, message: 'Username is required' } as RuleObject,
          { min: 3, message: 'At least 3 characters' } as RuleObject,
        ],
      },
      [TestFields.email]: {
        rules: [{ type: 'email', message: 'Invalid email' } as RuleObject],
      },
    });
  });

  it('should return rules for text field', () => {
    const rules = getValidation(FieldType.text) as RuleObject[];
    expect(rules).toHaveLength(2);
    expect(rules[0].message).toBe('Username is required');
    expect(rules[1].min).toBe(3);
  });

  it('should return rules for email field', () => {
    const rules = getValidation(FieldType.email) as RuleObject[];
    expect(rules).toHaveLength(1);
    expect(rules[0].message).toBe('Invalid email');
  });

  it('should merge extraRules if provided', () => {
    const extraRule = { max: 10, message: 'Too long' } as RuleObject;
    const rules = getValidation(FieldType.text, [extraRule]) as RuleObject[];
    expect(rules).toHaveLength(3);
    expect(rules[2].max).toBe(10);
  });

  it('should return empty array if no rules exist', () => {
    const rules = getValidation('nonExistingField' as any) as RuleObject[];
    expect(rules).toEqual([]);
  });
});
