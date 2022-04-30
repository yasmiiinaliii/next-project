import Image from "next/image"
import { Carousel,Button} from "react-bootstrap"
function Slideshow(){
    return <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/baner.png"
        alt="First slide"
      />
    </Carousel.Item>
    {/* <Carousel.Item>
      <img
        className="d-block w-100"
        src="/slideshow.png"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item> */}
  </Carousel>
}
export default Slideshow