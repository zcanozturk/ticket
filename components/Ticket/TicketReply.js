import { Button, Form, notification } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MyEditor from "/components/Editor/MyEditor";

function Reply(props) {
  const { id } = props;

  const OnFinish = (values) => {
    const enteredreply = values.reply;
    const uid = localStorage.getItem('user')
    const reqbody = {
      ticketid: id,
      reply: enteredreply,
      uid: uid
    };

    fetch("/api/Reply", {
      method: "POST",
      body: JSON.stringify(reqbody),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        notification.open({
          message: "Done!",
          description: "Ticket",
        });
      }
    });
  };
  function onChange() {}
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, settoData] = useState("");

  useEffect(() => {

    setEditorLoaded(true);
  }, []);
  return (
    <div className="">
      <div className="">
        <Form onFinish={OnFinish}>
          <Form.Item className="inline" label="Reply" name="reply">
            <MyEditor
              className=""
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
              Reply
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Reply;
