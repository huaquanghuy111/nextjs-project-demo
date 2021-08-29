import '../styles/globals.scss'
import '../styles/layout.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

// own css files here
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <Provider>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </Provider>
    </>
  )
}

export default MyApp
