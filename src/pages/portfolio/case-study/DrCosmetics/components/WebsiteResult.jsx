import { currency } from '@/states/constants'
import { Col, Row } from 'react-bootstrap'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const WebsiteResult = () => {
  return (
    <Col xs={12}>
      <Row className="g-4 mt-7">
        <Col lg={12}>
          <h4 className="mb-3">Result</h4>
          <p className="lead mb-4">
            Smooth shopping experience with excellent user feedback High customer retention due to wishlist, history, and smart notifications Admin
            was able to run the store entirely through the dashboard without technical overhead
          </p>

          <Link to="" className="btn btn-link heading-color text-primary-hover p-0 mb-0">
            View project website
            <BsBoxArrowUpRight className="ms-2" />
          </Link>
        </Col>
      </Row>
    </Col>
  )
}
export default WebsiteResult
