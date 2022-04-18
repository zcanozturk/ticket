import { Card, Avatar, Button, notification, Spin, Popconfirm } from "antd";
import Icon, { CloseOutlined } from "@ant-design/icons";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
const { Meta } = Card;

export default function CardList(props) {
  const [arr, setArr] = useState(props.data);

  useEffect(() => {
    setArr(props.data);
  }, [props]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (arr.length !== 0) {
      setLoading(false);
    }
  }, [arr]);

  function deleteHandler(e) {
    fetch("/api/deleteticket", {
      method: "POST",
      body: JSON.stringify(e),
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

    const newarr = arr.filter((ticket) => ticket.id !== e);
    setArr(arr.filter((ticket) => ticket.id !== e));
  }

  function convertTypename(typeid) {
    const types = props.types;
    const typeelem = types.filter((type) => type.typeid === typeid);
    return typeelem[0].typename;
  }
  return loading ? (
    <Spin />
  ) : (
    <div className="flex-col space-y-4">
      {arr.map((ticket) => (
        <div className="" key={ticket.id}>
          <div className="flex justify-end">
            <Button type="text">Spam</Button>

            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={() => {
                deleteHandler(ticket.id);
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button type="text">
                <CloseOutlined></CloseOutlined>{" "}
              </Button>
            </Popconfirm>
          </div>
          <div>
            <Card className="flex-none">
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={ticket.name}
              />
              <Link href={"/tickets/" + ticket.name} passHref>
                <a>{ticket.title}</a>
              </Link>

              <p className="text-right">{convertTypename(ticket.typeid)}</p>
              <p className="text-xs">{ticket.time}</p>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
