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
  const [username, setUsername] = React.useState("");
  const [type, setType] = React.useState("user");

  const submit = async () => {
    const token = await registerUser(username, password, type);
    localStorage.setItem("token", token);
    localStorage.setItem("type", type);
    window.location.replace("/");
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
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input onChange={e => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password onChange={e => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item label="Type" name="type">
        <Select defaultValue="user" onChange={setType}>
          <Option value="user">user</Option>
          <Option value="company">company</Option>
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
