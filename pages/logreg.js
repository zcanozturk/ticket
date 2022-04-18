import { Button, Form, Input, Layout } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";


const { Content } = Layout;

function LogReg() {
  const [login, setLogin] = useState(true);

  const router = useRouter()

  function loginHandler() {
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }
  const onFinish = (values) => {
    const enteredemail = values.email;
    const enteredpassword = values.password;
    const enteredname = values.name

    const reqbody = {
      name : enteredname,
      mail: enteredemail,
      password: enteredpassword,
    };
    if(login){
      fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(reqbody),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(response => {
        if(response.ok){
          router.push('/')
        }
      });
    }else{
      fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(reqbody),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };
  return (
    <div className=" bg-gray-200">
      <div className="flex justify-center items-center h-screen bg-gray-600">
        <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
          <div className="mb-4">
            <p className="text-gray-400">{login ? "Login" : "Signup"}</p>
            <h2 className="text-xl font-bold text-white">Ticket System</h2>
          </div>
          <Form className="space-y-4" name="basic" onFinish={onFinish}>
            {login ? (
              <></>
            ) : (
              <Form.Item name="name">
                <Input
                  placeholder="Name"
                  className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                />
              </Form.Item>
            )}
            <Form.Item name="email">
              <Input
                name="email"
                placeholder="Email"
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input
                name="password"
                placeholder="Password"
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              />
            </Form.Item>
            <Form.Item>
              <Button  htmlType="submit" type="primary" className="w-1/2">
                {login ? "Login" : "Signup"}
              </Button>
            </Form.Item>
          </Form>
          <div>
            {login ? (
              <Button type="link" className="text-gray-600" onClick={loginHandler}>
                {" "}
                Create User
              </Button>
            ) : (
              <Button type="link" className="text-gray-600" onClick={loginHandler}>
                {" "}
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogReg;
