import classes from '@/styles/products/PizzaCard.module.scss'
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const PizzaCard = () => {
  return (
    <article className={classes.pizzaCard}>
      <Link href="/" passHref>
        <a>
          <Image
            className={classes.img}
            src="/images/pizza.png"
            alt="alt"
            width="300"
            height="300"
            objectFit="contain"
          />
        </a>
      </Link>
      <h2 className={classes.title}>Napolitana</h2>
      <strong className={classes.price}>10.99€</strong>
      <p className={`${classes.desc} ${'px-lg-5 my-1'}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Molestiae, ratione.
      </p>
    </article>
  )
}

export default PizzaCard
