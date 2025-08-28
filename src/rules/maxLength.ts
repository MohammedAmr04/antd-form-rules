import type { Rule } from 'antd/es/form';

/**
 * Maximum length validation
 * @param max maximum characters
 * @param message optional custom message
 * @returns AntD Rule
 */
export const maxLength = (max: number, message?: string): Rule => ({
  max,
  message: message || `Maximum ${max} characters allowed`,
});
