import { BsPatchCheck } from 'react-icons/bs';
import slackImg from '@/assets/images/elements/slack.svg';
import shopifyImg from '@/assets/images/elements/shopify.svg';
import redditImg from '@/assets/images/elements/reddit.svg';
import googleImg from '@/assets/images/elements/gicon.svg';
import dropboxImg from '@/assets/images/elements/dropbox.svg';
import googleDriveImg from '@/assets/images/elements/google-drive.svg';
import mailchimpImg from '@/assets/images/elements/mailchimp.svg';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Integration = () => {
  return <section className="pt-5 pt-sm-0">
            <Container>
                <Row className="align-items-center">

                    <Col lg={6} className="pe-xl-5 order-2">
                        <Row className="align-items-sm-center">

                            <Col xs={6} sm={4} className="d-none d-sm-block">
                                <div className="bg-light rounded-4 text-center p-4 mb-4">
                                    <div className="icon-xl bg-body rounded-circle mx-auto mb-2">
                                        <img src={slackImg} className="h-40px" alt="Integration-img" />
                                    </div>
                                    <span className="heading-color fw-bold">Stack</span>
                                </div>

                                <div className="bg-light rounded-4 text-center p-4 mb-4">
                                    <div className="icon-xl bg-body rounded-circle mx-auto mb-2">
                                        <img src={shopifyImg} className="h-40px" alt="Integration-img" />
                                    </div>
                                    <span className="heading-color fw-bold">Shopify</span>
                                </div>
                            </Col>

                            <Col sm={4} xs={6}>
                                <div className="bg-light rounded-4 text-center p-4 mb-4">
                                    <div className="icon-xl bg-body rounded-circle mx-auto mb-2">
                                        <img src={redditImg} className="h-40px" alt="Integration-img" />
                                    </div>
                                    <span className="heading-color fw-bold">Reddit</span>
                                </div>

                                <div className="bg-light rounded-4 text-center p-4 mb-4">
                                    <div className="icon-xl bg-body rounded-circle mx-auto mb-2">
                                        <img src={googleImg} className="h-40px" alt="Integration-img" />
                                    </div>
                                    <span className="heading-color fw-bold">Google</span>
                                </div>

                                <div className="bg-light rounded-4 text-center p-4 mb-4">
                                    <div className="icon-xl bg-body rounded-circle mx-auto mb-2">
                                        <img src={dropboxImg} className="h-40px" alt="Integration-img" />
                                    </div>
                                    <span className="heading-color fw-bold">Dropbox</span>
                                </div>
                            </Col>

                            <Col sm={4} xs={6}>
                                <div className="bg-light rounded-4 text-center p-4 mb-4">
                                    <div className="icon-xl bg-body rounded-circle mx-auto mb-2">
                                        <img src={googleDriveImg} className="h-40px" alt="Integration-img" />
                                    </div>
                                    <span className="heading-color fw-bold">Google Drive</span>
                                </div>

                                <div className="bg-light rounded-4 text-center p-4 mb-4">
                                    <div className="icon-xl bg-body rounded-circle mx-auto mb-2">
                                        <img src={mailchimpImg} className="h-40px" alt="Integration-img" />
                                    </div>
                                    <span className="heading-color fw-bold">Mailchimp</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>


                    <Col lg={6} className="order-1 order-lg-2 mb-5 mb-lg-0 ps-xl-5">

                        <h2 className="mb-4">Seamless connections for enhanced performance</h2>
                        <p className="mb-4">Explore our array of integrations that effortlessly connect with your
                            existing tools and amplify your workflow efficiency.</p>

                        <ul className="list-group list-group-borderless mb-4">
                            <li className="list-group-item heading-color d-flex mb-0 icons-center">
                                <BsPatchCheck className="text-primary me-2" />Connect with a wide range of
                                third-party applications
                            </li>
                            <li className="list-group-item heading-color d-flex mb-0 icons-center">
                                <BsPatchCheck className="text-primary me-2" />Automate tasks and reduce manual
                                data entry
                            </li>
                            <li className="list-group-item heading-color d-flex mb-0 icons-center">
                                <BsPatchCheck className="text-primary me-2" />Rest assured that your data remains
                                safe and protected
                            </li>
                        </ul>

                        <Link to="" className="btn btn-dark mb-0">Know more</Link>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Integration;