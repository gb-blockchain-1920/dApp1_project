import React from "react";
import { getCompanies } from "../Utils/ApiInterface";
import { Row, Col, Table, Switch } from "antd";
import { approveCompany } from "../Utils/ApiInterface";

const columns = [
  {
    title: "Company Name",
    dataIndex: "username",
    key: "username"
  },
  {
    title: "Aproval",
    key: "approval",
    dataIndex: "approval",
    render: (text, record) => {
      return (
        <Switch
          defaultChecked={record.approved}
          disabled={record.approved}
          onChange={() => handleChange(record.id)}
        />
      );
    }
  }
];

const handleChange = async companyId => {
  const response = await approveCompany(companyId);
  console.log(response);
};

export default function SharingPage() {
  const [companies, setCompanies] = React.useState([]);
  const [approvedCompanies, setApprovedCompanies] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await getCompanies();
      const approved = [];
      response.data.approved.forEach(element => {
        approved.push(element.id);
      });
      response.data.all.map(val => {
        val.approved = approved.includes(val.id);
      });
      console.log(response.data.all);
      setCompanies(response.data.all);
      setApprovedCompanies(response.data.approved);
    }
    getData();
  }, []);

  return (
    <Row gutter={10} style={{ padding: "20px" }}>
      <Col span={24}>
        <Table dataSource={companies} columns={columns} />
      </Col>
    </Row>
  );
}
