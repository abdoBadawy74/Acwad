import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Details = () => {
  return (
    <section className="pt-lg-8 pt-xl-9">
      <Container className="pt-4 pt-lg-0">
        <Row>
          <Col xl={8} className="mx-auto">
            <div className="text-center mb-6">
              <h1>Terms &amp; Conditions</h1>
              <p className="lead mb-0">Last update on Aug 2025</p>
            </div>
            <h6 className="mb-5 fw-normal">Welcome to Five Software Solution. These Terms govern your access to and use of our services.</h6>
            <h6 className="mb-3">Acceptance of Terms</h6>
            <p>By using our services, you agree to be bound by these Terms and our Privacy Policy.</p>
            <h6 className="mb-3 mt-5">Services Offered</h6>
            <p>Five Software Solution provides software development, design, AI consulting, and related digital services.</p>
            <h6 className="mb-3 mt-5">Intellectual Property</h6>
            <p>
              All content, logos, designs, and code developed by us remain the intellectual property of Five Software Solution, unless otherwise
              agreed upon in a contract.
            </p>
            <h6 className="mb-3 mt-5">Client Responsibilities</h6>
            <p>
              Clients must: Provide timely feedback and resources. Respect payment schedules and milestone agreements. Ensure that any third-party
              content shared is licensed or owned.
            </p>
            <h6 className="mb-3 mt-5">Payments & Refunds</h6>
            <p>
              Payments are made as per agreed milestones. Refunds are considered on a case-by-case basis and are subject to project status and scope.
            </p>
            <h6 className="mb-3 mt-5">Confidentiality</h6>
            <p>We treat all client information as confidential. A signed NDA can be provided upon request.</p>
            <h6 className="mb-3 mt-5">Limitation of Liability</h6>
            <p>
              We are not liable for: Loss of profits or business interruption. Third-party service failures or delays. Issues arising from improper
              use of our products.
            </p>
            <h6 className="mb-3 mt-5">Termination</h6>
            <p>We reserve the right to suspend or terminate services for violation of these terms or misuse of our systems.</p>
            <h6 className="mb-3 mt-5">Governing Law</h6>
            <p>These terms are governed by the laws of Egypt.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Details
