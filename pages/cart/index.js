import classes from '@/styles/cart/cart.module.scss'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'

const Cart = () => {
  return (
    <Layout title="Cart Page Title">
      <section className={classes.cart}>
        <Row>
          {/* Products */}
          <Col md={8} className="text-center mb-5">
            <table
              className={classes.table}
              width="100%"
              border="2"
              cellSpacing="0"
              cellPadding="4"
            >
              <thead>
                <tr>
                  <th className={classes.name}>Name</th>
                  <th className={classes.image}>Product</th>
                  <th className={classes.extras}>Extras</th>
                  <th className={classes.price}>Price</th>
                  <th className={classes.quantity}>Quantity</th>
                  <th className={classes.total}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={classes.name}>
                    <div>Napolitana</div>
                  </td>
                  <td className={classes.image}>
                    <div>
                      <Image
                        src="/images/pizza.png"
                        width="40"
                        height="40"
                        objectFit="cover"
                        alt="pizza"
                      />
                    </div>
                  </td>
                  <td className={classes.extras}>
                    <div>
                      Double ingredients <br /> extra cheese
                    </div>
                  </td>
                  <td className={classes.price}>
                    <div>9.99€</div>
                  </td>
                  <td className={classes.quantity}>
                    <div>2</div>
                  </td>
                  <td className={classes.total}>
                    <div>19.98€</div>
                  </td>
                </tr>
                <tr>
                  <td className={classes.name}>
                    <div>Napolitana</div>
                  </td>
                  <td className={classes.image}>
                    <div>
                      <Image
                        src="/images/pizza.png"
                        width="40"
                        height="40"
                        objectFit="cover"
                        alt="pizza"
                      />
                    </div>
                  </td>
                  <td className={classes.extras}>
                    <div>
                      Double ingredients <br /> extra cheese
                    </div>
                  </td>
                  <td className={classes.price}>
                    <div>9.99€</div>
                  </td>
                  <td className={classes.quantity}>
                    <div>2</div>
                  </td>
                  <td className={classes.total}>
                    <div>19.98€</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
          {/* CartTotal */}
          <Col>
            <aside className={`${classes.cartTotal} ${'p-3'}`}>
              <div className="text-center">
                <h2 className={classes.title}>Cart Total</h2>
              </div>
              <hr />
              <div className={classes.text}>
                <b>SubTotal</b> 19.98€
              </div>
              <div className={classes.text}>
                <b>Discount</b> 0.00€
              </div>
              <div className={classes.total}>
                <b>Total</b> 19.98€
              </div>
              <hr />
              <div className={classes.checkout}>
                <button className="btn btn-success">
                  Checkout Now
                </button>
              </div>
            </aside>
          </Col>
        </Row>
      </section>
    </Layout>
  )
}

export default Cart
