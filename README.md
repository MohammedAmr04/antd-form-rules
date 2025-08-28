# antd-form-rules

A lightweight utility library for **Ant Design forms** that provides ready-to-use and customizable validation rules.  
With this library, you can easily add validation to your forms without rewriting the same rules in every project.

---

## 📦 Installation

```bash
npm install antd-form-rules
# or
yarn add antd-form-rules
```

---

## 📖 Usage Example

```jsx
import { Form, Input } from "antd";
import { required, email, strongPassword } from "antd-form-rules";

export default function RegisterForm() {
  return (
    <Form>
      <Form.Item label="Email" name="email" rules={[required(), email()]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[required(), strongPassword()]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  );
}
```

---

## 🚀 Features

- ✅ Ready-to-use validation rules (required, email, password strength, phone, etc.)
- 🔧 Easy to extend and customize
- ⚡ Simplifies form handling in Ant Design projects
- 🎯 Consistent and reusable rules across multiple projects

---

## 📂 Available Rules

- `required(message?: string)`
- `email(message?: string)`
- `strongPassword(message?: string)`
- `phone(message?: string)` (coming soon)

---

## 🛠️ Roadmap

- Add more built-in validation rules (username, URL, confirm password, etc.)
- Add rule presets for common forms (login, register, profile update)
- Improve TypeScript support and developer experience

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to open issues or submit
