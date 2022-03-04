import { Layout, Button, Input, Form, notification } from "antd";
import { useEffect, useState } from "react";
const { TextArea } = Input;

const { Content } = Layout;

function NewTicket() {
  const [mydata, setData] = useState([]);
  const [respo, setRespo] = useState([]);

  // useEffect(()=>{
  //   console.log(data);

  // },[data])

  const onFinish = (values) => {
    const enteredrequester = values.name;
    const entereddesc = values.description;
    const enteredtitle = values.title;

    const reqbody = {
      requester: enteredrequester,
      title: enteredtitle,
      description: entereddesc,
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
        }
      })
      .then((data) => setData(data));

    
  };

  return (
    <Content className="ml-48">
      <div className="flex justify-center  h-screen bg-slate-300 ">
        <div className=" w-full m-10  bg-slate-400 rounded p-6 ">
          <Form className="mx-10 " name="basic" >
            <Form.Item label="Name" name="name" className="inline ">
              <Input className="" />
            </Form.Item>
            <Form.Item label="Title" name="title" className="inline">
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              className="inline"
            >
              <TextArea rows={8} />
            </Form.Item>
            <br />
            <Form.Item>
              <Button type="primary" htmlType="submit">
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
