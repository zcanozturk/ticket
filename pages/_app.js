import "antd/dist/antd.css";
import MyLayout from "../component/Layout/myLayout";


import "../styles/mycss.css";


export default function MyApp({ Component, pageProps }) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
}
