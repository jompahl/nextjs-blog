import '../styles/global.css'
import Navigation from '../components/navigation'
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
