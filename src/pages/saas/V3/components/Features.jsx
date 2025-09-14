import decoration7 from '@/assets/images/elements/saas-decoration/07.png';
import decoration8 from '@/assets/images/elements/saas-decoration/08.png';
import decoration9 from '@/assets/images/elements/saas-decoration/09.png';
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaStar } from 'react-icons/fa6';
const Features = () => {
  return <section className="pb-0">
            <Container>

                <div className="inner-container text-center mb-4 mb-sm-5">
                    <h2 className="mb-4">Expert solution for your growth</h2>
                    <p className="mb-0">There is nothing that can stop you from achieving what you want, except
                        yourself. If you devote yourself to it you will achieve your goal.</p>
                </div>

                <Row className="justify-content-center g-4 g-md-6">

                    <Col md={6} lg={4}>
                        <Card className="bg-light border border-secondary border-opacity-10 overflow-hidden p-0 h-100">
                            <Card.Body className="px-sm-5 pt-sm-5">
                                <h5 className="mb-3">Multiple integrations</h5>
                                <p className="mb-3">Multiple integrations play a vital role in modern business
                                    operations by connecting diverse systems.</p>
                                <Link to="/saas/integrations" className="btn btn-sm btn-dark mb-0">View integrations</Link>
                            </Card.Body>

                            <Card.Footer className="bg-transparent p-0">
                                <img src={decoration7} alt="" />
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col md={6} lg={4}>
                        <Card className="bg-light border border-secondary border-opacity-10 overflow-hidden p-0 h-100">
                            <Card.Body className="px-sm-5 pt-sm-5">
                                <h5 className="mb-3">High Conversions</h5>
                                <p className="mb-3">Each row should represent a distinct record, while columns hold
                                    various attributes or variables.</p>

                                <p className="mb-0">
                                    <span className="fw-bold heading-color icons-center">4.5 <FaStar size={18} className="text-warning me-2 ms-1" />|</span>
                                    <Link to="/customer/stories" className="text-primary-hover ms-2">View 256
                                        reviews
                                    </Link>
                                </p>
                            </Card.Body>

                            <Card.Footer className="bg-transparent p-0">
                                <img src={decoration8} alt="" />
                            </Card.Footer>
                        </Card>
                    </Col>


                    <Col md={6} lg={4}>
                        <Card className="bg-light border border-secondary border-opacity-10 overflow-hidden p-0 h-100">
                            <Card.Body className="px-sm-5 pt-sm-5">
                                <h5 className="mb-3">Real-time analytics</h5>
                                <p className="mb-3">A unified customer view enables personalized interactions across
                                    various touchpoints.</p>
                                <Link to="/portfolio/showcase" className="icon-link icon-link-hover">Read our case
                                    study<BsArrowRight className='bi' /> </Link>
                            </Card.Body>

                            <Card.Footer className="bg-transparent p-0">
                                <img src={decoration9} alt="" />
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Features;