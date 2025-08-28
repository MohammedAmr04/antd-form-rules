import type { Rule } from 'antd/es/form';

/**
 * Email validation
 * @param message optional custom message
 * @returns AntD Rule
 */
export const email = (
  message: string = 'Please enter a valid email',
): Rule => ({
  type: 'email',
  message,
});
