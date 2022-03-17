import { Button, Form,notification } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useRouter } from "next/router";

function Reply(props) {
    const {id} =props
    

    const OnFinish = (values) => {
        const enteredreply = values.reply;

        const reqbody = {
            ticketid : id,
            reply: enteredreply
          };
        
        fetch("/api/Reply", {
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

    }

  return (
    <div className="">
      <div className="">
        <Form onFinish={OnFinish}>
          <Form.Item
          className="inline"
          label = 'Reply'
          name = 'reply'>
            <TextArea rows={10} />
          </Form.Item>
          <Form.Item>
              <Button htmlType="submit">
                  reply
              </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Reply;
