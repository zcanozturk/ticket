import { Table } from "antd";
import { useRouter } from "next/router";
import { getAllTickets } from "../helpers/api-util";

export default function Page(props) {
  const router = useRouter();

  const arr = props.ticket;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "namek",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
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
  ];

  return (
    <div className="ml-52 m-10 h-screen">
      <Table
        dataSource={arr}
        columns={columns}
        rowKey="name"
        onRow={(record, rowindex) => {
          return {
            onClick: (e) => {
              e.preventDefault();
              const fullPath = `/tickets/${rowindex}`;

              router.push(fullPath);
            },
          };
        }}
      />
    </div>
  );
}

export async function getStaticProps(context) {
 
  const data = await getAllTickets()

  return {
    props: {
      ticket: data,
    },
  };
}
