import React, { useEffect } from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import { navigationData, footerData } from "../public/data";
import PaymentSection from "../components/payment/paymentSection.component";
import { AuthUserContextProvider } from "../context/authUserContext";
import "nprogress/nprogress.css";
import { ApolloProvider } from "@apollo/client";
import client from "../utils/apolloClient";
import dynamic from "next/dynamic";
import Spinner from "../components/spinner/spinner.component";

const ProgressBar = dynamic(
  () => import("../components/progress-bar/progress-bar.component"),
  {
    ssr: false,
  }
);

const Bottom_Section = dynamic(
  () => import("../components/homeSections/bottom-section.component"),
  {
    ssr: false,
  }
);

const Navigation = dynamic(
  () => import("../components/navigation/navigation.component"),
  {
    ssr: true,
  }
);

const Footer = dynamic(() => import("../components/footer/footer.component"), {
  ssr: false,
});

const Breadcrumbs = dynamic(
  () => import("../components/breadcrums/breadcrums.component"),
  {
    ssr: false,
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

  const { router } = Router;

  const query_number = router && Object.keys(router["state"]["query"]).length;

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
      <ApolloProvider client={client}>
        <AuthUserContextProvider>
          <Head>
            <link
              rel="shortcut icon"
              href="/dynamic_icon.png"
              type="image/x-icon"
            />
          </Head>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation navigations={navigationData}></Navigation>
            {query_number >= 2 && <Breadcrumbs />}
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
        </AuthUserContextProvider>

        <ProgressBar></ProgressBar>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
