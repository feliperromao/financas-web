import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'
import '../styles/nprogress.css'

import type { AppProps } from 'next/app'

import Router from 'next/router'
import NProgress from 'nprogress'

import  "../services/firebase";

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} ></Component>
}
export default MyApp
