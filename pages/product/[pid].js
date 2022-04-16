import classes from '@/styles/pages/product.module.scss'
import Layout from '@/components/layout/Layout'
import { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import Image from 'next/image'

const Product = () => {
  const pizza = {
    id: 10,
    img: '/images/pizza.png',
    name: 'Napolitana',
    price: [7.99, 10.99, 15.99],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nobis.'
  }
  const [pizzaSize, setPizzaSize] = useState(0)
  return (
    <Layout title="Product Page Title">
      <section className={classes.product}>
        <Row>
          {/* Image */}
          <Col md={6} className="text-center mx-auto">
            <Image
              src={pizza.img}
              width="350"
              height="350"
              objectFit="contain"
              alt="pizza"
            />
          </Col>

          {/* Info */}
          <Col
            md={6}
            xs={10}
            className="text-lg-start text-center mx-auto"
          >
            
            <article className={classes.info}>
              <h1 className={classes.title}>{pizza.name}</h1>
              <span className={classes.price}>
                {pizza.price[pizzaSize]}€
              </span>
              <p className={classes.desc}>{pizza.desc}</p>
            </article>

            <hr />
            {/* Size */}
            <Row>
              <Col
                as={'aside'}
                md={6}
                xs={10}
                className="mx-auto mx-md-0"
              >
                <h2>Choose Size:</h2>
                <ul
                  className={`${
                    classes.size
                  } ${'d-flex justify-content-between text-center'}`}
                >
                  <li
                    onClick={() => setPizzaSize(0)}
                    className={`${
                      pizzaSize === 0 ? classes.active : ''
                    }`}
                  >
                    <Image
                      src="/images/size.png"
                      width="55"
                      height="80"
                      objectFit="contain"
                      alt="pizza"
                    />
                    <div>small</div>
                  </li>
                  <li
                    onClick={() => setPizzaSize(1)}
                    className={`${
                      pizzaSize === 1 ? classes.active : ''
                    }`}
                  >
                    <Image
                      src="/images/size.png"
                      width="70"
                      height="80"
                      objectFit="contain"
                      alt="pizza"
                    />
                    <div>medium</div>
                  </li>
                  <li
                    onClick={() => setPizzaSize(2)}
                    className={`${
                      pizzaSize === 2 ? classes.active : ''
                    }`}
                  >
                    <Image
                      src="/images/size.png"
                      width="80"
                      height="80"
                      objectFit="contain"
                      alt="pizza"
                    />
                    <div>large</div>
                  </li>
                </ul>
              </Col>
            </Row>

            <hr />
            {/* Ingredients */}
            <Row>
              <Col className="text-start">
                <h3>Aditional Ingredients:</h3>
                <div className={classes.ingredients}>
                  <Form.Check
                    type="switch"
                    id="cheese"
                    label="Extra Cheese"
                  />
                  <Form.Check
                    type="switch"
                    id="double"
                    label="Double Ingredients"
                  />
                  <Form.Check
                    type="switch"
                    id="spicy"
                    label="Spicy Sauce"
                  />
                </div>
              </Col>
            </Row>

            <hr />
            {/* Quantity */}
            <Row>
              <Col xs={3} lg={2}>
                <Form.Label visuallyHidden>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  max="9"
                  defaultValue={1}
                />
              </Col>
              <Col>
                <Button type="submit" className="mb-2">
                  Add to Cart
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </Layout>
  )
}

export default Product
