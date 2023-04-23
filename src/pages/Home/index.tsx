import React, { useState } from "react";
import HomeView, { Results } from "./HomeView";
import { Form } from "antd";
import { DataTypeTable } from "./components/Table/types";
import { PESOS_FORMATER, truncDigits } from "../../utils/forms";

function Home() {
  const [tableData, setTableData] = useState<DataTypeTable[]>([]);
  const [results, setResults] = useState<Results>({
    VPN: {
      value: "$0",
      isPositive: true,
    },
    // TIR: {
    //   value: "0%",
    //   isPositive: true,
    // },
    DecisionVPN: {
      value: "No es negocio",
      isPositive: false,
    },
    // DecisionTIR: {
    //   value: "No es negocio",
    //   isPositive: false,
    // },
  });
  const [form] = Form.useForm();
  const onValuesChange = (changedValues: any, allValues: any) => {
    const fieldName = Object.keys(changedValues)[0];
    if (fieldName === "inflacion" || fieldName === "ganancia") {
      const inflacion =
        changedValues["inflacion"] || allValues["inflacion"] || 0;
      const ganancia = changedValues["ganancia"] || allValues["ganancia"] || 0;
      const inflacionDecimal = inflacion / 100;
      const gananciaDecimal = ganancia / 100;
      const tmar =
        (inflacionDecimal +
          gananciaDecimal +
          inflacionDecimal * gananciaDecimal) *
        100;
      form.setFieldsValue({
        tmar: truncDigits(tmar, 4),
      });
    }
  };
  const onFinish = (values: any) => {
    const { inversionInicial, efectivoNetoPromedio, tmar } = values;
    const data: DataTypeTable[] = [];
    const firstRow = [inversionInicial];
    const first: any = {
      years: "Ingresos",
      0: PESOS_FORMATER(inversionInicial).replace(" ", ""),
    };
    const tmarDecimal = tmar / 100;
    const secondRow = [1 / Math.pow(1 + tmarDecimal, 0)];
    const second: any = {
      years: "Factor de descuento",
      0: (1 / Math.pow(1 + tmarDecimal, 0)) * 100 + "%",
    };
    const thirdRow = [firstRow[0] * secondRow[0]];
    const third: any = {
      years: "Valor presente",
      0: PESOS_FORMATER(firstRow[0] * secondRow[0]).replace(" ", ""),
    };

    for (let index = 1; index < 31; index++) {
      first[index] = PESOS_FORMATER(efectivoNetoPromedio).replace(" ", "");
      second[index] =
        truncDigits((1 / Math.pow(1 + tmarDecimal, index)) * 100, 4) + "%";
      firstRow.push(efectivoNetoPromedio);
      secondRow.push(1 / Math.pow(1 + tmarDecimal, index));
      const thirdValue = firstRow[index] * secondRow[index];
      third[index] = PESOS_FORMATER(
        truncDigits(thirdValue, 2).toString()
      ).replace(" ", "");
      thirdRow.push(thirdValue);
    }
    let vpn = 0;
    thirdRow.forEach((value) => {
      vpn += value;
    });
    // Fila 1
    data.push(first);
    // Fila 2
    data.push(second);
    // Fila 3
    data.push(third);
    setTableData(data);
    setResults({
      VPN: {
        value: PESOS_FORMATER(truncDigits(vpn, 2)),
        isPositive: vpn >= 0,
      },
      // TIR: {
      //   value: "0%",
      //   isPositive: true,
      // },
      DecisionVPN: {
        value: vpn > 0 ? "Es negocio" : "No es negocio",
        isPositive: vpn > 0,
      },
      // DecisionTIR: {
      //   value: "No es negocio",
      //   isPositive: false,
      // },
    });
  };

  return (
    <HomeView
      {...{ form, onValuesChange, onFinish, data: tableData, results }}
    />
  );
}

export default Home;
