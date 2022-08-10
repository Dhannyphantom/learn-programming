import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";


config.autoAddCss = false;
library.add(fas, fab, far);

function MyApp({ Component, pageProps }) {
  return <Layout>
  <Component {...pageProps} />
  </Layout> 
}

export default MyApp;
