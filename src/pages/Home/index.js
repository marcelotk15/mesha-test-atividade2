import React, { useState } from "react";
import { Upload, Table } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import { Container, Content, CSVRender } from "./styles";

export default function Home() {
  const [values, setValues] = useState([]);
  const [columns, setColumns] = useState([]);
  const [show, setShow] = useState(false);

  const { Dragger } = Upload;

  const props = {
    name: "csv",
    accept: ".csv",
    multiple: false,
    showUploadList: false,
    beforeUpload: async (file) => {
      setColumns([]);
      setColumns([]);
      setShow(false);

      const reader = new FileReader();

      reader.onload = (e) => {
        const csv = e.target.result;

        const titles = csv
          .slice(0, csv.indexOf("\n"))
          .split(";")
          .join(",")
          .split(",");

        setColumns(
          titles.map((field) => ({
            title: field,
            key: field,
            dataIndex: field,
          }))
        );

        const rows = csv.slice(csv.indexOf("\n") + 1).split("\n");

        const rowsFormatted = rows.map((row) => {
          const values = row.split(";").join(",").split(",");

          return titles.reduce(
            (object, curr, i) => ((object[curr] = values[i]), object),
            {}
          );
        });

        setValues(
          rowsFormatted.map((row, index) => ({
            key: index,
            ...row,
          }))
        );
      };

      try {
        await reader.readAsText(file);

        setShow(true);
      } catch (error) {
        return console.log(error);
      }

      // Prevent upload
      return false;
    },
  };

  return (
    <Container>
      <Content>
        <Dragger {...props}>
          <p className='ant-upload-drag-icon'>
            <InboxOutlined />
          </p>

          <p className='ant-upload-text'>
            Clique ou solte seu arquivo .CSV aqui!
          </p>
        </Dragger>

        {show ? (
          <CSVRender>
            <Table
              columns={columns}
              dataSource={values}
              pagination={{ pageSize: 6 }}
            />
          </CSVRender>
        ) : null}
      </Content>
    </Container>
  );
}
