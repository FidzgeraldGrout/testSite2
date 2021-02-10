import 'bootstrap/dist/css/bootstrap.min.css'
import FirstNavbar from '../components/FirstNavbar'
import FirstFooter from '../components/FirstFooter'

export default function App({ Component, pageProps }) {
    return <>
        <FirstNavbar />
        <main className="pt-5">
            <Component {...pageProps} />
        </main>
        <FirstFooter className="mt-auto"/>
    </>
}