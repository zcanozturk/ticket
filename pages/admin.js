import { Layout, Menu, Button, Card, Table } from "antd";
import { useRouter } from "next/router";
import { getNotAnswered } from "../helpers/api-util";

const { Header, Content, Sider } = Layout;

function Admin(props) {
  const router = useRouter();
  const arr = props.answeredticket;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "namek",
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
        rowKey = "name"
        onRow={(record, rowindex) => {
          return {
            onClick: () => {
              const fullPath = `/tickets/${rowindex}`;

              router.push(fullPath);
            },
          };
        }}
      />
    </div>
  );
}

export async function getServerSideProps(){
  const answeredticket = await getNotAnswered();
  return {
    props: {answeredticket}
  }
}

export default Admin;


