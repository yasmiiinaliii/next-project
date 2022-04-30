import { Container } from "react-bootstrap";
import{useState,useEffect} from 'react'
import {getSession,signIn} from 'next-auth/react'
function ContactUs(){
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
      const securePage = async()=>{
          const session = await getSession()
          if(!session){
              signIn()
          }else{
              setLoading(false)
          }
      }
      securePage()
    },[])
    return(
   
        <Container>
        <div className="m-4">- </div>
        <h1>contact Us page</h1>
        </Container>
   
    )
}
export default ContactUs