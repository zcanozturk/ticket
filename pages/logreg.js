import { Button, Form, Input, Layout } from "antd";
import FormItem from "antd/lib/form/FormItem";

const { Content } = Layout;

function LogReg() {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-center items-center h-screen bg-gray-800">
        <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
          <div className="mb-4">
            <p className="text-gray-400">Log in</p>
            <h2 className="text-xl font-bold text-white">Ticket System</h2>
          </div>
          <div>
            <Input placeholder="Email" className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" />
          </div>
          <div>
            <Input placeholder="Password" className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" />
          </div>
          <div>
            <Button type="primary" href="/" className="w-1/2">
              Log in
            </Button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LogReg;
