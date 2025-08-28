import type { Rule } from 'antd/es/form';

/**
 * Strong Password Validation
 * Password must contain:
 * - Minimum 8 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one number
 * - At least one special character (!@#$%^&*)
 *
 * @param message optional custom error message
 * @returns AntD Rule
 */
export const strongPassword = (
  message: string = 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character',
): Rule => ({
  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
  message,
});
