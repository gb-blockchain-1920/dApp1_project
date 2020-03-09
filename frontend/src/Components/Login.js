import React from "react";
import { Typography, Row, Col, Form, Input, Button, Checkbox } from "antd";
import { logIn } from "../Utils/ApiInterface";
const { Title, Paragraph } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

export default function Login() {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  const submit = async () => {
    const response = await logIn(username, password);
  };

  return (
    <Row style={{ padding: "20px" }}>
      <Col span={12}>
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
            value={username}
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input onChange={e => setUsername(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            value={password}
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password onChange={e => setPassword(e.target.value)} />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={12}>
        {" "}
        <Typography style={{ padding: "20px" }}>
          <Title>Login</Title>
          <Paragraph>You can log in using your email and password.</Paragraph>
        </Typography>
      </Col>
    </Row>
  );
}
