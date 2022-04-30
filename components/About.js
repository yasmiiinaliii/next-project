import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
function About() {
  return (
    <>
      <Container className="mt-5">
        <Row className="gap-5">
          <Col md>
            <h2 className="ps-4">ABOUT US</h2>
            <p  className="lead p-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam,{" "}
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam{" "}
            </p>
          </Col>
          <Col md>
            <Image src="/aboutImage.png" alt="About" width={600} height={580} ></Image>
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default About;
