import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/style.css';
import { store } from "@/redux"
import { appWithTranslation } from "next-i18next"
import { AppProps } from "next/app"
import Head from "next/head"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {

	return (
		<Provider store={store}>
            <Head>
                <title>Chat App Demo</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            </Head>
            <Component {...pageProps} />
            <ToastContainer theme="colored" />
		</Provider>
	)
}
export default appWithTranslation(App)
