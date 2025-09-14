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
          <p className="lead mb-4">The BARAD platform was a hit in the UAE's competitive delivery sector:</p>

          <Link to="" className="btn btn-link heading-color text-primary-hover p-0 mb-0">
            View project website
            <BsBoxArrowUpRight className="ms-2" />
          </Link>
        </Col>
        <Col lg={7} xl={6} className="ms-auto">
          <p>
            Reduced manual coordination by 90% for kitchen vendors. Significantly increased customer satisfaction through order visibility and
            notification flow. Achieved frictionless payments with integrated Stripe UAE checkout.
          </p>

          {/* <Row className="row-cols-2 row-cols-md-3 mt-lg-6 g-4 g-lg-5">
            <Col>
              <h2 className="mb-0">
                22<span className="text-primary mb-0">%</span>
              </h2>
              <p className="mb-0">Increase in time spent on website</p>
            </Col>

            <Col>
              <h2 className="mb-0">
                4.5<span className="text-primary mb-0">M</span>
              </h2>
              <p className="mb-0">View this project got across our social media network</p>
            </Col>
            <Col>
              <h2 className="mb-0">
                {currency}12.8<span className="text-primary mb-0">M</span>
              </h2>
              <p className="mb-0">Total raised in funding so far</p>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </Col>
  )
}
export default WebsiteResult
