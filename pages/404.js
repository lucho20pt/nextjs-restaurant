import Layout from '@/components/layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'

import Link from 'next/link'

const MyCustom404Page = (props) => {
  return (
    <Layout>
      <div className="text-center">
        <h1>404 - Page Not Found</h1>
        <br />
        <h4>
          <Link href="/">Go To Home Page</Link>
        </h4>
      </div>
    </Layout>
  )
}

export default MyCustom404Page
