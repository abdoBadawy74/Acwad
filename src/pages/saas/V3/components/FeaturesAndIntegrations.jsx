import integration2 from '@/assets/images/elements/integration-2.svg';
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { features } from "@/pages/saas/V3/data";
import FeatureCard from "@/pages/saas/V3/components/FeatureCard";
const FeaturesAndIntegrations = () => {
  return <section className="pb-0">
            <Container>

                <div className="inner-container-small text-center mb-4 mb-sm-5">
                    <h2 className="mb-4">Understanding of your website's impact</h2>
                    <p className="mb-4">There is nothing that can stop you from achieving what you want, except
                        yourself. If you devote yourself to it you will achieve your goal.</p>
                    <Link to="/saas/integrations" className="btn btn-dark mb-0">View all integrations</Link>
                </div>

                <img src={integration2} className="mt-5" alt="" />

                <Row className="justify-content-center g-sm-6 mt-6">
                    {features.map((feature, idx) => <Col sm={6} lg={4} className="mb-5 mb-sm-0" key={idx}>
                                <FeatureCard feature={feature} />
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default FeaturesAndIntegrations;