import "../styles/globals.css";

import { defineCustomElements } from "web-components/loader";
import "web-components/dist/component-library/component-library.css";

defineCustomElements();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
