import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import Navigation from "../components/navigation/navigation.component";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../components/spinner/spinner.component";

import { navigationData, footerData } from "../public/data";
import PaymentSection from "../components/payment/Payment-Section.component";
import Footer from "../components/footer/Footer.component";

// const options = {
//   method: "GET",
//   url: "https://asos2.p.rapidapi.com/categories/list",
//   params: { country: "US", lang: "en-US" },
//   headers: {
//     "X-RapidAPI-Key": "f906b6c3a6msh49a5389c512d5c0p1819eajsn3b16cc8b1128",
//     "X-RapidAPI-Host": "asos2.p.rapidapi.com",
//   },
// };

function MyApp({ Component, pageProps, data }) {
  const [navigations, setNavigations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchNavigation = async () => {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await axios(options);

  //       setNavigations(data.navigation);
  //       setIsLoading(false);

  //       console.log(navigations);
  //     } catch (error) {
  //       throw Error(error);
  //     }
  //   };

  //   fetchNavigation();
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {isLoading && <Spinner></Spinner>}
        <div>
          <Navigation navigations={navigationData}></Navigation>
          <div>
            <Component {...pageProps} />
          </div>
          <PaymentSection />
          <Footer footers={footerData} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
