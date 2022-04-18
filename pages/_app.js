import "antd/dist/antd.css";
import MyLayout from "../components/Layout/myLayout";

import "../styles/mycss.css";


export default function MyApp({ Component, pageProps }) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
}
