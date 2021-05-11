import "styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          key="google-fonts"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
          key="google-fonts-roboto"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
