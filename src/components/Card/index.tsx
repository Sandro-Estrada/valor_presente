import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import "./index.css";

const { Title, Text } = Typography;

interface Props {
  isPositive: boolean;
  value: string;
  label: string;
  mt?: string | number;
}

function CustomCard({ isPositive, value, label, mt }: Props) {
  return (
    <Card bordered={false} bodyStyle={{ padding: 16, marginTop: mt || 0 }}>
      <Row gutter={16}>
        <Col span={16}>
          <Text strong className="title-label-card">
            {value}
          </Text>
          <br />
          <Text className="text-label-card">{label}</Text>
        </Col>
        <Col span={8}>
          <div
            className={
              isPositive
                ? "icon-green-wrapper-customCard"
                : "icon-red-wrapper-customCard"
            }
          >
            {isPositive ? <RiseOutlined /> : <FallOutlined />}
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CustomCard;
