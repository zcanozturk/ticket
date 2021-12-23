import { Layout, Menu, Button, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import MySider from "../component/mySider";
const { Header, Content, Sider } = Layout;

export default function MyLayout({ children }) {
  return (
    <Layout>
      <MySider />
      <Layout className="site-layout-content">
        <Header className="site-layout-background"  />
        <Content>
          <div className="site-layout-background">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
