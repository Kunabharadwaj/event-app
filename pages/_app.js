import '../styles/globals.css'
import '../styles/general.sass'
import MainLayout from '../src/Components/layout/main-layout.jsx'

export default function App({ Component, pageProps }) {
  return(
    <>
    <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
    
    </>
  ) 
}
