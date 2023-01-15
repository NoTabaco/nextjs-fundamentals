import { AppProps } from "next/dist/shared/lib/router/router";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/Layout";
import "../styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}
