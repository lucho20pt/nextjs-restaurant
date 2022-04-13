import Layout from '@/components/layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import PizzaList from '@/components/products/PizzaList'

export default function Index() {
  return (
    <Layout title="Home Page Title">
      <PizzaList />
    </Layout>
  )
}
