# antd-form-rules-lib-lib

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

````bash
npm install antd-form-rules-lib
# or
yarn add antd-form-rules-lib

---

## 📖 Usage Example
```tsx
# // configValidation.ts


```
## 📖 Usage Example

### 1. Configure Validation

```ts
// validationConfig.ts
import { strongPassword, email, required } from 'antd-form-rules-lib';
import type { ValidationConfig } from 'antd-form-rules-lib';

const validationConfig: ValidationConfig = {
  email: { rules: [required(), email()] },
  password: { rules: [required(), strongPassword()] },
};
```

### 2. Set Up Global Validation (usually at app or form init)

```ts
// setupValidation.ts
import { configValidation } from 'antd-form-rules-lib/core';
import { validationConfig } from './validationConfig';

configValidation(validationConfig);
```

### 3. Use getValidation in Your Form

```jsx
// RegisterForm.jsx
import { Form, Input } from 'antd';
import { getValidation } from 'antd-form-rules-lib/core';

export default function RegisterForm() {
  return (
    <Form>
      <Form.Item label="Email" name="email" rules={getValidation('email')}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={getValidation('password')}>
        <Input.Password />
      </Form.Item>
    </Form>
  );
}
```

```tsx
import { Form, Input } from "antd";
import { getValidation } from "antd-form-rules-lib";
import type {FieldType } from "antd-form-rules-lib";

export default function RegisterForm() {
  return (

    <Form>
      <Form.Item label="Email" name="email" rules={getValidation("email")}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={getValidation(FieldType.PASSWORD)}
      >
        <Input.Password />
              </Form.Item>
    </Form>
  );
}
````

---

Contributions are welcome!  
Feel free to open issues or submit pull requests.
