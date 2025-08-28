import type { Rule } from 'antd/es/form';

/**
 * Minimum length validation
 * @param min minimum characters
 * @param message optional custom message
 * @returns AntD Rule
 */
export const minLength = (min: number, message?: string): Rule => ({
  min,
  message: message || `Minimum ${min} characters required`,
});
