import Layout from '@/components/layout/Layout'
import classes from '@/styles/pages/orders.module.scss'
import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'

const Orders = () => {
  return (
    <Layout title="Orders Page Title">
      <section className={classes.orders}>
        <Row>
          <Col lg={8} className="text-center">
            <table
              className={classes.table}
              width="100%"
              border="2"
              cellSpacing="0"
              cellPadding="4"
            >
              <thead>
                <tr>
                  <th className={classes.name}>Order ID</th>
                  <th className={classes.customer}>Customer</th>
                  <th className={classes.address}>Address</th>
                  <th className={classes.price}>Price</th>
                  <th className={classes.total}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={classes.name}>
                    <div>10</div>
                  </td>
                  <td className={classes.customer}>
                    <div>Daniel Batista</div>
                  </td>
                  <td className={classes.address}>
                    <div>Praceta Cristovão Falcão, N22 5D</div>
                  </td>
                  <td className={classes.price}>
                    <div>9.99€</div>
                  </td>
                  <td className={classes.total}>
                    <div>19.98€</div>
                  </td>
                </tr>
              </tbody>
            </table>

            <aside className={classes.status}>
              <Row className='py-4'>
                <Col className={classes.status_done}>
                    <div>
                        <Image src="/images/paid.png" width="40" height="40" objectFit="contain" alt="paid" />
                    </div>
                    <div>
                        <Image src="/images/checked.png" width="20" height="20" objectFit="contain" alt="check" />
                    </div>
                </Col>
                <Col className={classes.status_inProgress}>
                    <div>
                        <Image src="/images/bake.png" width="40" height="40" objectFit="contain" alt="paid" />
                    </div>
                    <div>
                        <Image src="/images/checked.png" width="20" height="20" objectFit="contain" alt="check" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <Image src="/images/bike.png" width="40" height="40" objectFit="contain" alt="paid" />
                    </div>
                    <div>
                        <Image src="/images/checked.png" width="20" height="20" objectFit="contain" alt="check" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <Image src="/images/delivered.png" width="40" height="40" objectFit="contain" alt="paid" />
                    </div>
                    <div>
                        <Image src="/images/checked.png" width="20" height="20" objectFit="contain" alt="check" />
                    </div>
                </Col>
              </Row>
            </aside>
          </Col>
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
                <button disabled className="btn btn-success">
                  Paid
                </button>
              </div>
            </aside>
          </Col>
        </Row>
      </section>
    </Layout>
  )
}

export default Orders
