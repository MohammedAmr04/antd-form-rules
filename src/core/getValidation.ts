import type { Rule } from 'antd/es/form';
import { validationConfig } from './configValidation';
import { FieldKey } from '../types';

/**
 * Get validation rules for a specific field
 * @param field field key (enum or string literal)
 * @param extraRules optional additional rules to merge
 * @returns AntD rules array
 */
export function getValidation(field: FieldKey, extraRules?: Rule[]): Rule[] {
  const key = field as keyof typeof validationConfig;
  const defaultRules = validationConfig[key]?.rules ?? [];
  return extraRules ? [...defaultRules, ...extraRules] : defaultRules;
}
