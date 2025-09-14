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
          <p className="lead mb-4">The result was a powerful mobile experience, praised highly by Mr. Hanafy Al-Efany and his students.</p>

          <Link to="" className="btn btn-link heading-color text-primary-hover p-0 mb-0">
            View project website
            <BsBoxArrowUpRight className="ms-2" />
          </Link>
        </Col>
        <Col lg={7} xl={6} className="ms-auto">
          <p>
            By combining multimedia delivery with controlled access and performance evaluation, students had a complete classroom-like experience on
            mobile.
          </p>

          <Row className="row-cols-2 row-cols-md-4 mt-lg-6 g-4 g-lg-5">
            <Col>
              <h2 className="mb-0">
                31<span className="text-primary mb-0">%</span>
              </h2>
              <p className="mb-0">increase in student engagement</p>
            </Col>
            <Col>
              <h2 className="mb-0">
                6.2<span className="text-primary mb-0">K</span>
              </h2>
              <p className="mb-0">active code-based accesses weekly</p>
            </Col>
            <Col>
              <h2 className="mb-0">
                4.9<span className="text-primary mb-0">★</span>
              </h2>
              <p className="mb-0">average rating from students</p>
            </Col>
            <Col>
              <h2 className="mb-0">
                100<span className="text-primary mb-0">%</span>
              </h2>
              <p className="mb-0">tutor satisfaction with final delivery</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}
export default WebsiteResult
