import React from "react";
import { Typography, Row, Col, Form, Input, Button } from "antd";
const { Title, Paragraph } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

export default function Register() {
  const [password, setPassword] = React.useState("");

  const savePassword = password => localStorage.setItem("passphrase", password);

  const onChange = e => setPassword(e.target.value);

  return (
    <Row style={{ padding: "20px" }}>
      <Col span={12}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password onChange={onChange} />
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
          <Title>Registration</Title>
          <Paragraph>
            For registration you only need a password. Consider this your
            private key, do not give it to anyone and do not forget it!
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  );
}
