import nav from '../Components/Main/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav />
      <Component {...pageProps} />
      </>
  )
}

export default MyApp
