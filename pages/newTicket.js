import { Layout, Menu, Button, Card, Input, Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import FormItem from "antd/lib/form/FormItem";

const { Header, Content, Sider } = Layout;

function NewTicket() {
  return (
    <Layout>
      <Content className="site-layout-content">
        <Form className="form">
          <FormItem>
            Subject
            <Input defaultValue="Subject..." />
          </FormItem>
          <Form.Item  >
            <div>Requester</div>
            <Input defaultValue="name..." className="item" />
            <Input defaultValue="mail..." className="item" />
          </Form.Item>
          <FormItem>
            Team 
            <Input />
          </FormItem>
          <FormItem>
            Agent
            <Input />
          </FormItem>
          <FormItem>
            Pritority
            <Input />
          </FormItem>
          <FormItem>
            Subject
            <Input />
          </FormItem>
        </Form>
      </Content>
    </Layout>
  );
}

export default NewTicket;
