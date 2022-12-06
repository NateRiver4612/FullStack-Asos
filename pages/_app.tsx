import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { navigationData, footerData } from "../public/data";
import PaymentSection from "../components/payment/paymentSection.component";

import "nprogress/nprogress.css";

import dynamic from "next/dynamic";

const ProgressBar = dynamic(
  () => import("../components/progress-bar/progress-bar.component"),
  {
    ssr: true,
  }
);

const Bottom_Section = dynamic(
  () => import("../components/homeSections/bottom_section.component"),
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

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation navigations={navigationData}></Navigation>
        <Breadcrumbs />
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
