import "../styles/globals.css";

import { defineCustomElements } from "web-components/loader";
import "web-components/dist/component-library/component-library.css";

defineCustomElements();

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
}

export default MyApp;
