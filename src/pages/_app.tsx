import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import GlobalStyles from "@/styles/globalStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
