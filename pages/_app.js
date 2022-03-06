import { ParallaxProvider } from "react-scroll-parallax";

import "../styles/globals.css";
// import "../styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
