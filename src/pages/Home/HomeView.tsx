import React from "react";
import HomeForm from "./components/Form";
import { Props as FormProps } from "./components/Form";
import { Props as TableProps } from "./components/Table";
import { Card, Col, Row } from "antd";

import "./index.css";
import CustomCard from "../../components/Card";
import Table from "./components/Table";

export interface Results {
  VPN: {
    value: string;
    isPositive: boolean;
  };
  TIR?: {
    value: string;
    isPositive: boolean;
  };
  DecisionVPN: {
    value: string;
    isPositive: boolean;
  };
  DecisionTIR?: {
    value: string;
    isPositive: boolean;
  };
}

interface Props extends FormProps, TableProps {
  results: Results;
}

function HomeView({ form, onValuesChange, onFinish, data, results }: Props) {
  const { VPN, DecisionVPN } = results;
  return (
    <>
      <Row gutter={16} className="form-row-homeView">
        <Col span={16}>
          <Card bordered={false} bodyStyle={{ padding: 10 }}>
            <HomeForm {...{ form, onValuesChange, onFinish }} />
          </Card>
        </Col>
        <Col className="results-col-homeView" span={8}>
          <CustomCard
            isPositive={VPN.isPositive}
            value={VPN.value}
            label="VPN"
          />
          {/* <CustomCard
            isPositive={TIR.isPositive}
            value={TIR.value}
            label="TIR"
            mt={10}
          /> */}
          <CustomCard
            mt={10}
            isPositive={DecisionVPN.isPositive}
            value={DecisionVPN.value}
            label="Decisión VPN"
          />
          {/* <CustomCard
            mt={10}
            isPositive={DecisionTIR.isPositive}
            value={DecisionTIR.value}
            label="Decisión TIR"
          /> */}
        </Col>
      </Row>
      <Row gutter={16} className="form-row-homeView">
        <Col span={24}>
          <Table data={data} />
        </Col>
      </Row>
    </>
  );
}

export default HomeView;
