import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import Navigation from "../components/navigation/navigation.component";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps, data }) {
  console.log(data);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Navigation></Navigation>
          <div>
            <Component {...pageProps} />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export async function getStaticProps(context: any) {
  return { props: { data: "Hello" } };
}

export default MyApp;
