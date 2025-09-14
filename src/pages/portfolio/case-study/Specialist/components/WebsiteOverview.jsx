import caseStudyImg1 from '@/assets/images/portfolio/case-study-01.jpg'
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
              Ideas are the seeds of transformation. For Mr. Hanafy, the dream was to digitize chemistry education through a smart, modern, and secure
              application.
            </p>
            <p>
              This idea was brought to life by combining intuitive UX, powerful media delivery (video, audio, PDF, and interactive text), and a robust
              code-access-based system to ensure content privacy.
            </p>
            <ul className="list-inline mb-6 icons-center gap-1 flex-wrap">
              <li className="list-inline-item">
                {' '}
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" to="">
                  Mobile learning
                </Link>{' '}
              </li>
              <li className="list-inline-item">
                {' '}
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" to="">
                  Chemistry
                </Link>{' '}
              </li>
              <li className="list-inline-item">
                {' '}
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" to="">
                  Secure access
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
                  Firebase
                </Link>{' '}
              </li>
            </ul>
            <h4 className="mb-3">The Challenge</h4>
            <p>
              Building an app that mimics real-life classroom functionality while protecting premium content. The system needed to support multiple
              media formats and restrict access to only eligible students using lesson codes.
            </p>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Restrict access using unique lesson codes
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Deliver multiple media types: Video, Audio, PDF, Text
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Support assignments and quizzes for each lesson
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Enable full-grade general exams with certification
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Certificate generation for top-performing students
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Analytics for student performance tracking
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </>
  )
}
export default WebsiteOverview
