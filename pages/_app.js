import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import ('../node_modules/bootstrap/dist/js/bootstrap.min.js')
  },[])
  return <div>
         <Navbar/>
         <Component {...pageProps} />
         <Footer/>
         </div>

}

export default MyApp
