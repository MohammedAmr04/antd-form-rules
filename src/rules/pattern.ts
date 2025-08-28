import type { Rule } from 'antd/es/form';

/**
 * Pattern (regex) validation
 * @param regex regex pattern
 * @param message custom message
 * @returns AntD Rule
 */
export const pattern = (regex: RegExp, message: string): Rule => ({
  pattern: regex,
  message,
});
