import { Layout, Button, Input, Form, notification, Select } from "antd";
import { useEffect, useState } from "react";
import { getTypes } from "../helpers/api-util";
const { TextArea } = Input;
const { Option } = Select;

const { Content } = Layout;

function NewTicket(props) {
  const types = props.types;
  const [mydata, setData] = useState([]);

  const onFinish = (values) => {
    const enteredrequester = values.name;
    const entereddesc = values.description;
    const enteredtitle = values.title;
    const enteredtype = values.type;
    const enteredmail = values.mail

    const reqbody = {
      mail: enteredmail,
      typeid: enteredtype,
      requester: enteredrequester,
      title: enteredtitle,
      description: entereddesc,
    };
    console.log(reqbody)
    fetch("/api/newticket", {
      method: "POST",
      body: JSON.stringify(reqbody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          notification.open({
            message: "Done!",
            description: "Ticket",
          });
        }
      })
      .then((data) => setData(data));
  };
  function onChange() {}

  return (
    <Content className="ml-48">
      <div className="flex justify-center  h-screen bg-slate-300 ">
        <div className=" w-full m-10  bg-slate-400 rounded p-6 ">
          <Form className="mx-10 " name="basic" onFinish={onFinish}>
            <Form.Item label="Type" name="type" className="inline">
              <Select onChange={onChange}>
                {types.map((type) => (
                  <Option key={type.typeid}>{type.typename} </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Name" name="name" className="inline ">
              <Input required className="" />
            </Form.Item>
            <Form.Item label="Title" name="title" className="inline">
              <Input required />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              className="inline"
            >
              <Input />
            </Form.Item>
            <Form.Item label="Mail" name="mail" className=" inline">
              <TextArea required rows={8} />
            </Form.Item>
            <br />
            <Form.Item>
              <Button htmlType="submit" style={{ background: `green` }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Content>
  );
}

export default NewTicket;

export async function getServerSideProps() {
  const data = await getTypes();

  return {
    props: {
      types: data,
    },
  };
}
