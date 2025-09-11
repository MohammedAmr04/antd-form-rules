import type { Rule } from 'antd/es/form';
import { validationConfig } from './configValidation';
import { FieldType } from '../types';

/**
 * Get validation rules for a specific field
 * @param field field key (enum or string literal)
 * @param extraRules optional additional rules to merge
 * @returns AntD rules array
 */
export function getValidation(field: FieldType, extraRules?: Rule[]): Rule[] {
  const key = field as keyof typeof validationConfig;
  console.log(key);
  const defaultRules = validationConfig[key]?.rules || [];
  console.log(defaultRules);
  return extraRules ? [...defaultRules, ...extraRules] : defaultRules;
}
