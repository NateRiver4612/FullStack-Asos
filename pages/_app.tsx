import React, { useEffect } from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Router from "next/router";
import Head from "next/head";
import { navigationData, footerData } from "../public/data";
import PaymentSection from "../components/payment/paymentSection.component";

import "nprogress/nprogress.css";

import dynamic from "next/dynamic";
import Spinner from "../components/spinner/spinner.component";

const ProgressBar = dynamic(
  () => import("../components/progress-bar/progress-bar.component"),
  {
    ssr: true,
  }
);

const Bottom_Section = dynamic(
  () => import("../components/homeSections/bottom-section.component"),
  {
    ssr: true,
  }
);

const Navigation = dynamic(
  () => import("../components/navigation/navigation.component"),
  {
    ssr: true,
  }
);

const Footer = dynamic(() => import("../components/footer/footer.component"), {
  ssr: true,
});

const Breadcrumbs = dynamic(
  () => import("../components/breadcrums/breadcrums.component"),
  {
    ssr: true,
  }
);

declare global {
  interface Window {
    MSStream: any;
  }
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <link
          rel="shortcut icon"
          href="/dynamic_icon.svg"
          type="image/x-icon"
        />
      </Head>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation navigations={navigationData}></Navigation>
        <Breadcrumbs />
        {loading && <Spinner />}
        <div>
          <div>
            <Component {...pageProps} />
          </div>
          <PaymentSection />
          <Footer footers={footerData} />
          <Bottom_Section />
        </div>
      </PersistGate>
      <ProgressBar></ProgressBar>
    </Provider>
  );
}

export default MyApp;
