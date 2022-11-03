import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import Navigation from "../components/navigation/navigation.component";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
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

export default MyApp;
