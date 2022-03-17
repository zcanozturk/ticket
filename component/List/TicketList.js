import { useEffect, useState,useLayoutEffect } from "react";
import { Spin, Table } from "antd";
import { useRouter } from "next/router";

function TicketList(props) {
  
  function convertTypename(typeid){
    
    const types = props.types
    const typeelem = types.filter(type => type.typeid === typeid)
    return typeelem[0].typename
  }

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const arr = props.data;

  useEffect(() => {
    if (arr.length !== 0) {
      setLoading(false)
    }
   }, [arr]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "namek",
      filters: [
        {
          text: "Sarah",
          value: "Sarah",
        },
        {
          text: "Emily",
          value: "Emily"
        }
      ],
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
      onFilter: (value, record) => record.name.indexOf(value) === 0
    },

    {
      title: "Title",
      dataIndex: "title",
      key: "titlek",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "descriptionk",
    },
    {
      title: "Type",
      dataIndex: "typeid",
      key: "typeid",
      render: (text)=> convertTypename(text)
    }
  ];

  return loading ? (
    <Spin  className="ml-64 "/>
  ) : (
    <div className="m-10 ml-64 h-screen">
      <Table
        dataSource={arr}
        columns={columns}
        rowKey="name"
        onRow={(record, rowindex) => {
          return {
            onClick: () => {
              const fullPath = `/tickets/${record.name}`;
              router.push(fullPath);
            },
          };
        }}
      />
    </div>
  );
}

export default TicketList;
