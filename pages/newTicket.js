import { Layout, Button, Input, Form, notification, Select } from "antd";
import { useEffect, useState,  } from "react";
import { useRouter } from "next/router";
import { getTypes } from "../helpers/getTypes";
import MyEditor from "../components/Editor/MyEditor";
const { TextArea } = Input;
const { Option } = Select;

const { Content } = Layout;

export default function NewTicket(props) {
  const types = props.types;
  const [mydata, setData] = useState([]);
  const route = useRouter();
  const onFinish = (values) => {
    const enteredrequester = values.name;
    const entereddesc = values.description;
    const enteredtitle = values.title;
    const enteredtype = values.type;
    const enteredmail = values.mail;
    const uid = localStorage.getItem('user')

    const reqbody = {
      mail: enteredmail,
      typeid: enteredtype,
      requester: enteredrequester,
      title: enteredtitle,
      description: entereddesc,
      uid: uid
    };
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
          route.push('/home')
        }
      })
      .then((data) => {
        setData(data)
        console.log(mydata)
      });
  };
  function onChange() {}
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, settoData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <Content className="m-10">
      <div className="flex justify-center   ">
        <div className=" w-full  bg-slate-400 rounded p-6 ">
          <Form className="" name="basic" onFinish={onFinish}>
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
            <Form.Item  label="Mail" name="mail" className=" inline">
              <MyEditor 
              className = ""
                name="description"
                onChange={(data) => {
                  settoData(data);
                }}
                editorLoaded={editorLoaded}
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                className=" bg-slate-600 my-6"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Content>
  );
}

export async function getServerSideProps() {
  const data = await getTypes();

  return {
    props: {
      types: data,
    },
  };
}
