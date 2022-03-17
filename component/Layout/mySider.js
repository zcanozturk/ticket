import { Layout, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Sider } = Layout;

function MySider({}) {
  return (
    <Sider
    className="bg-green"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <Button type="primary" className="m-10">
        <Link href="/newTicket"> + New Ticket</Link>
      </Button>
      <Menu  theme="dark" mode="inline" className="">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link href="/">all tickets</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link href="/admin">admin</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default MySider;
