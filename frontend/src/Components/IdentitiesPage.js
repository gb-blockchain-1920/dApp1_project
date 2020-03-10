import React from "react";
import { Row, Col, Table } from "antd";
import { getApprovedUsers } from "../Utils/ApiInterface";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName"
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName"
  },
  {
    title: "Date of Birth",
    dataIndex: "birthDate",
    key: "birthDate"
  },
  {
    title: "Income",
    dataIndex: "income",
    key: "income"
  },
  {
    title: "Passport Number",
    dataIndex: "passportNumber",
    key: "passportNumber"
  }
];

export default function IdentitiesPage() {
  const [identities, setIdentities] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await getApprovedUsers();
      setIdentities(response.data);
    }
    getData();
  }, []);

  return (
    <Row gutter={10} style={{ padding: "20px" }}>
      <Col span={24}>
        <Table dataSource={identities} columns={columns} />
      </Col>
    </Row>
  );
}
