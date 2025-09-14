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
              <h1>Privacy Policy</h1>
              <p className="lead mb-0">Last update on Aug 2025</p>
            </div>
            <h6 className="mb-5 fw-normal">
              At Five Software Solution, your privacy is our priority. This Privacy Policy explains how we collect, use, protect, and share your
              information when you use our services, including mobile applications, websites, and AI-based tools.
            </h6>
            <h6 className="mb-3">Information We Collect</h6>
            <p>
              We may collect: Personal Information: Name, email address, phone number, business name. Usage Data: Device info, browser type, pages
              visited, time spent. Location Data: If you permit, we may use geolocation data. AI Inputs: For AI tools, inputs and feedback may be
              collected to improve performance.
            </p>
            <h6 className="mb-3 mt-5">How We Use Your Data</h6>
            <p>
              To provide and maintain our services. To improve user experience and develop new features. For analytics and marketing (with user
              consent). To respond to support queries and feedback.
            </p>
            <h6 className="mb-3 mt-5">How We Protect Your Data</h6>
            <p>
              We use encryption, secure servers, and limited access policies. We do not sell or rent your personal data. AI-related data is anonymized
              before analysis where possible.
            </p>
            <h6 className="mb-3 mt-5">Third-Party Services</h6>
            <p>We may integrate third-party services (e.g., payment gateways, cloud storage). These services follow their own privacy policies.</p>
            <h6 className="mb-3 mt-5">Your Rights</h6>
            <p>
              You have the right to: Access, update, or delete your personal data. Opt-out of marketing communications. Withdraw consent at any time.
            </p>
            <h6 className="mb-3 mt-5">Children's Privacy</h6>
            <p>Our services are not intended for children under 13. We do not knowingly collect data from minors.</p>
            <h6 className="mb-3 mt-5"> Updates to This Policy</h6>
            <p>We may update this policy. Any changes will be posted with a new effective date.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Details
