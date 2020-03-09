import React from "react";
import { Form, Input, Button, DatePicker, InputNumber, Row, Col } from "antd";
import { submitIdentity } from "../Utils/ApiInterface";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

export default function IdentityForm() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [income, setIncome] = React.useState("");
  const [passportNumber, setPassportNumber] = React.useState(null);

  const submit = async () => {
    const response = await submitIdentity(
      firstName,
      lastName,
      birthDate,
      income,
      passportNumber
    );
  };

  return (
    <Row style={{ padding: "20px" }}>
      <Col span={24}>
        <div>
          <Form
            {...layout}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            size={"large"}
            onFinish={submit}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              value={firstName}
              rules={[
                { required: true, message: "Please input your first name!" }
              ]}
              onChange={e => setFirstName(e.target.value)}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              value={lastName}
              rules={[
                { required: true, message: "Please input your last name!" }
              ]}
              onChange={e => setLastName(e.target.value)}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Birth Date"
              name="birthDate"
              value={birthDate}
              rules={[
                { required: true, message: "Please input your birth date!" }
              ]}
            >
              <DatePicker
                style={{ width: "100%" }}
                onChange={setBirthDate}
                value={birthDate}
              />
            </Form.Item>
            <Form.Item
              label="Income"
              name="income"
              value={income}
              rules={[{ required: true, message: "Please input your income!" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                onChange={setIncome}
                value={income}
                min={0}
              />
            </Form.Item>
            <Form.Item
              label="Passport Number"
              name="passportNumber"
              value={passportNumber}
              rules={[
                {
                  required: true,
                  message: "Please input your passport number!"
                }
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0}
                onChange={setPassportNumber}
                value={passportNumber}
              />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
}
