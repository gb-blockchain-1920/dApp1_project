import React from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Row,
  Col
} from "antd";

export default function IdentityForm() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [income, setIncome] = React.useState("");
  const [passportNumber, setPassportNumber] = React.useState("");
  return (
    <Row style={{ padding: "20px" }}>
      <Col span={24}>
        <div>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            size={"large"}
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
              <DatePicker onChange={setBirthDate} value={birthDate} />
            </Form.Item>
            <Form.Item
              label="Income"
              name="income"
              value={income}
              rules={[{ required: true, message: "Please input your income!" }]}
            >
              <InputNumber onChange={setIncome} value={income} min={0} />
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
              onChange={setPassportNumber}
            >
              <InputNumber
                min={0}
                onChange={setPassportNumber}
                value={passportNumber}
              />
            </Form.Item>
            <Form.Item>
              <Button>Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
}
