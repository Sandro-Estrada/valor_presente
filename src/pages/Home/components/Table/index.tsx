import { Table as TableAntd } from "antd";
import React from "react";
import columns from "./columns";
import { DataTypeTable } from "./types";

export interface Props {
  data: DataTypeTable[];
}

function Table({ data }: Props) {
  return (
    <TableAntd
      columns={columns}
      dataSource={data}
      bordered
      scroll={{ x: "100vw" }}
    />
  );
}

export default Table;
