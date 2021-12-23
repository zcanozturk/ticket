import { Button, Form, Input } from "antd";
import FormItem from "antd/lib/form/FormItem";

function LogReg() {
  return (
      <div>
    <Form className="form">
      <FormItem label="Username">
        <Input />
      </FormItem>
      <FormItem label="Password">
        <Input />
      </FormItem>
    </Form>

    <Button type="primary">Login</Button>
    </div>
  );
}

export default LogReg;
