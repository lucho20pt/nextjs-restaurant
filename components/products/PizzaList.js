import classes from '@/styles/products/PizzaList.module.scss'
import { Row, Col } from 'react-bootstrap'
import PizzaCard from '@/components/products/PizzaCard'

const PizzaList = () => {
  return (
    <section className={classes.pizzaList}>
      <Row className='mb-5'>
        <Col lg={6} md={8} xs={10} className="text-center mx-auto">
          <h1 className={classes.title}>The best pizza in town</h1>
          <p className={classes.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dicta sunt perferendis, sequi alias fugit distinctio harum
            laborum repudiandae porro et.
          </p>
        </Col>
      </Row>

      <Row className="text-center">
        <Col md={4} sm={5} xs={7} className="mx-auto mb-4">
          <PizzaCard />
        </Col>
        <Col md={4} sm={5} xs={7} className="mx-auto mb-4">
          <PizzaCard />
        </Col>
        <Col md={4} sm={5} xs={7} className="mx-auto mb-4">
          <PizzaCard />
        </Col>
        <Col md={4} sm={5} xs={7} className="mx-auto mb-4">
          <PizzaCard />
        </Col>
        <Col md={4} sm={5} xs={7} className="mx-auto mb-4">
          <PizzaCard />
        </Col>
      </Row>
    </section>
  )
}

export default PizzaList
