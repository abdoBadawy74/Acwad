import { BsGeoAlt, BsHeadset } from "react-icons/bs";
import { locations } from "@/pages/contact/V2/data";
import backgroundImg3 from '@/assets/images/bg/03.jpg';
import Jarallax from "@/components/Jarallax";
import { Card, CardTitle, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const LocationCard = ({
  location
}) => {
  const {
    address,
    countryName,
    image,
    number
  } = location;
  return <Card className="card-body p-4">
      <div className="avatar mb-4">
        <img className="avatar-img rounded-circle" src={image} alt="avatar" />
      </div>
      <CardTitle as={"h6"} className="mb-3"><Link to="">{countryName}</Link></CardTitle>
      <ul className="list-group list-group-borderless border-0">
        <li className="d-flex mb-3"><span><BsGeoAlt className="text-primary me-2" /></span>{address}</li>
        <li className="d-flex mb-3 align-items-center"><BsHeadset className="text-primary me-2" />Call: {number}</li>
      </ul>
    </Card>;
};
const OfficeLocation = () => {
  return <Jarallax tag={"section"} className="bg-parallax position-relative" style={{
    background: `url(${backgroundImg3}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <Container>
        <Row className="g-4 g-md-6 text-start justify-content-end">
          {locations.map((location, idx) => <Col md={4} key={idx}>
              <LocationCard location={location} />
            </Col>)}
        </Row>
      </Container>
    </Jarallax>;
};
export default OfficeLocation;