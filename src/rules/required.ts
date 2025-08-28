import { Rule } from 'antd/es/form';

/**
 * Validation rule for required fields in Ant Design forms.
 * @param message Custom error message (default: "This field is required")
 * @returns AntD Rule object
 */
export const required = (message: string = 'This field is required'): Rule => ({
  required: true,
  message,
});
