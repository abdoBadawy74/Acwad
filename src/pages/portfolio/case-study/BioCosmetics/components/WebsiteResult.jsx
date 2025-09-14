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
          <p className="lead mb-4">The outcome was outstanding: Seamless management of session registrations.</p>

          <Link to="" className="btn btn-link heading-color text-primary-hover p-0 mb-0">
            View project website
            <BsBoxArrowUpRight className="ms-2" />
          </Link>
        </Col>
        <Col lg={7} xl={6} className="ms-auto">
          <p>Smooth, intuitive experience praised by both the attendees and the organizing team.</p>

          <Row className="row-cols-2 row-cols-md-2 mt-lg-6 g-4 g-lg-5">
            <Col>
              <h2 className="mb-0">
                80<span className="text-primary mb-0">%</span>
              </h2>
              <p className="mb-0">Reduced check-in time</p>
            </Col>

            <Col>
              <h2 className="mb-0">
                5K<span className="text-primary mb-0">+</span>
              </h2>
              <p className="mb-0">session registrations completed via the app.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}
export default WebsiteResult
