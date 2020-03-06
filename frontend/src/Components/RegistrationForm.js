import React from "react";
import { Form, Input, Button, Select } from "antd";
import { registerUser } from "../Utils/ApiInterface";
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

export default function RegistrationForm() {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [type, setType] = React.useState("person");

  const submit = async () => {
    const response = await registerUser(email, password, type);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={submit}
      //   onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { type: "email", required: true, message: "Please input your email!" }
        ]}
      >
        <Input onChange={e => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password onChange={e => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item label="Type" name="type">
        <Select defaultValue="person" onChange={setType}>
          <Option value="person">Person</Option>
          <Option value="company">Company</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
