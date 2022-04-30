import {useRouter} from 'next/router'
function productId(){
    const router = useRouter()
    const {productId} = router.query

    return(
        <div>
            <h1>product details</h1>
            <h2>the product ID is {productId} </h2>
        </div>
    )
}
export default productId