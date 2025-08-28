import type { Rule } from 'antd/es/form';

enum FieldType {
  text = 'text',
  email = 'email',
  password = 'password',
  number = 'number',
  date = 'date',
}

type ValidationConfig = Partial<
  Record<
    FieldType,
    {
      rules: Rule[];
      customRules?: Rule[];
    }
  >
>;
type FieldKey = FieldType | keyof typeof FieldType;

export { ValidationConfig, FieldType, FieldKey };
