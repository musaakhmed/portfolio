import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <SocialLinks />
        </>
    )
}

export default MyApp
