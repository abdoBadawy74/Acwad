import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs'
import usFlag from '@/assets/images/flags/us.svg'
import { Link } from 'react-router-dom'

export const WorkCard = ({ work }) => {
  const { description, image, title } = work
  return (
    <Card className="card-body bg-light border">
      <div className="d-flex align-items-center">
        <div className="d-flex">
          <img src={image} className="h-50px" />
          <div className="mx-3">
            <h6 className="mb-0">{title}</h6>
            <small>{description}</small>
          </div>
        </div>
        <Link className="icon-link icon-link-hover text-primary-hover stretched-link" to="">
          <BsArrowRight className="bi fs-5" />{' '}
        </Link>
      </div>
    </Card>
  )
}

const contactDetail = {
  address: '1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.',
  email: 'example@gmail.com',
  number: '(251) 854-6308',
}

const Work = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <h2 className="mb-2">Follow our work</h2>
          <p className="mb-0">
            The combination of my passion for design, code &amp; interaction positions me in a unique place in the web design world.
          </p>
        </div>
        <Row className="row-cols-1 row-cols-lg-3 g-4">
          <Col>
            <Card className="card-body bg-light border p-sm-5">
              <div className="mb-4">
                <BsGeoAlt size={24} className="fa-xl text-primary" />
              </div>
              <h6 className="mb-4">Office Address</h6>
              <div className="d-flex align-items-center mb-2">
                <div className="avatar avatar-xxs me-2">
                  <img className="avatar-img rounded-circle" src={usFlag} alt="avatar" />
                </div>
                <span className="heading-color fw-semibold mb-0">US office:</span>
              </div>
              <address className="mb-0">{contactDetail.address}</address>
            </Card>
          </Col>
          <Col>
            <Card className="card-body bg-light border p-sm-5">
              <div className="mb-4">
                <BsEnvelope size={24} className="fa-xl text-primary" />
              </div>
              <h6 className="mb-3">Email us</h6>
              <p>We're on top of things and aim to respond to all inquiries within 24 hours.</p>
              <Link to={`mail:${contactDetail.email}`} className="heading-color text-primary-hover text-decoration-underline mb-0">
                {contactDetail.email}
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="card-body bg-light border p-sm-5">
              <div className="mb-4">
                <BsTelephone size={24} className="fa-xl text-primary" />
              </div>
              <h6 className="mb-3">Call us</h6>
              <p>Let's work together towards a common goal - get in touch!</p>
              <Link to={`tel:${contactDetail.number}`} className="heading-color text-primary-hover text-decoration-underline mb-0">
                {contactDetail.number}
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Work
