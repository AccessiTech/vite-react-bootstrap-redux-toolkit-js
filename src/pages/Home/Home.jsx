import { Container, Col, Row, Button } from "react-bootstrap";
import { Temp } from "../../components/Temp/Temp";
import { reset, useCount } from "../../store/count";
import store from "../../store/store";

export const Home = () => {
  const count = useCount();
  return (
    <Container>
      <Row>
        <Col>
          <Temp />
          <p>Count is {count}</p>
          <Button
            variant="secondary"
            onClick={() => {
              store.dispatch(reset());
            }}
          >
            Reset Count
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
