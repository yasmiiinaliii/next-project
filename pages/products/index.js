import { Container, Card, Row } from "react-bootstrap";
function Products({ products }) {
  return (
    <Container className="my-5">
      <div className="m-2">- </div>
      <Row  className="g-4 my-4" >
      {products.map((p) => {
        return (
   
            <Card style={{ width: "18rem", margin: " 20px"} } key={p.id} >
              <Card.Img variant="top" src={p.image} style={{ width: '100%', marginTop: " 10px" }} />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.description} </Card.Text>
              </Card.Body>
            </Card>

        );
      })}
      </Row>
      <div className="m-2">- </div>
    </Container>
  );
}

export default Products;
export async function getServerSideProps() {
  const res = await fetch("http://localhost:4200/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}
