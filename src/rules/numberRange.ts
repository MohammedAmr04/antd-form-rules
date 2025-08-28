import type { Rule } from 'antd/es/form';

/**
 * Number range validation
 * @param min minimum value
 * @param max maximum value
 * @param message optional custom message
 * @returns AntD Rule
 */
export const numberRange = (
  min: number,
  max: number,
  message?: string,
): Rule => ({
  type: 'number',
  min,
  max,
  message: message || `Value must be between ${min} and ${max}`,
});
