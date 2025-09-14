import caseStudyImg1 from '@/assets/images/portfolio/case-study-04.jpg'
import { BsBoxArrowUpRight, BsCheckCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { projectInfoData } from '../data'
import { Card, Col, Row } from 'react-bootstrap'
const WebsiteOverview = () => {
  return (
    <>
      <Col xs={12} className="mt-6">
        <Card
          className="h-300px h-md-400px h-xl-600px overflow-hidden"
          style={{
            background: `url("${caseStudyImg1}") no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Col>

      <Col xs={12} className="mt-6">
        <Row>
          <Col xs={11} lg={5} xl={4} className="mx-auto mt-n8 mt-md-n9">
            <Card className="card-body bg-dark p-sm-5" data-bs-theme="dark">
              <ul className="list-group list-group-borderless">
                {(projectInfoData || []).map((item, idx) => (
                  <li key={idx} className="list-group-item mb-3">
                    <small>{item.title}</small>
                    <p className="heading-color lead mt-1 mb-0">{item.description}</p>
                  </li>
                ))}

                <li className="list-group-item d-grid mb-0">
                  <Link to="" className="btn btn-lg btn-primary mb-0 flex-centered">
                    View project website
                    <BsBoxArrowUpRight className="ms-2" />
                  </Link>
                </li>
              </ul>
            </Card>
          </Col>

          <Col lg={7} className="ms-auto ps-5 mt-6 mt-lg-0">
            <h4 className="mb-3">Overview</h4>
            <p className="lead">Dr Cosmetics is a full-featured e-commerce mobile application built to sell and manage cosmetic products online.</p>
            <p>
              Designed for both customers and administrators, the app offers a seamless shopping experience combined with powerful backend control for
              the brand owner, Dr. Ahmed Kamal.
            </p>
            <ul className="list-inline mb-6 icons-center gap-1 flex-wrap">
              <li className="list-inline-item">
                {' '}
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" to="">
                  Branding
                </Link>{' '}
              </li>
              <li className="list-inline-item">
                {' '}
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" to="">
                  Packaging
                </Link>{' '}
              </li>
              <li className="list-inline-item">
                {' '}
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" to="">
                  UI/UX design
                </Link>{' '}
              </li>
            </ul>
            <h4 className="mb-3">The Challenge</h4>
            <p>The main challenges faced by the client were:</p>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Building a reliable e-commerce app tailored to the cosmetics market.
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Including all essential shopping features (cart, wishlist, orders, coupons).
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Creating a flexible admin dashboard for easy product and order management.
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Ensuring both speed and scalability across platforms.
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </>
  )
}
export default WebsiteOverview
