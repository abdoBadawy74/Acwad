import { FaArrowRightLong, FaCircle } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'react-bootstrap'
const ItemEndCard = ({ categories, clientLogo, description, image, title, year, link }) => {
  return (
    <Card className="card-img-scale bg-transparent overflow-hidden mb-6 mb-xl-8">
      <Row className="g-xl-6 align-items-center">
        <Col lg={6} className="order-2">
          <CardBody className="text-lg-end h-100 px-0 p-xl-5">
            <img src={clientLogo} className="w-80px mb-3 mb-lg-4" alt="Client-img" />
            <CardTitle as={'h4'}>{title}</CardTitle>
            <CardText as={'p'} className="mb-3 mb-lg-4">
              {description}
            </CardText>
            <div className="d-flex justify-content-lg-end gap-2 gap-sm-3 gap-lg-1 flex-lg-column flex-wrap mb-3 mb-lg-4">
              <div className="icons-center justify-content-end">
                <FaCircle size={10} className="text-primary me-2" />
                {year}
              </div>

              {(categories || []).map((category, idx) => (
                <span key={idx}>{category}</span>
              ))}
            </div>
            <Link to={link} className="text-primary-hover stretched-link heading-color mb-0 icons-center justify-content-end">
              View case study
              <FaArrowRightLong className="ms-2" />
            </Link>
          </CardBody>
        </Col>
        <Col lg={6} className="order-1 order-lg-2">
          <div className="card-img-scale-wrapper rounded-2 overflow-hidden h-100">
            <img src={image} className="img-scale" alt="portfolio-img" />
          </div>
        </Col>
      </Row>
    </Card>
  )
}
export default ItemEndCard
