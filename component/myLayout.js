import { Layout,} from "antd";
import { useRouter } from "next/router";
import MySider from "../component/mySider";
const { Header, Content, } = Layout;

const outs = ["/login", '/register', '/logreg'];

export default function MyLayout({ children }) {

  const router = useRouter();

  const isauth = outs.includes(router.pathname)

  return (
    <Layout >
      { !isauth && <MySider/>}
      <Layout>
        { !isauth &&   <Header />}
        <Content  >
          <div >{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
