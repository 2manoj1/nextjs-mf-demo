import "../../styles/globals.css";
import dynamic from "next/dynamic";
import { AppProps } from "next/app";

//@ts-ignore
const HostAppReduxProvider = dynamic(() => import("hostapp/hostStore"), {
  ssr: false,
});

console.log(HostAppReduxProvider);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HostAppReduxProvider>
      <Component {...pageProps} />
    </HostAppReduxProvider>
  );
}

export default MyApp;
