import React from "react";
import { Button, Form, FormInstance, Input, InputNumber } from "antd";
import {
  PESOS_FORMATER,
  PESOS_PARSER,
  PORCENTAJE_FORMATER,
  PORCENTAJE_PARSER,
} from "../../../../utils/forms";

export interface Props {
  form: FormInstance<any>;
  onValuesChange: (changedValues: any, allValues: any) => void;
  onFinish: (values: any) => void;
}

function HomeForm({ form, onValuesChange, onFinish }: Props) {
  return (
    <Form
      form={form}
      layout="horizontal"
      initialValues={{
        inversionInicial: -1000,
        efectivoNetoPromedio: 0,
        inflacion: 0,
        ganancia: 0,
        tmar: 0,
      }}
      requiredMark
      onValuesChange={onValuesChange}
      onFinish={onFinish}
    >
      <Form.Item
        label="Inversión inicial"
        required
        tooltip="La inversión inicial siempre es negativa"
        name="inversionInicial"
      >
        <InputNumber
          max="0"
          formatter={PESOS_FORMATER}
          parser={PESOS_PARSER}
          size="middle"
        />
      </Form.Item>
      <Form.Item
        label="Flujo efectivo neto promedio"
        required
        tooltip="Efectivo entrante promedio"
        name="efectivoNetoPromedio"
      >
        <InputNumber
          min="0"
          formatter={PESOS_FORMATER}
          parser={PESOS_PARSER}
          size="middle"
        />
      </Form.Item>
      <Form.Item
        label="Inflación"
        required
        tooltip="Valor en porcentaje"
        name="inflacion"
      >
        <InputNumber
          min="0"
          formatter={PORCENTAJE_FORMATER}
          parser={PORCENTAJE_PARSER}
          size="middle"
        />
      </Form.Item>
      <Form.Item
        label="Ganancia"
        required
        tooltip="Cuánto porcentaje quiero ganar"
        name="ganancia"
      >
        <InputNumber
          min="0"
          formatter={PORCENTAJE_FORMATER}
          parser={PORCENTAJE_PARSER}
          size="middle"
        />
      </Form.Item>
      <Form.Item
        label="TMAR"
        required
        tooltip="Valor auto calculado"
        name="tmar"
      >
        <InputNumber
          formatter={PORCENTAJE_FORMATER}
          parser={PORCENTAJE_PARSER}
          size="middle"
          disabled
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Calcular
        </Button>
      </Form.Item>
    </Form>
  );
}

export default HomeForm;
