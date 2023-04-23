import { valueType } from "antd/es/statistic/utils";

export const PESOS_FORMATER = (value: valueType | undefined) =>
  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const PESOS_PARSER = (value: string | undefined) =>
  value!.replace(/\$\s?|(,*)/g, "");

export const PORCENTAJE_FORMATER = (value: valueType | undefined) =>
  `${value}%`;

export const PORCENTAJE_PARSER = (value: string | undefined) =>
  value!.replace("%", "");

export const truncDigits = (number: number, digits: number) => {
  const re = new RegExp("(-?\\d+\\.\\d{" + digits + "})(\\d)");
  const m = number.toString().match(re);
  return m ? parseFloat(m[1]) : number.valueOf();
};
