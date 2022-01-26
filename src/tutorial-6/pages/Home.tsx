import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Row xs={1} md={3} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
          <Card.Body>
            <Card.Title>
              <Link to="/post/1">Card title</Link>
            </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
