import type { Rule } from 'antd/es/form';
import type { FormInstance } from 'antd/es/form';

/**
 * Password confirmation validation
 * @param form form instance
 * @param fieldName field to match
 * @param message optional custom message
 * @returns AntD Rule
 */
export const confirmPassword = (
  form: FormInstance,
  fieldName: string,
  message: string = 'Passwords do not match',
): Rule => ({
  validator: (_, value) =>
    value === form.getFieldValue(fieldName)
      ? Promise.resolve()
      : Promise.reject(new Error(message)),
});
