import { AppProps } from "next/app";
import "../../styles/globals.css";
import { HostAppReduxProvider } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HostAppReduxProvider>
      <Component {...pageProps} />
    </HostAppReduxProvider>
  );
}

export default MyApp;
