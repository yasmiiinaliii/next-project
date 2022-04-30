import {SessionProvider} from 'next-auth/react'
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



function MyApp({ Component, pageProps:{session,...pageProps} }) {
  useEffect(()=>{
    import ('../node_modules/bootstrap/dist/js/bootstrap.min.js')
  },[])
  return <SessionProvider session={session}>
         <Navbar/>
         <Component {...pageProps} />
         <Footer/>
         </SessionProvider>

}

export default MyApp
