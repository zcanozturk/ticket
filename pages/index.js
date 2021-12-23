import { Layout, Menu, Button, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import mySider from "../component/mySider";
import MySider from "../component/mySider";

const { Header, Content, Sider } = Layout;

export default function Page() {
  return (
    <div className="site-layout-content">
      <Card className="Card" title="Card title">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card className="Card" title="Card title">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card className="Card" title="Card title">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card className="Card" title="Card title">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card className="Card" title="Card title">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card className="Card" title="Card title">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}


