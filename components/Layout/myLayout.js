import { useRouter } from "next/router";
import { Layout, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Header, Content, Sider } = Layout;

const outs = ["/"];

export default function MyLayout({ children }) {
  const router = useRouter();

  const isauth = outs.includes(router.pathname);

  return (
    <Layout>
      {!isauth && (
        <Sider className="">
          <div className="">
            <Button type="primary" className="m-10">
              <Link href="/newTicket" passHref> + New Ticket</Link>
            </Button>
          </div>
          <Menu theme="dark" mode="inline" className="">
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link href="/home" passHref>All tickets</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link href="/admin" passHref>Admin</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link href="/report" passHref>Report</Link>
            </Menu.Item>
          </Menu>
        </Sider>
      )}
      <Layout>
        {!isauth && <Header className="p-0" />}
        <Content>
          <div className=" h-screen">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
