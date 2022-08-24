import NavBar from "../components/navbar"
import Footer from "../components/footer"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

