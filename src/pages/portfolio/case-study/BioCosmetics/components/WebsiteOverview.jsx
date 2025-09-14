import caseStudyImg1 from '@/assets/images/portfolio/case-study-02.jpg'
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
            <p className="lead">YaHalaa is a smart event management application developed for Resithon.</p>
            <p>
              {' '}
              The main goal was to streamline the process of displaying sessions over a specific period, allowing users to register for any session of
              their choice, receive a digital ticket, and check in securely on the event day through QR scanning.
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
            <p>Resithon faced several challenges in managing their event logistics manually:</p>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                No centralized system to manage session registrations.
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Difficulty verifying attendee access to specific sessions.
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Lack of real-time direction and tracking during the event.
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                The need for a secure and fast check-in solution for multiple sessions.
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </>
  )
}
export default WebsiteOverview
