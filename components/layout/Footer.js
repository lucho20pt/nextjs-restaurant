import { Container, Row, Col } from 'react-bootstrap'
import classes from '@/styles/layout/footer.module.scss'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container fluid>
        <Row as={"ul"} className="text-center p-3">
          <Col as={"li"} className="p-1">#node</Col>
          <Col as={"li"} className="p-1">#npm</Col>
          <Col as={"li"} className="p-1">#next</Col>
          <Col as={"li"} className="p-1">#bootstrap</Col>
          <Col as={"li"} className="p-1">#nodeSass</Col>
          <Col as={"li"} className="p-1">#react</Col>
          <Col as={"li"} className="p-1">#mongoose</Col>
          <Col as={"li"} className="p-1">#mongoDB</Col>
          <Col as={"li"} className="p-1">#redux</Col>
          <Col as={"li"} className="p-1">#configureStore</Col>
          <Col as={"li"} className="p-1">#dispatch</Col>
          <Col as={"li"} className="p-1">#provider</Col>
          <Col as={"li"} className="p-1">#nextConnect</Col>
          <Col as={"li"} className="p-1">#reducer</Col>
          <Col as={"li"} className="p-1">#state</Col>
          <Col as={"li"} className="p-1">#action</Col>
          <Col as={"li"} className="p-1">#initialState</Col>
          <Col as={"li"} className="p-1">#createSlice</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
