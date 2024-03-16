import '../styles/globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SocialLinks from './components/SocialLinks'

export const metadata = {
    title: 'Musa Akhmedov - Portfolio',
    description:
        "Musa Akhemdov' personal web development portfolio with projects and a blog",
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}) {
    return (
        <html lang='en'>
            <body>
                <Header />
                {children}
                <Footer />
                <SocialLinks />
            </body>
        </html>
    )
}
