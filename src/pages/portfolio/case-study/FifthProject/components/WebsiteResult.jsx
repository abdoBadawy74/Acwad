import { currency } from '@/states/constants'
import { Col, Row } from 'react-bootstrap'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const WebsiteResult = () => {
  return (
    <Col xs={12}>
      <Row className="g-4 mt-7">
        <Col lg={5}>
          <h4 className="mb-3">Result</h4>
          <p className="lead mb-4">
            The result was a refined, fast, and easy-to-use mobile experience that streamlined the booking process for both clients and staff.
          </p>

          <Link to="" className="btn btn-link heading-color text-primary-hover p-0 mb-0">
            View project website
            <BsBoxArrowUpRight className="ms-2" />
          </Link>
        </Col>
        <Col lg={7} xl={6} className="ms-auto">
          <p>Ms. Mariam praised the application for its simplicity and power.</p>
          <p>Seamless Stripe integration for card payments</p>

          <Row className="row-cols-2 row-cols-md-3 mt-lg-6 g-4 g-lg-5">
            <Col>
              <h2 className="mb-0">
                48<span className="text-primary mb-0">%</span>
              </h2>
              <p className="mb-0">decrease in missed appointments</p>
            </Col>

            <Col>
              <h2 className="mb-0">
                2.3<span className="text-primary mb-0">K</span>
              </h2>
              <p className="mb-0">bookings completed monthly</p>
            </Col>
            <Col>
              <h2 className="mb-0">
                4.8<span className="text-primary mb-0">★</span>
              </h2>
              <p className="mb-0">user satisfaction rating</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}
export default WebsiteResult
