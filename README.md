# antd-form-rules-lib

A lightweight validation library for **Ant Design Forms**. Centralizes all form validation rules in one place and allows reusable, flexible, and easy-to-maintain validations across your project.

---

## Features

- ✅ **Required**: Make fields mandatory
- ✅ **Email**: Validate email format
- ✅ **Min/Max Length**: Check string lengths
- ✅ **Pattern**: Custom regex validation
- ✅ **Confirm Password**: Match password and confirm password fields
- ✅ **Strong Password**: Enforce strong password rules
- ✅ **Extra Rules**: Easily merge extra rules per field without modifying the main config

---

## Installation

```bash
npm install antd-form-rules-lib
# or
yarn add antd-form-rules-lib
```

---

## Quick Start

### 1. Configure Validation

Create a config file (e.g. `validationConfig.ts`):

```ts
import { strongPassword, email, required } from 'antd-form-rules-lib';
import type { ValidationConfig } from 'antd-form-rules-lib';

const validationConfig: ValidationConfig = {
  email: { rules: [required(), email()] },
  password: { rules: [required(), strongPassword()] },
};

export default validationConfig;
```

### 2. Set Up Global Validation (App or Form Init)

```tsx
// app.tsx
import { configValidation } from 'antd-form-rules-lib';
import { validationConfig } from './components/configValidation';

const App = () => {
  configValidation(validationConfig);

  return <div>App</div>;
};

export default App;
```

### 3. Use getValidation in Your Form

```tsx
import { Form, Input } from 'antd';
import { getValidation } from 'antd-form-rules-lib';

export default function RegisterForm() {
  return (
    <Form>
      <Form.Item label="Email" name="email" rules={getValidation('email')}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={getValidation('password')}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  );
}
```

---

## API Reference

### Validation Rule Creators

- `required(message?)` — Field is required
- `email(message?)` — Validates email format
- `minLength(min, message?)` — Minimum string length
- `maxLength(max, message?)` — Maximum string length
- `pattern(regex, message)` — Custom regex validation
- `strongPassword(message?)` — Strong password enforcement
- `confirmPassword(form, fieldName, message?)` — Password confirmation
- `numberRange(min, max, message?)` — Number range validation
- `url(message?)` — URL validation

> See [src/rules/](src/rules/) for all available rules and their options.

### Core Functions

- `configValidation(config)` — Register global validation config
- `getValidation(field, extraRules?)` — Get rules for a field (with optional extra rules)

---

## Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests.
