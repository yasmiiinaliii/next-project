import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
function Gallery() {
  return (
    <>
      <Container>
        <Row>
          <h2 className="text-center  my-5"> Our Gallery</h2>
        </Row>
        <Row className="mb-5 pb-5">
          <Col md>
            <Image
              src="/1x/Asset 4.png"
              alt="galley"
              width={660}
              height={746}
            ></Image>
          </Col>
          <Col md>
            <Row md className="mb-3" >
              <Col> 
              <Image
              src="/1x/Asset 7.png"
              alt="gallery"
              width={330}
              height={375}
            ></Image>
            </Col>
              <Col>
              <Image
              src="/1x/Asset 4.png"
              alt="gallery"
              width={330}
              height={375}
            ></Image>
              </Col>
            </Row>
         
            <Row md > 
              <Col>
              <Image
              src="/1x/Asset 5.png"
              alt="gallery"
              width={330}
              height={375}
            ></Image>
              </Col>
              <Col>
              <Image
              src="/1x/Asset 9.png"
              alt="gallery"
              width={330}
              height={375}
            ></Image>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Gallery;
