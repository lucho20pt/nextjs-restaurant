import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import classes from '@/styles/layout/slider.module.scss'

const CAROUSEL = [
  {
    alt: 'first slide',
    image: '/images/featured-1.png',
    caption: {
      title: 'First slide label',
      subtitle: 'lorem ipsum'
    }
  },
  {
    alt: 'second slide',
    image: '/images/featured-2.png',
    caption: {
      title: 'Second slide label',
      subtitle: 'lorem ipsum'
    }
  },
  {
    alt: 'third slide',
    image: '/images/featured-3.png',
    caption: {
      title: 'third slide label',
      subtitle: 'lorem ipsum'
    }
  }
]

const Slider = () => {
  //
  const carousel = CAROUSEL
  const carouselItem = carousel.map((item, i) => (
    <Carousel.Item className="text-center pb-5" key={i}>
      <Link href="/about" passHref>
        <a>
          <Image
            src={item.image}
            alt={item.alt}
            width="800"
            height="400"
            objectFit="contain"
          />
        </a>
      </Link>
      <Carousel.Caption>
        <h6>{item.caption.title}</h6>
      </Carousel.Caption>
    </Carousel.Item>
  ))

  return (
    <section className={classes.slider}>
      <Carousel interval={4000} variant="light">
        {carouselItem}
      </Carousel>
    </section>
  )
}

export default Slider
