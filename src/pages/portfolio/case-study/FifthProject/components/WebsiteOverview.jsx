import caseStudyImg1 from '@/assets/images/portfolio/case-study-05.jpg'
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
            <p className="lead">
              After Glow was designed to provide a seamless booking experience for beauty salon clients. It allows users to browse available beauty
              professionals, view their services, book appointments, and pay online—all within a few taps.
            </p>
            <p>The app merges sleek aesthetics with powerful functionality to deliver a premium user experience.</p>
            <ul className="list-inline mb-6 icons-center gap-1 flex-wrap">
              <li className="list-inline-item">
                {' '}
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" to="">
                  Beauty Tech
                </Link>{' '}
              </li>
              <li className="list-inline-item">
                {' '}
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" to="">
                  Stripe Integration
                </Link>{' '}
              </li>
              <li className="list-inline-item">
                {' '}
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" to="">
                  Real-time Booking
                </Link>{' '}
              </li>
              <li className="list-inline-item">
                {' '}
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" to="">
                  Flutter
                </Link>{' '}
              </li>
              <li className="list-inline-item">
                {' '}
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" to="">
                  UX for Beauty Services
                </Link>{' '}
              </li>
            </ul>
            <h4 className="mb-3">The Challenge</h4>
            <p>
              Creating a modern app tailored for busy beauty clients in the UAE. The platform needed to support real-time bookings, professional
              selection, secure online payments, and booking history with rebooking options.
            </p>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Allow users to browse and select beauty professionals
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Enable real-time appointment scheduling
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Integrate secure Stripe payments
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Let users track, rebook, or cancel appointments easily
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Notify professionals of new bookings in real time
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Deliver responsive performance and intuitive design across platforms
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </>
  )
}
export default WebsiteOverview
