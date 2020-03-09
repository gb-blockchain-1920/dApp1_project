import React from "react";
import { Row, Col, Typography } from "antd";
import RegistrationForm from "./RegistrationForm";
const { Title, Paragraph, Text } = Typography;

export default function Register() {
  return (
    <Row gutter={10} style={{ padding: "20px" }}>
      <Col span={10}>
        <RegistrationForm />
      </Col>
      <Col span={10}>
        {" "}
        <Typography>
          <Title>Authentication</Title>
          <Paragraph>
            The KYC service uses a form of authentication that does not require
            you to register. You can consider your username and password
            combination the "private key" to your identity.
          </Paragraph>
          <Paragraph>
            You can authenticate to use the KYC service here. You can either
            register as a company or a person, the differences between them are
            outlined below.
          </Paragraph>
          <Title level={3}>Person</Title>
          <Paragraph>
            Person accounts can fill out their KYC form and store it on the
            blockchain. They can then approve companies to access this data,
            creating a seamless customer identity verification experience.
          </Paragraph>
          <Title level={3}>Company</Title>
          <Paragraph>
            Company accounts can request and recieve user identity forms in
            order to speed up their identity verification process..
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  );
}
