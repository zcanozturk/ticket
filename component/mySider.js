import { Layout, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const {Sider } = Layout;

function MySider({ children }) {
  
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <Button type="primary" className="newtick">
      <Link href='/newTicket'> + New Ticket</Link>
      </Button>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link href='/'>all tickets</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
        <Link href='/admin'>admin</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default MySider;
