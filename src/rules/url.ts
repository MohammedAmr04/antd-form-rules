import type { Rule } from 'antd/es/form';

export const url = (message = 'Please enter a valid url'): Rule => ({
  type: 'url',
  message,
});
